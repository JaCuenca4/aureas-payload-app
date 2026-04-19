import type { Block } from 'payload'

export const AboutProcessBlock: Block = {
  slug: 'aboutProcess',
  labels: {
    singular: 'Proceso',
    plural: 'Procesos',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Our Process',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'From Soil to',
      localized: true,
    },
    {
      name: 'titleItalic',
      type: 'text',
      label: 'Título (itálica)',
      defaultValue: 'Destination',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      localized: true,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Pasos',
      labels: { singular: 'Paso', plural: 'Pasos' },
      minRows: 1,
      maxRows: 10,
      fields: [
        { name: 'number', type: 'text', required: true, label: 'Número', admin: { description: 'Ej: 01, 02, 03' } },
        { name: 'title', type: 'text', required: true, label: 'Título', localized: true },
        { name: 'description', type: 'textarea', required: true, label: 'Descripción', localized: true },
        { name: 'highlight', type: 'text', label: 'Dato Destacado', admin: { description: 'Ej: 2,800m+ Elevation' }, localized: true },
      ],
    },
  ],
}
