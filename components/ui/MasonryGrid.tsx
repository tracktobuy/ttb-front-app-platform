"use client"

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function MasonryGrid({ children }: Props) {

  return (

    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 p-6">

      {children}

    </div>

  )

}