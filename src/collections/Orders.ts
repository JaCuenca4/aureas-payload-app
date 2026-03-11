import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access'
import { afterOrderChange } from '../hooks/afterOrderChange'

export const Orders: CollectionConfig = {
  slug: 'orders',
  labels: {
    singular: 'Orden',
    plural: 'Órdenes',
  },
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customerEmail', 'total', 'status', 'createdAt'],
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [afterOrderChange],
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      label: 'Número de Orden',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      label: 'Estado',
      options: [
        { label: 'Pendiente', value: 'pending' },
        { label: 'Procesando', value: 'processing' },
        { label: 'Enviado', value: 'shipped' },
        { label: 'Entregado', value: 'delivered' },
        { label: 'Cancelado', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Artículos',
      labels: {
        singular: 'Artículo',
        plural: 'Artículos',
      },
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
          label: 'Producto',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre del Producto',
          admin: {
            description: 'Nombre del producto al momento de la compra',
          },
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
          label: 'Precio',
          admin: {
            description: 'Precio al momento de la compra',
          },
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
          label: 'Cantidad',
        },
      ],
    },
    {
      name: 'subtotal',
      type: 'number',
      required: true,
      min: 0,
      label: 'Subtotal',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'total',
      type: 'number',
      required: true,
      min: 0,
      label: 'Total',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'customerEmail',
      type: 'email',
      required: true,
      label: 'Correo del Cliente',
    },
    {
      name: 'customerName',
      type: 'text',
      required: true,
      label: 'Nombre del Cliente',
    },
    {
      name: 'shippingAddress',
      type: 'group',
      label: 'Dirección de Envío',
      fields: [
        {
          name: 'street',
          type: 'text',
          required: true,
          label: 'Calle',
        },
        {
          name: 'city',
          type: 'text',
          required: true,
          label: 'Ciudad',
        },
        {
          name: 'province',
          type: 'text',
          required: true,
          label: 'Provincia',
        },
        {
          name: 'zipCode',
          type: 'text',
          label: 'Código Postal',
        },
      ],
    },
  ],
}
