import type { Block } from 'payload'

export const BrandStoryBlock: Block = {
  slug: 'brandStory',
  labels: {
    singular: 'Historia de Marca',
    plural: 'Historias de Marca',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Título',
      required: true,
      defaultValue: 'Aurea-S — Donde la Elegancia Se Encuentra con el Alma.',
      localized: true,
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Texto Principal',
      required: true,
      localized: true,
    },
    {
      name: 'secondaryText',
      type: 'text',
      label: 'Texto Secundario',
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
      defaultValue: 'DESCUBRIR',
      localized: true,
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace del Botón',
      defaultValue: '/collection',
    },
  ],
}
