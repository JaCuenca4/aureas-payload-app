import type { Block } from 'payload'

export const CollectionsGridBlock: Block = {
  slug: 'collectionsGrid',
  labels: {
    singular: 'Grid de Colecciones',
    plural: 'Grids de Colecciones',
  },
  fields: [
    {
      name: 'collections',
      type: 'array',
      label: 'Colecciones',
      labels: { singular: 'Colección', plural: 'Colecciones' },
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          label: 'Slug',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'Texto del CTA',
          defaultValue: 'Explore Collection',
        },
        {
          name: 'quote',
          type: 'text',
          label: 'Cita',
          admin: { description: 'Opcional — usado por Sunflowers' },
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Badge',
          admin: { description: 'Opcional — usado por Tulips' },
        },
        {
          name: 'layout',
          type: 'select',
          required: true,
          label: 'Tipo de Layout',
          defaultValue: 'singleImage',
          options: [
            { label: 'Múltiples Imágenes', value: 'multiImage' },
            { label: 'Imagen Única', value: 'singleImage' },
            { label: 'Showcase de Colores', value: 'colorShowcase' },
          ],
        },
        {
          name: 'images',
          type: 'array',
          label: 'Imágenes',
          labels: { singular: 'Imagen', plural: 'Imágenes' },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Imagen',
            },
          ],
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Tags',
          labels: { singular: 'Tag', plural: 'Tags' },
          admin: { description: 'Opcional — usado por Roses' },
          fields: [
            { name: 'value', type: 'text', required: true, label: 'Valor' },
          ],
        },
        {
          name: 'colorDots',
          type: 'array',
          label: 'Puntos de Color',
          labels: { singular: 'Color', plural: 'Colores' },
          admin: { description: 'Opcional — usado por Carnations' },
          fields: [
            { name: 'hex', type: 'text', required: true, label: 'Código Hex' },
          ],
        },
        {
          name: 'colors',
          type: 'array',
          label: 'Colores con Nombre',
          labels: { singular: 'Color', plural: 'Colores' },
          admin: { description: 'Opcional — usado por Lilies' },
          fields: [
            { name: 'name', type: 'text', required: true, label: 'Nombre' },
            { name: 'hex', type: 'text', required: true, label: 'Código Hex' },
          ],
        },
      ],
    },
  ],
}
