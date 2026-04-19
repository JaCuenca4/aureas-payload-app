import type { Block } from 'payload'

export const AboutCommunityBlock: Block = {
  slug: 'aboutCommunity',
  labels: {
    singular: 'Comunidad y Sostenibilidad',
    plural: 'Comunidades y Sostenibilidad',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Community & Sustainability',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Rooted in',
    },
    {
      name: 'titleItalic',
      type: 'text',
      label: 'Título (itálica)',
      defaultValue: 'Community',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Estadísticas',
      labels: { singular: 'Estadística', plural: 'Estadísticas' },
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Valor', admin: { description: 'Ej: 200+, 100%, 0' } },
        { name: 'label', type: 'text', required: true, label: 'Etiqueta' },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      label: 'Certificaciones',
      labels: { singular: 'Certificación', plural: 'Certificaciones' },
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nombre' },
        { name: 'description', type: 'text', required: true, label: 'Descripción' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen',
    },
  ],
}
