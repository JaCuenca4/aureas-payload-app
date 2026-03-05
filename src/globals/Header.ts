import type { GlobalConfig } from 'payload'
import { isAdmin, isPublic } from '../access'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
