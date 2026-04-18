import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load payload .env (server URL) + web-app .env.local (admin credentials)
dotenv.config({ path: path.resolve(__dirname, '..', '.env') })
dotenv.config({
  path: path.resolve(__dirname, '..', '..', 'aureas-web-app', '.env.local'),
  override: false,
})

const PAYLOAD_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.PAYLOAD_URL ||
  'http://localhost:3001'
const ADMIN_EMAIL = process.env.PAYLOAD_ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.PAYLOAD_ADMIN_PASSWORD

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error(
    'Missing PAYLOAD_ADMIN_EMAIL / PAYLOAD_ADMIN_PASSWORD. Check aureas-web-app/.env.local',
  )
  process.exit(1)
}

const HERO_IMAGE_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'aureas-web-app',
  'public',
  'images',
  'home',
  'hero.jpg',
)

const HOME_HERO_BLOCK = {
  badge: 'Ecuadorian Excellence',
  title: 'Premium Cut Flower Catalog',
  description:
    'Exportando la biodiversidad y belleza natural de Ecuador a mercados de alto valor desde 2023.',
  heroImageAlt: 'Luxury Ecuadorian Roses',
  altitude: '2.8k',
  altitudeLabel: 'Meters Above Sea Level Altitude',
  features: [
    { label: 'Asociaciones', text: 'A largo plazo con las mejores fincas.' },
    { label: 'Trazabilidad', text: 'Total desde el cultivo al destino final.' },
    { label: 'Cadena de Frio', text: 'Integra y protocolos post-cosecha.' },
    { label: 'Compliance', text: 'Estandares GlobalG.A.P. & Flor Ecuador.' },
  ],
  ctaText: 'Discover the Collection',
  ctaHref: '/collections',
  whatsappUrl: 'https://wa.me/593991609697',
}

const login = async () => {
  const res = await fetch(`${PAYLOAD_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  })
  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`Login failed (${res.status}): ${msg}`)
  }
  const data = await res.json()
  return data.token
}

const uploadHeroImage = async (token) => {
  if (!fs.existsSync(HERO_IMAGE_PATH)) {
    throw new Error(`Hero image not found at: ${HERO_IMAGE_PATH}`)
  }

  const fileBuffer = fs.readFileSync(HERO_IMAGE_PATH)
  const blob = new Blob([fileBuffer], { type: 'image/jpeg' })

  const form = new FormData()
  form.append('file', blob, 'hero.jpg')
  form.append('_payload', JSON.stringify({ alt: 'Luxury Ecuadorian Roses' }))

  const res = await fetch(`${PAYLOAD_URL}/api/media`, {
    method: 'POST',
    headers: { Authorization: `JWT ${token}` },
    body: form,
  })

  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`Upload failed (${res.status}): ${msg}`)
  }

  const data = await res.json()
  return data.doc.id
}

const findHomePage = async (token) => {
  const res = await fetch(
    `${PAYLOAD_URL}/api/pages?where[slug][equals]=home&limit=1`,
    { headers: { Authorization: `JWT ${token}` } },
  )
  const data = await res.json()
  return data?.docs?.[0] || null
}

const upsertHomePage = async (token, mediaId) => {
  const pageBuilder = [
    {
      blockType: 'homeHero',
      ...HOME_HERO_BLOCK,
      heroImage: mediaId,
    },
  ]

  const payload = {
    title: 'Home',
    slug: 'home',
    status: 'published',
    pageBuilder,
    meta: {
      title: 'Aurea-S | Luxury Floral Atelier from Ecuador',
      description:
        'Premium Ecuadorian cut flower catalog. Export-grade quality from the heart of the Andes.',
    },
  }

  const existing = await findHomePage(token)

  if (existing) {
    const res = await fetch(`${PAYLOAD_URL}/api/pages/${existing.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Update page failed: ${await res.text()}`)
    return (await res.json()).doc
  }

  const res = await fetch(`${PAYLOAD_URL}/api/pages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Create page failed: ${await res.text()}`)
  return (await res.json()).doc
}

const main = async () => {
  console.log('>>> Payload URL:', PAYLOAD_URL)
  console.log('>>> Admin:', ADMIN_EMAIL)

  console.log('\n[1/3] Logging in...')
  const token = await login()
  console.log('    ✓ token acquired')

  console.log('\n[2/3] Uploading hero image...')
  const mediaId = await uploadHeroImage(token)
  console.log('    ✓ media id:', mediaId)

  console.log('\n[3/3] Upserting home page...')
  const page = await upsertHomePage(token, mediaId)
  console.log('    ✓ page id:', page.id, '| slug:', page.slug)

  console.log('\nDone. Visit the admin at', `${PAYLOAD_URL}/admin`, 'to verify.')
}

main().catch((e) => {
  console.error('\nSeed failed:', e.message)
  process.exit(1)
})
