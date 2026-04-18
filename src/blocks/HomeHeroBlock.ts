import type { Block } from 'payload'

export const HomeHeroBlock: Block = {
  slug: 'homeHero',
  labels: {
    singular: 'Hero Principal',
    plural: 'Heroes Principales',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Ecuadorian Excellence',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Premium Cut Flower Catalog',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      defaultValue:
        'Exportando la biodiversidad y belleza natural de Ecuador a mercados de alto valor desde 2023.',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen Principal',
    },
    {
      name: 'heroImageAlt',
      type: 'text',
      label: 'Alt de la Imagen',
      defaultValue: 'Luxury Ecuadorian Roses',
    },
    {
      name: 'altitude',
      type: 'text',
      label: 'Altitud (valor)',
      defaultValue: '2.8k',
    },
    {
      name: 'altitudeLabel',
      type: 'text',
      label: 'Altitud (etiqueta)',
      defaultValue: 'Meters Above Sea Level Altitude',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      labels: { singular: 'Feature', plural: 'Features' },
      minRows: 0,
      maxRows: 6,
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Etiqueta' },
        { name: 'text', type: 'text', required: true, label: 'Texto' },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA — Texto',
      defaultValue: 'Discover the Collection',
    },
    {
      name: 'ctaHref',
      type: 'text',
      label: 'CTA — Link',
      defaultValue: '/collections',
    },
    {
      name: 'whatsappUrl',
      type: 'text',
      label: 'WhatsApp URL',
      defaultValue: 'https://wa.me/593991609697',
    },
  ],
}
