interface Props{

total:number
budget:number

}

export default function BudgetBar({total,budget}:Props){

const percent = Math.min((total/budget)*100,100)

return(

<div className="w-full max-w-3xl mx-auto mt-6 bg-surface rounded-xl shadow-sm p-4">

    <div className="flex justify-between mb-2">

      <span className="font-medium text-primary">
        Total: R$ {total}
      </span>

      <span className="text-muted">
        Orçamento: R$ {budget}
      </span>

    </div>

    <div className="w-full h-3 bg-surface-raised rounded-full overflow-hidden">

      <div
        className="h-full bg-accent transition-all duration-500"
        style={{width:`${percent}%`}}
      ></div>

    </div>

    <p className="text-sm text-muted mt-1">
{percent.toFixed(0)}% do orçamento
</p>

</div>

)

}