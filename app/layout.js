import './globals.css'

export const metadata = {
  title: 'The100 Platform',
  description: 'Revolutionary advertising platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
