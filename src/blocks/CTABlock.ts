import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Llamada a la Acción',
    plural: 'Llamadas a la Acción',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
      label: 'Texto del Botón',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      label: 'Enlace del Botón',
    },
  ],
}
