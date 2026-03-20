import { formatPrice } from "@/utils/formatPrice"

interface Props {
  total: number
  budget: number
}

export default function BudgetBar({ total, budget }: Props) {

  const percent = Math.min((total / budget) * 100, 100)

  let color = "bg-green-500"

  if (percent > 70) color = "bg-yellow-500"
  if (percent >= 100) color = "bg-red-500"

  return (

    <div className="w-full max-w-3xl mx-auto mt-6 bg-white rounded-xl shadow-sm p-4">

      <div className="flex justify-between mb-2 text-sm">

        <span>
          Total: <strong>{formatPrice(total)}</strong>
        </span>

        <span>
          Orçamento: <strong>{formatPrice(budget)}</strong>
        </span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />

      </div>

    </div>

  )

}