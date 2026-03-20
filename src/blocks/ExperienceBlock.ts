import type { Block } from 'payload'

export const ExperienceBlock: Block = {
  slug: 'experience',
  labels: {
    singular: 'Experiencia',
    plural: 'Experiencias',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Características',
      labels: {
        singular: 'Característica',
        plural: 'Características',
      },
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Ícono (nombre del archivo SVG)',
          required: true,
          admin: {
            description: 'Ejemplo: truck, shield, package',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Descripción',
        },
      ],
    },
  ],
}
