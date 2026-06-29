'use client'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ocea-cart'
const EVENT_NAME = 'ocea-cart-updated'
export const OPEN_CART_EVENT = 'ocea-cart-open'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  qty: number
}

function readStored(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function write(items: CartItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(EVENT_NAME))
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    setItems(readStored())
    const sync = () => setItems(readStored())
    window.addEventListener('storage', sync)
    window.addEventListener(EVENT_NAME, sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(EVENT_NAME, sync)
    }
  }, [])

  const add = (item: Omit<CartItem, 'qty'>) => {
    const current = readStored()
    const existing = current.find((i) => i.id === item.id)
    const next = existing
      ? current.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      : [...current, { ...item, qty: 1 }]
    write(next)
    setItems(next)
  }

  const remove = (id: number) => {
    const next = readStored().filter((i) => i.id !== id)
    write(next)
    setItems(next)
  }

  const updateQty = (id: number, qty: number) => {
    const current = readStored()
    const next =
      qty <= 0
        ? current.filter((i) => i.id !== id)
        : current.map((i) => (i.id === id ? { ...i, qty } : i))
    write(next)
    setItems(next)
  }

  const clear = () => {
    write([])
    setItems([])
  }

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return { items, add, remove, updateQty, clear, count, subtotal }
}

export function openCart() {
  window.dispatchEvent(new Event(OPEN_CART_EVENT))
}
