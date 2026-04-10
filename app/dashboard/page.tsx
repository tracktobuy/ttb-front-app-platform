"use client"

import { useState, useEffect } from "react"

import LinkInput from "@/components/ui/LinkInput"
import MasonryGrid from "@/components/ui/MasonryGrid"
/*import BudgetBar from "@/components/ui/BudgetBar"*/

import ProductCard from "@/components/products/ProductCard"
import SkeletonCard from "@/components/products/SkeletonCard"

import { Product } from "@/types/Product"

export default function Dashboard() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("Todos")

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
        price: 150,
        image: "https://picsum.photos/300/400",
        category: "Escritório"
      }

      setProducts(prev => [...prev, newProduct])

      setLoading(false)

    }, 2000)

  }

  const filteredProducts =
    filter === "Todos"
      ? products
      : products.filter(p => p.category === filter)

  return (

    <div className="space-y-6">

      <LinkInput onAdd={addProduct} loading={loading} />

      {products.length > 0 && (
        <div className="flex gap-3 px-6">
          {["Todos", "Escritório", "Rock Music Studio"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm ${filter === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {products.length === 0 && !loading && (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-lg font-medium">
            Nenhum produto ainda
          </p>
          <p className="text-sm">
            Cole um link acima para começar
          </p>
        </div>
      )}

      <MasonryGrid>

        {loading && (
          <>
            <SkeletonCard />
          </>
        )}

        {filteredProducts.map((p, i) =>  (
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