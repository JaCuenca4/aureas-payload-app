import type { GlobalConfig } from 'payload'
import { isAdmin, isPublic } from '../access'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Encabezado',
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Enlaces de Navegación',
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
}
