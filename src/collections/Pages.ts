import type { CollectionConfig } from 'payload'
import { isAdmin, isPublishedOrAdmin } from '../access'
import { HeroBlock } from '../blocks/HeroBlock'
import { ContentBlock } from '../blocks/ContentBlock'
import { FeaturedProductsBlock } from '../blocks/FeaturedProductsBlock'
import { CTABlock } from '../blocks/CTABlock'
import { HomeHeroBlock } from '../blocks/HomeHeroBlock'
import { NewArrivalsBlock } from '../blocks/NewArrivalsBlock'
import { CollectionsBannerBlock } from '../blocks/CollectionsBannerBlock'
import { BrandStoryBlock } from '../blocks/BrandStoryBlock'
import { ExperienceBlock } from '../blocks/ExperienceBlock'
import { ContactHeroBlock } from '../blocks/ContactHeroBlock'
import { ContactFormBlock } from '../blocks/ContactFormBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Página',
    plural: 'Páginas',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: isPublishedOrAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
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
      unique: true,
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
      name: 'pageBuilder',
      type: 'blocks',
      label: 'Constructor de Página',
      blocks: [
        HomeHeroBlock,
        NewArrivalsBlock,
        CollectionsBannerBlock,
        BrandStoryBlock,
        ExperienceBlock,
        ContactHeroBlock,
        ContactFormBlock,
        HeroBlock,
        ContentBlock,
        FeaturedProductsBlock,
        CTABlock,
      ],
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título SEO',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción SEO',
        },
      ],
    },
  ],
}
