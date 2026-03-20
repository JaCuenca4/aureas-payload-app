import type { Block } from 'payload'

export const NewArrivalsBlock: Block = {
  slug: 'newArrivals',
  labels: {
    singular: 'Nuevos Llegados',
    plural: 'Nuevos Llegados',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Título',
      defaultValue: 'Nuevos Llegados',
    },
    {
      name: 'yearTag',
      type: 'text',
      label: 'Etiqueta de Año',
      defaultValue: 'Colección 2026',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'Texto del Botón',
      defaultValue: 'Ver Todos',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace del Botón',
      defaultValue: '/collection',
    },
  ],
}
