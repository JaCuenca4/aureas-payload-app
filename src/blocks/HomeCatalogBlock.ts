import type { Block } from 'payload'

export const HomeCatalogBlock: Block = {
  slug: 'homeCatalog',
  labels: {
    singular: 'Catálogo Principal',
    plural: 'Catálogos Principales',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Our Botanical',
    },
    {
      name: 'titleItalic',
      type: 'text',
      label: 'Título (itálica)',
      defaultValue: 'Selection',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Elementos del Catálogo',
      labels: { singular: 'Elemento', plural: 'Elementos' },
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre',
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          label: 'Slug',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        },
        {
          name: 'varieties',
          type: 'text',
          label: 'Variedades',
          admin: {
            description: 'Ej: FREEDOM • EXPLORER • PINK FLOYD',
          },
        },
      ],
    },
  ],
}
