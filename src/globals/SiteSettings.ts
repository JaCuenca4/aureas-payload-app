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
    {
      name: 'heroSlides',
      type: 'array',
      label: 'Slides del Hero',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      admin: {
        description:
          'Imágenes de fondo y productos destacados para el carrusel del hero en la página de inicio.',
      },
      fields: [
        {
          name: 'bgImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen de Fondo',
        },
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
          label: 'Producto Destacado',
          admin: {
            description:
              'El producto que se mostrará en la tarjeta del slide.',
          },
        },
      ],
    },
  ],
}
