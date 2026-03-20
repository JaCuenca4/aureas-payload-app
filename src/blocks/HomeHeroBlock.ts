import type { Block } from 'payload'

export const HomeHeroBlock: Block = {
  slug: 'homeHero',
  labels: {
    singular: 'Hero Principal',
    plural: 'Heroes Principales',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Palea',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
      defaultValue: 'Joyería de lujo diseñada en Quito, Ecuador.',
    },
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      minRows: 1,
      fields: [
        {
          name: 'bgImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen de Fondo',
        },
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
          label: 'Producto Destacado',
        },
      ],
    },
  ],
}
