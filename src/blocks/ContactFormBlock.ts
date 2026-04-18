import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  labels: {
    singular: 'Formulario de Contacto',
    plural: 'Formularios de Contacto',
  },
  fields: [
    {
      name: 'subjectOptions',
      type: 'array',
      label: 'Opciones de Asunto',
      labels: {
        singular: 'Opción',
        plural: 'Opciones',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Etiqueta',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valor',
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Información de Contacto',
      fields: [
        {
          name: 'address',
          type: 'text',
          label: 'Dirección',
          defaultValue: 'Quito, Ecuador',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Teléfono',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Correo Electrónico',
          defaultValue: 'hello@aurea-s.com',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Horario',
          defaultValue: 'Lun - Vie: 9am - 6pm',
        },
      ],
    },
  ],
}
