import { Cormorant_Garamond, Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'], weight: ['400','500','600'],
  variable: '--font-heading'
})
const inter = Inter({
  subsets: ['latin'], variable: '--font-body'
})

export const metadata = {
  title: 'Ocea Gems International',
  description: 'Certified gems and bespoke jewellery',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable}
          bg-bg text-body font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}