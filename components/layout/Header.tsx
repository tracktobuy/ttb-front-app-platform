import Link from "next/link"
import Logo from "./Logo"

export default function Header() {

  return (

    <header className="sticky top-0 backdrop-blur-md bg-surface border-b border-strong z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

        <Link href="/">

          <h1 className="text-xl font-bold text-accent cursor-pointer">
            <Logo className="text-text-primary" withWordmark={true} />
          </h1>

        </Link>

      </div>

    </header>

  )

}