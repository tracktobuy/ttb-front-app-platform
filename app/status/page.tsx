"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { HEALTH_ENDPOINT } from "@/utils/apiUrls"

type BackendStatus = "checking" | "up" | "down"

const CHECK_INTERVAL_MS = 10_000
const REQUEST_TIMEOUT_MS = 5_000

export default function StatusPage() {

  const [status, setStatus] = useState<BackendStatus>("checking")
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  useEffect(() => {

    let cancelled = false

    const checkHealth = async () => {

      try {
        const response = await axios.get(HEALTH_ENDPOINT, { timeout: REQUEST_TIMEOUT_MS })

        if (cancelled) return

        setStatus(response.status === 200 ? "up" : "down")
      } catch {
        if (cancelled) return

        setStatus("down")
      } finally {
        if (!cancelled) {
          setLastChecked(new Date())
        }
      }

    }

    checkHealth()
    const interval = setInterval(checkHealth, CHECK_INTERVAL_MS)

    return () => {
      cancelled = true
      clearInterval(interval)
    }

  }, [])

  const statusConfig = {
    checking: {
      label: "Checking backend status...",
      dot: "bg-accent",
      pulse: true,
    },
    up: {
      label: "Backend is up and running",
      dot: "bg-green-500",
      pulse: false,
    },
    down: {
      label: "Backend is not responding",
      dot: "bg-red-500",
      pulse: false,
    },
  }[status]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">

      <div className="flex items-center gap-3 bg-surface-raised border border-soft rounded-full px-6 py-4">
        <span className="relative flex h-3 w-3">
          {statusConfig.pulse && (
            <span className={`absolute inline-flex h-full w-full rounded-full ${statusConfig.dot} opacity-75 animate-ping`} />
          )}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${statusConfig.dot}`} />
        </span>
        <span className="text-primary text-sm font-medium">
          {statusConfig.label}
        </span>
      </div>

      {lastChecked && (
        <p className="text-faint text-xs">
          Last checked at {lastChecked.toLocaleTimeString()}
        </p>
      )}

    </div>
  )

}
