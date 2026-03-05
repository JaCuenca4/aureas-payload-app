import type { Block } from 'payload'

export const FeaturedProductsBlock: Block = {
  slug: 'featuredProducts',
  labels: {
    singular: 'Featured Products',
    plural: 'Featured Products',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 12,
    },
  ],
}
