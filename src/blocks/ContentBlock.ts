import type { Block } from 'payload'

export const ContentBlock: Block = {
  slug: 'content',
  labels: {
    singular: 'Contenido',
    plural: 'Contenidos',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenido',
    },
  ],
}
