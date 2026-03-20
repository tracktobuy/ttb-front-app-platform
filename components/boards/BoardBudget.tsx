interface Props{

total:number
budget:number

}

export default function BudgetBar({total,budget}:Props){

const percent = Math.min((total/budget)*100,100)

return(

<div className="w-full max-w-3xl mx-auto mt-6 bg-white rounded-xl shadow-sm p-4">

<div className="flex justify-between mb-2">

<span className="font-medium text-gray-700">
Total: R$ {total}
</span>

<span className="text-gray-500">
Orçamento: R$ {budget}
</span>

</div>

<div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

<div
className="h-full bg-indigo-500 transition-all duration-500"
style={{width:`${percent}%`}}
></div>

</div>

<p className="text-sm text-gray-500 mt-1">
{percent.toFixed(0)}% do orçamento
</p>

</div>

)

}