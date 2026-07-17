import Image from "next/image"

export default function Footer() {

  return (

    <footer className="w-full border-t border-strong mt-10">

      <div className="max-w-7xl mx-auto px-1 py-1 text-sm text-muted flex items-center justify-between">

        <Image
          src="/ttb04.svg"
          alt=""
          width={150}
          height={150}
          aria-hidden="true"
        />

        <p>TrackToBuy - Copyright  {new Date().getFullYear()}</p>

      </div>

    </footer>

  )

}