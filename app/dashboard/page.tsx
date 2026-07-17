"use client"

import { useState, useEffect } from "react"

import LinkInput from "@/components/ui/LinkInput"
import MasonryGrid from "@/components/ui/MasonryGrid"
/*import BudgetBar from "@/components/ui/BudgetBar"*/

import ProductCard from "@/components/products/ProductCard"
import SkeletonCard from "@/components/products/SkeletonCard"

import { Product } from "@/types/Product"
import axios from 'axios'
import { API_ENDPOINT } from "@/utils/apiUrls"


export default function Dashboard() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("Todos")
  const [labels, setLabels] = useState<string[]>([]);
  const budget = 500

  const total = products.reduce(
    (sum, p) => sum + p.price,
    0
  )

  const fetchLabels = async () => {

    const groupId = '019d91b7-1810-7c00-b41f-13140b16e1d8'
    const endpoint = `${API_ENDPOINT}/api/v1/groups/${groupId}/labels`
    const config = {
      headers: { 'Authorization': 'JWTTokenAqui' },
    }

    try {
      const response = await axios.get(endpoint, config)
      const { labels } = response.data?.data ?? {}
      if (labels && labels.length > 0) {
        setLabels(["todos", ...labels])
      }
    } catch (error) {
      console.error("Failed to fetch labels:", error)
    }
  }

  // carregar produtos salvos
  useEffect(() => {
    fetchLabels()

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
          {labels.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm ${filter === cat
                ? "bg-accent text-bg"
                : "bg-surface-raised text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {products.length === 0 && !loading && (
        <div className="text-center mt-20 text-muted">
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

        {filteredProducts.map((p, i) => (
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