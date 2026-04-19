import type { Block } from 'payload'

export const AboutCtaBlock: Block = {
  slug: 'aboutCta',
  labels: {
    singular: 'CTA de About',
    plural: 'CTAs de About',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Experience Ecuadorian',
      localized: true,
    },
    {
      name: 'titleItalic',
      type: 'text',
      label: 'Título (itálica)',
      defaultValue: 'Excellence',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      localized: true,
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'CTA Principal',
      fields: [
        { name: 'text', type: 'text', required: true, label: 'Texto', localized: true },
        { name: 'href', type: 'text', required: true, label: 'Enlace' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      label: 'CTA Secundario',
      fields: [
        { name: 'text', type: 'text', label: 'Texto', localized: true },
        { name: 'href', type: 'text', label: 'Enlace' },
      ],
    },
  ],
}
