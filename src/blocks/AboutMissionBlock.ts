import type { Block } from 'payload'

export const AboutMissionBlock: Block = {
  slug: 'aboutMission',
  labels: {
    singular: 'Misión y Visión',
    plural: 'Misiones y Visiones',
  },
  fields: [
    {
      name: 'vision',
      type: 'group',
      label: 'Visión',
      fields: [
        { name: 'label', type: 'text', label: 'Etiqueta', defaultValue: 'Our Vision', localized: true },
        { name: 'title', type: 'text', required: true, label: 'Título', localized: true },
        { name: 'description', type: 'textarea', required: true, label: 'Descripción', localized: true },
      ],
    },
    {
      name: 'mission',
      type: 'group',
      label: 'Misión',
      fields: [
        { name: 'label', type: 'text', label: 'Etiqueta', defaultValue: 'Our Mission', localized: true },
        { name: 'title', type: 'text', required: true, label: 'Título', localized: true },
        { name: 'description', type: 'textarea', required: true, label: 'Descripción', localized: true },
      ],
    },
  ],
}
