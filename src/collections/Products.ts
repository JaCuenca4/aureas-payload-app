import type { CollectionConfig } from 'payload'
import { isAdmin, isPublishedOrAdmin } from '../access'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Producto',
    plural: 'Productos',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category', 'status'],
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
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      label: 'Precio',
    },
    {
      name: 'inventory',
      type: 'number',
      defaultValue: 0,
      min: 0,
      label: 'Inventario',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'material',
      type: 'text',
      label: 'Material',
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: 'Imágenes',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Categoría',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'newArrival',
      type: 'checkbox',
      defaultValue: false,
      label: 'Nuevo',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Destacado',
      admin: {
        position: 'sidebar',
      },
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Detalles',
          fields: [
            {
              name: 'deliveryInfo',
              type: 'richText',
              label: 'Información de Envío',
            },
            {
              name: 'guaranteeInfo',
              type: 'richText',
              label: 'Información de Garantía',
            },
          ],
        },
      ],
    },
  ],
}
