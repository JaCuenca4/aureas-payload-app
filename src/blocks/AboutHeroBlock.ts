import type { Block } from 'payload'

export const AboutHeroBlock: Block = {
  slug: 'aboutHero',
  labels: {
    singular: 'Hero de About',
    plural: 'Heroes de About',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Our Story',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'The Soul of Our Blooms',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen Principal',
    },
  ],
}
