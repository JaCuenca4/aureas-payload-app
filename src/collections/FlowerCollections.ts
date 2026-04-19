import type { CollectionConfig } from 'payload'
import { isAdmin, isPublishedOrAdmin } from '../access'

export const FlowerCollections: CollectionConfig = {
  slug: 'flower-collections',
  labels: {
    singular: 'Colección Floral',
    plural: 'Colecciones Florales',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: isPublishedOrAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre',
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      label: 'Estado',
      options: [
        { label: 'Borrador', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
      admin: { position: 'sidebar' },
    },

    // --- Hero ---
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      label: 'Hero — Título',
      localized: true,
      admin: { description: 'Ej: The Rose' },
    },
    {
      name: 'heroTitleItalic',
      type: 'text',
      label: 'Hero — Título (itálica)',
      localized: true,
      admin: { description: 'Ej: Collection' },
    },
    {
      name: 'heroBadge',
      type: 'text',
      label: 'Hero — Badge',
      localized: true,
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      label: 'Hero — Descripción',
      localized: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Hero — Imagen',
    },

    // --- Varieties ---
    {
      name: 'varieties',
      type: 'array',
      label: 'Variedades',
      labels: { singular: 'Variedad', plural: 'Variedades' },
      minRows: 1,
      fields: [
        { name: 'number', type: 'text', required: true, label: 'Número', admin: { description: 'Ej: 01' } },
        { name: 'name', type: 'text', required: true, label: 'Nombre', localized: true },
        { name: 'description', type: 'textarea', required: true, label: 'Descripción', localized: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Imagen' },
        { name: 'tag', type: 'text', label: 'Tag', localized: true },
        {
          name: 'aspectRatio',
          type: 'select',
          label: 'Aspect Ratio',
          defaultValue: '4/5',
          options: [
            { label: '4/5', value: '4/5' },
            { label: '3/4', value: '3/4' },
            { label: '1/1', value: '1/1' },
            { label: '16/10', value: '16/10' },
            { label: '21/9', value: '21/9' },
          ],
        },
        {
          name: 'colorSwatches',
          type: 'array',
          label: 'Muestras de Color',
          labels: { singular: 'Color', plural: 'Colores' },
          admin: { description: 'Opcional — usado por Carnations' },
          fields: [
            { name: 'hex', type: 'text', required: true, label: 'Código Hex' },
          ],
        },
      ],
    },

    // --- Standards ---
    {
      name: 'standards',
      type: 'group',
      label: 'Estándares de Calidad',
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Título', localized: true },
        { name: 'description', type: 'textarea', required: true, label: 'Descripción', localized: true },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Imagen' },
        {
          name: 'specs',
          type: 'array',
          label: 'Especificaciones',
          labels: { singular: 'Especificación', plural: 'Especificaciones' },
          fields: [
            { name: 'value', type: 'text', required: true, label: 'Valor', localized: true },
          ],
        },
      ],
    },

    // --- Palette ---
    {
      name: 'palette',
      type: 'array',
      label: 'Paleta de Colores',
      labels: { singular: 'Color', plural: 'Colores' },
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nombre', localized: true },
        { name: 'hex', type: 'text', required: true, label: 'Código Hex' },
      ],
    },

    // --- CTA ---
    {
      name: 'cta',
      type: 'group',
      label: 'Llamada a la Acción',
      fields: [
        { name: 'title', type: 'text', label: 'Título', localized: true },
        { name: 'titleItalic', type: 'text', label: 'Título (itálica)', localized: true },
        { name: 'titleEnd', type: 'text', label: 'Título (final)', localized: true },
        { name: 'description', type: 'textarea', label: 'Descripción', localized: true },
        { name: 'primaryBtn', type: 'text', label: 'Botón Principal', defaultValue: 'Connect via WhatsApp', localized: true },
        { name: 'secondaryBtn', type: 'text', label: 'Botón Secundario', defaultValue: 'Request Catalog', localized: true },
      ],
    },

    // --- SEO ---
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: { position: 'sidebar' },
      fields: [
        { name: 'title', type: 'text', label: 'Título SEO', localized: true },
        { name: 'description', type: 'textarea', label: 'Descripción SEO', localized: true },
      ],
    },
  ],
}
