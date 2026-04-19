import type { Block } from 'payload'

export const ContactHeroBlock: Block = {
  slug: 'contactHero',
  labels: {
    singular: 'Hero de Contacto',
    plural: 'Heroes de Contacto',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Contáctanos',
      localized: true,
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subtítulo',
      defaultValue:
        'Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.',
      localized: true,
    },
  ],
}
