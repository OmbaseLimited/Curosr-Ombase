import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OMBASE - AI-Powered Computing Solutions',
  description: 'OMBASE is a leading technology brand offering AI laptops, gaming PCs, workstations, and servers designed for the future of computing.',
  keywords: 'AI laptops, gaming laptops, workstations, servers, OMBASE, artificial intelligence, computing',
  authors: [{ name: 'OMBASE' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'OMBASE - AI-Powered Computing Solutions',
    description: 'Leading technology brand offering AI laptops, gaming PCs, workstations, and servers.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}