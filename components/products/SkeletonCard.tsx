export default function SkeletonCard() {

    return (

        <div className="mb-4 break-inside-avoid bg-white rounded-xl shadow-sm p-3 animate-pulse">

            <div className="w-full h-48 bg-gray-300 rounded-lg"></div>

            <div className="mt-3 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>

        </div>

    )

}