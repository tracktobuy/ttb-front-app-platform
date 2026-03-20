"use client"

import { useState, useEffect } from "react"

import LinkInput from "@/components/ui/LinkInput"
import MasonryGrid from "@/components/ui/MasonryGrid"
import BudgetBar from "@/components/ui/BudgetBar"

import ProductCard from "@/components/products/ProductCard"
import SkeletonCard from "@/components/products/SkeletonCard"

import { Product } from "@/types/Product"

export default function Dashboard() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const budget = 500

  const total = products.reduce(
    (sum, p) => sum + p.price,
    0
  )

  // carregar produtos salvos
  useEffect(() => {

    const savedProducts = localStorage.getItem("carterest-products")

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }

  }, [])

  // salvar produtos automaticamente
  useEffect(() => {

    localStorage.setItem(
      "carterest-products",
      JSON.stringify(products)
    )

  }, [products])


  function addProduct(link: string) {

    setLoading(true)

    setTimeout(() => {

      const newProduct: Product = {
        title: "Produto extraído",
        price: 199,
        image: "https://picsum.photos/300/400"
      }

      setProducts(prev => [...prev, newProduct])

      setLoading(false)

    }, 2000)

  }

  return (

    <div className="space-y-6">

      <LinkInput onAdd={addProduct} />

      <BudgetBar
        total={total}
        budget={budget}
      />

      <MasonryGrid>

        {loading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}

        {products.map((p, i) => (
          <ProductCard
            key={i}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}

      </MasonryGrid>

    </div>

  )

}