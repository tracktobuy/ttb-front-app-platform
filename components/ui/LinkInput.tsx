"use client"

import { useState } from "react"

type Props = {
    onAdd: (link: string) => void
    loading?: boolean
}

export default function LinkInput({ onAdd, loading }: Props) {

    const [link, setLink] = useState("")

    function handleAdd() {

        if (!link) return

        onAdd(link)

        setLink("")

    }

    return (

        <div className="w-full flex justify-center mt-6">

            <div className="flex w-full max-w-2xl bg-surface rounded-full shadow-md overflow-hidden">

                <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAdd()
                    }}
                    placeholder="Cole o link do produto (Amazon, Shopee, Mercado Livre...)"
                    className="flex-1 px-6 py-4 outline-none"
                />

                <button
                    onClick={handleAdd}
                    className="bg-accent hover:bg-accent-line transition text-bg px-6"
                >
                    {loading ? "..." : "+"}
                </button>

            </div>

        </div>

    )

}