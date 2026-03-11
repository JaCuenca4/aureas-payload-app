import type { GlobalConfig } from 'payload'
import { isAdmin, isPublic } from '../access'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Pie de Página',
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Columnas',
      labels: {
        singular: 'Columna',
        plural: 'Columnas',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Enlaces',
          labels: {
            singular: 'Enlace',
            plural: 'Enlaces',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Texto',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'URL',
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Redes Sociales',
      labels: {
        singular: 'Red Social',
        plural: 'Redes Sociales',
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Plataforma',
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'Pinterest', value: 'pinterest' },
            { label: 'X (Twitter)', value: 'twitter' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
      ],
    },
  ],
}
