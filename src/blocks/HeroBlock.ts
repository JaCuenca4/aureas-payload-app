import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
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
      name: 'subheading',
      type: 'text',
      label: 'Subtítulo',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'Texto del Botón',
      localized: true,
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace del Botón',
    },
  ],
}
