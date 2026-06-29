'use client'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ocea-wishlist'
const EVENT_NAME = 'ocea-wishlist-updated'

function readStored(): number[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useWishlist() {
  const [ids, setIds] = useState<number[]>([])

  useEffect(() => {
    setIds(readStored())
    const sync = () => setIds(readStored())
    window.addEventListener('storage', sync)
    window.addEventListener(EVENT_NAME, sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(EVENT_NAME, sync)
    }
  }, [])

  const toggle = (id: number) => {
    const current = readStored()
    const next = current.includes(id)
      ? current.filter((v) => v !== id)
      : [...current, id]
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event(EVENT_NAME))
    setIds(next)
  }

  const has = (id: number) => ids.includes(id)

  return { ids, toggle, has, count: ids.length }
}
