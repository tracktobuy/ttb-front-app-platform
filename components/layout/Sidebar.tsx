"use client"

import Link from "next/link"
import { Home, LayoutGrid, PlusCircle } from "lucide-react"

export default function Sidebar() {

  return (

    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-6">

      <Link
        href="/dashboard"
        className="p-2 rounded-lg hover:bg-gray-100 transition"
        title="Home"
      >
        <Home className="text-indigo-600" size={22} />
      </Link>

      <Link
        href="/boards"
        className="p-2 rounded-lg hover:bg-gray-100 transition"
        title="Boards"
      >
        <LayoutGrid className="text-gray-600 hover:text-indigo-600" size={22} />
      </Link>

      <Link
        href="/add"
        className="p-2 rounded-lg hover:bg-gray-100 transition"
        title="Adicionar produto"
      >
        <PlusCircle className="text-gray-600 hover:text-indigo-600" size={22} />
      </Link>

    </aside>

  )

}