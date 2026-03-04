import "./globals.css"
import Navbar from "@/components/Navbar"

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
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}