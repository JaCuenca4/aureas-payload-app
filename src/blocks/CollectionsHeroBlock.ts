import type { Block } from 'payload'

export const CollectionsHeroBlock: Block = {
  slug: 'collectionsHero',
  labels: {
    singular: 'Hero de Colecciones',
    plural: 'Heroes de Colecciones',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Curated Excellence',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Floral',
      localized: true,
    },
    {
      name: 'titleItalic',
      type: 'text',
      label: 'Título (itálica)',
      defaultValue: 'Masterpieces',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      localized: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen Principal',
    },
    {
      name: 'originBadge',
      type: 'text',
      label: 'Badge de Origen',
      defaultValue: 'Grown in Ecuador',
      localized: true,
    },
  ],
}
