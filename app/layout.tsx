import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Header from '@/components/Header'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: '5 Key Areas',
  description: 'Keep track of the 5 key areas of your life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
