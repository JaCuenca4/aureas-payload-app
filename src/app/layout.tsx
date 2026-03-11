import React from 'react'

export const metadata = {
  title: 'Palea EC — Admin',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
