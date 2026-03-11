import type { GlobalConfig } from 'payload'
import { isAdmin, isPublic } from '../access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configuración del Sitio',
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Palea EC',
      label: 'Nombre del Sitio',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      label: 'Descripción del Sitio',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
    },
  ],
}
