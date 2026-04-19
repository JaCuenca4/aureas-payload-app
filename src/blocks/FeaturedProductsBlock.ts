import type { Block } from 'payload'

export const FeaturedProductsBlock: Block = {
  slug: 'featuredProducts',
  labels: {
    singular: 'Productos Destacados',
    plural: 'Productos Destacados',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
      localized: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 12,
      label: 'Productos',
    },
  ],
}
