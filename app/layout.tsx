import "./globals.css"
import Navbar from "@/components/Navbar"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: "Aquatech Pools",
  description: "Luxury pool installation and maintenance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}