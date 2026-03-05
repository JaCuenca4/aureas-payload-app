import type { CollectionAfterChangeHook } from 'payload'

/**
 * Hook that runs after an order is created or updated.
 * Placeholder for future integrations (payment processing, email notifications, etc.)
 */
export const afterOrderChange: CollectionAfterChangeHook = async ({
  doc,
  operation,
  req,
}) => {
  if (operation === 'create') {
    req.payload.logger.info(
      `New order created: ${doc.orderNumber} — Total: $${doc.total}`,
    )

    // TODO: Send confirmation email
    // TODO: Process payment (Stripe, PayPhone, etc.)
    // TODO: Update product inventory
  }

  if (operation === 'update') {
    req.payload.logger.info(
      `Order updated: ${doc.orderNumber} — Status: ${doc.status}`,
    )

    // TODO: Send status update email
    // TODO: Trigger shipping integration
  }

  return doc
}
