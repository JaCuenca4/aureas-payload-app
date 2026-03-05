import type { Access } from 'payload'

/**
 * Allow access only to authenticated admin users.
 */
export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user)
}

/**
 * Allow public read access to everyone.
 */
export const isPublic: Access = () => true

/**
 * Allow public read access only to published documents.
 * Admin users can read all documents regardless of status.
 */
export const isPublishedOrAdmin: Access = ({ req: { user } }) => {
  if (user) return true

  return {
    status: {
      equals: 'published',
    },
  }
}
