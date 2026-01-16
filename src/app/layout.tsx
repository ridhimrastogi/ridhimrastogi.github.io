import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ridhim Rastogi | Software Engineer',
  description: 'Software Dev Engineer at AWS specializing in ML Infrastructure, MLOps, and distributed systems.',
  keywords: ['Software Engineer', 'AWS', 'Machine Learning', 'MLOps', 'Seattle'],
  authors: [{ name: 'Ridhim Rastogi' }],
  openGraph: {
    title: 'Ridhim Rastogi | Software Engineer',
    description: 'Software Dev Engineer at AWS specializing in ML Infrastructure and distributed systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
