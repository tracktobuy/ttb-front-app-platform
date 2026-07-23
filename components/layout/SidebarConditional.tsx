"use client"

import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"

export default function SidebarConditional() {
  const pathname = usePathname()

  // Hide the sidebar on the home landing page
  if (pathname === "/") return null
  if (pathname === "/login") return null

  return <Sidebar />
}
