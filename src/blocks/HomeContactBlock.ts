import type { Block } from 'payload'

export const HomeContactBlock: Block = {
  slug: 'homeContact',
  labels: {
    singular: 'Sección de Contacto',
    plural: 'Secciones de Contacto',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Contactanos para',
    },
    {
      name: 'titleItalic',
      type: 'text',
      label: 'Título (itálica)',
      defaultValue: 'Programas Personalizados',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Teléfono',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Etiqueta del Teléfono',
      defaultValue: 'WhatsApp Business',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Correo Electrónico',
    },
    {
      name: 'emailLabel',
      type: 'text',
      label: 'Etiqueta del Correo',
      defaultValue: 'Business Inquiries',
    },
    {
      name: 'socialLabel',
      type: 'text',
      label: 'Etiqueta de Redes Sociales',
      defaultValue: 'Find us on social networks',
    },
    {
      name: 'socials',
      type: 'array',
      label: 'Redes Sociales',
      labels: { singular: 'Red Social', plural: 'Redes Sociales' },
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nombre' },
        { name: 'url', type: 'text', required: true, label: 'URL' },
      ],
    },
    {
      name: 'formTitle',
      type: 'text',
      label: 'Título del Formulario',
      defaultValue: 'Recibe nuestro Catalogo Digital 2026',
    },
    {
      name: 'formFields',
      type: 'group',
      label: 'Campos del Formulario',
      fields: [
        { name: 'fullNameLabel', type: 'text', label: 'Label — Nombre Completo', defaultValue: 'Full Name' },
        { name: 'fullNamePlaceholder', type: 'text', label: 'Placeholder — Nombre Completo', defaultValue: 'John Doe' },
        { name: 'emailLabel', type: 'text', label: 'Label — Email', defaultValue: 'Company Email' },
        { name: 'emailPlaceholder', type: 'text', label: 'Placeholder — Email', defaultValue: 'john@company.com' },
        { name: 'marketLabel', type: 'text', label: 'Label — Mercado', defaultValue: 'Market of Interest' },
        {
          name: 'marketOptions',
          type: 'array',
          label: 'Opciones de Mercado',
          labels: { singular: 'Opción', plural: 'Opciones' },
          fields: [
            { name: 'value', type: 'text', required: true, label: 'Valor' },
          ],
        },
        { name: 'messageLabel', type: 'text', label: 'Label — Mensaje', defaultValue: 'Message' },
        { name: 'messagePlaceholder', type: 'text', label: 'Placeholder — Mensaje', defaultValue: 'I am interested in...' },
      ],
    },
    {
      name: 'submitText',
      type: 'text',
      label: 'Texto del Botón de Envío',
      defaultValue: 'Request Digital Catalog',
    },
  ],
}
