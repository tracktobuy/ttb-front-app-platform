import Link from "next/link"

export default function Header() {

  return (

    <header className="sticky top-0 backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

        <Link href="/dashboard">

          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
            T2B
          </h1>

        </Link>

        <div className="flex items-center gap-6">

          <p className="text-gray-600 text-sm hidden md:block">
            Organize suas compras com inteligência
          </p>

        </div>

      </div>

    </header>

  )

}