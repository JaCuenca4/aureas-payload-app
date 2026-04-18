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
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Texto Principal',
      required: true,
    },
    {
      name: 'secondaryText',
      type: 'text',
      label: 'Texto Secundario',
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
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace del Botón',
      defaultValue: '/collection',
    },
  ],
}
