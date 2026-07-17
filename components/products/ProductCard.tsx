"use client"

import Image from "next/image"
import { formatPrice } from "@/utils/formatPrice"

import { Pencil } from "lucide-react"

interface Props {
  title: string
  price: number
  image: string
}

export default function ProductCard({ title, price, image }: Props) {

  return (

    <div className="group mb-6 break-inside-avoid cursor-pointer">

      <div className="relative rounded-xl overflow-hidden bg-surface shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">

        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          className="w-full h-auto"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

          <button className="
  absolute top-3 right-3
  bg-surface-80 backdrop-blur-md
  p-2 rounded-full
  opacity-0 group-hover:opacity-100
  transition
  shadow-md hover:scale-110
">
            <Pencil size={16} className="text-primary" />
          </button>

          <button className="bg-surface px-4 py-2 rounded-full text-sm text-primary">
            Abrir
          </button>

          <button className="bg-accent text-bg px-4 py-2 rounded-full text-sm">
            Remover
          </button>

        </div>

      </div>

      <div className="mt-2">

        <p className="text-sm font-medium text-primary line-clamp-2">
          {title}
        </p>

        <p className="text-accent font-bold">
          {formatPrice(price)}
        </p>

      </div>

    </div>

  )

}