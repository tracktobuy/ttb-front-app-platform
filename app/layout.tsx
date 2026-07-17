import "./globals.css"

import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="pt-br">

      <body className="bg-bg text-primary">

        <div className="flex min-h-screen">

          <Sidebar />

          <div className="flex flex-col flex-1">

            <Header />

            <main className="flex-1">

              {children}

            </main>

            <Footer />

          </div>

        </div>

      </body>

    </html>

  )

}