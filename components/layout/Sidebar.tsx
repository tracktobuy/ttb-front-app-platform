"use client"

import Link from "next/link"
import { Home, LayoutGrid, PlusCircle } from "lucide-react"

export default function Sidebar() {

  return (

    <aside className="w-16 bg-surface border-r border-strong flex flex-col items-center py-6 gap-6">

      <Link
        href="/dashboard"
        className="p-2 rounded-lg hover:bg-accent-dim transition"
        title="Home"
      >
        <Home className="text-accent" size={22} />
      </Link>

      <Link
        href="/boards"
        className="p-2 rounded-lg hover:bg-accent-dim transition"
        title="Boards"
      >
        <LayoutGrid className="text-muted hover:text-accent" size={22} />
      </Link>

      <Link
        href="/add"
        className="p-2 rounded-lg hover:bg-accent-dim transition"
        title="Adicionar produto"
      >
        <PlusCircle className="text-muted hover:text-accent" size={22} />
      </Link>

    </aside>

  )

}