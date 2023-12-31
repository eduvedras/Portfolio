import './globals.css'
import { Albert_Sans } from 'next/font/google'

const inter = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Eduardo Miranda',
  description: 'My portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
