import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { User, Sparkles, ShieldCheck } from "lucide-react"

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  if (!user) {
    redirect("/login");
  }



  return (

    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">

      <h1 className="text-5xl font-bold text-primary mb-6">
        <Image
            src="/ttb04.svg"
            alt=""
            width={400}
            height={400}
            aria-hidden="true"
          />
      </h1>

      <p className="text-lg text-muted max-w-xl mb-8">
        Access to your tracking dashboard and manage your purchases with ease. Start tracking your orders today and never miss an update!
      </p>

      <Link
        href="/dashboard"
        className="px-6 py-3 bg-accent text-bg rounded-xl font-medium hover:bg-accent-line transition"
      >
        Começar
      </Link>

    </main>

  )

}