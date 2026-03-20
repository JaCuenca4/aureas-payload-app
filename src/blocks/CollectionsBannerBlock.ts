import type { Block } from 'payload'

export const CollectionsBannerBlock: Block = {
  slug: 'collectionsBanner',
  labels: {
    singular: 'Banner de Colecciones',
    plural: 'Banners de Colecciones',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Título',
      defaultValue: 'Nuestras Colecciones',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
    },
  ],
}
