import { formatPrice } from "@/utils/formatPrice"

interface Props {
  total: number
  budget: number
}

export default function BudgetBar({ total, budget }: Props) {

  const percent = Math.min((total / budget) * 100, 100)

  let color = "bg-accent"

  if (percent > 70) color = "bg-accent"
  if (percent >= 100) color = "bg-red-500"

  return (

    <div className="w-full max-w-3xl mx-auto mt-6 bg-surface rounded-xl shadow-sm p-4">

      <div className="flex justify-between mb-2 text-sm">

        <span>
          Total: <strong>{formatPrice(total)}</strong>
        </span>

        <span>
          Orçamento: <strong>{formatPrice(budget)}</strong>
        </span>

      </div>

      <div className="w-full h-3 bg-surface-raised rounded-full overflow-hidden">

        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />

      </div>

    </div>

  )

}