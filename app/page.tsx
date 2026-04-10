import Link from "next/link"

export default function Home() {

  return (

    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">

      <h1 className="text-5xl font-bold text-indigo-600 mb-6">
        T2B
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Salve produtos da internet como um Pinterest de compras.
        Organize itens em boards, acompanhe preços e planeje seu orçamento.
      </p>

      <Link
        href="/dashboard"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
      >
        Começar
      </Link>

    </main>

  )

}