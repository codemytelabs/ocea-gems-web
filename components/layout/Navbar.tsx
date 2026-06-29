'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useWishlist } from '@/lib/useWishlist'
import { useCart, OPEN_CART_EVENT } from '@/lib/useCart'
import CartDrawer from './CartDrawer'

const links = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/bespoke', label: 'Bespoke' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const router = useRouter()
  const { count: wishlistCount } = useWishlist()
  const { count: cartCount } = useCart()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onOpenCart = () => setCartOpen(true)
    window.addEventListener(OPEN_CART_EVENT, onOpenCart)
    return () => window.removeEventListener(OPEN_CART_EVENT, onOpenCart)
  }, [])

  const closeAll = () => {
    setOpen(false)
    setSearchOpen(false)
  }

  const goToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    closeAll()
    router.push('/collections?wishlist=1')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const term = query.trim()
    router.push(term ? `/collections?q=${encodeURIComponent(term)}` : '/collections')
    setSearchOpen(false)
  }

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* logo + brand name */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeAll}>
          <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center overflow-hidden">
            <Image
              src="/ocea-logo.png"
              alt="Ocea Gems"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-semibold text-heading tracking-wide">
              Ocea Gems
            </span>
            <span className="text-[9px] text-muted tracking-widest uppercase">
              International
            </span>
          </div>
        </Link>

        {/* nav links — left-aligned, after logo */}
        <div className="hidden md:flex items-center gap-1 ml-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-md text-sm text-body
                hover:text-sapphire hover:bg-sapphire-lt transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* utility icons */}
        <div className="flex items-center gap-1">
          <button
            aria-label={searchOpen ? 'Close search' : 'Search'}
            onClick={() => {
              setOpen(false)
              setSearchOpen((v) => !v)
            }}
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg
              text-body hover:text-sapphire hover:bg-surface transition-colors"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <Link
            href="/collections?wishlist=1"
            aria-label="Wishlist"
            onClick={goToWishlist}
            className={`hidden sm:flex w-9 h-9 items-center justify-center rounded-lg transition-colors relative ${
              wishlistCount > 0 ? 'text-ruby' : 'text-ruby hover:bg-surface'
            }`}
          >
            <Heart size={18} fill={wishlistCount > 0 ? 'currentColor' : 'none'} />
          </Link>
          <div className="hidden sm:block w-px h-5 bg-border mx-1" />
          <button
            aria-label="Cart"
            onClick={() => {
              closeAll()
              setCartOpen((v) => !v)
            }}
            className="w-9 h-9 flex items-center justify-center rounded-lg
              border border-border text-heading relative
              hover:border-sapphire hover:text-sapphire transition-colors"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white
                text-[9px] font-semibold rounded-full flex items-center justify-center
                border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* mobile menu toggle */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setSearchOpen(false)
              setOpen((v) => !v)
            }}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
              text-body hover:text-sapphire hover:bg-surface transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* search backdrop + panel */}
      {searchOpen && (
        <>
          <div
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 top-16 bg-black/20 z-40"
          />
          <div className="absolute top-full left-0 right-0 z-50 border-t border-border bg-white shadow-lg">
            <form onSubmit={handleSearch} className="px-4 sm:px-6 py-4 flex gap-2 max-w-7xl mx-auto">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for rings, sapphires, necklaces..."
                className="flex-1 px-3.5 py-2.5 text-sm border border-border rounded-lg
                  focus:outline-none focus:border-sapphire focus:ring-1 focus:ring-sapphire transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-sapphire hover:bg-sapphire-dark text-white text-sm font-semibold transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </>
      )}

      {/* mobile menu backdrop + panel */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 top-16 bg-black/20 z-40"
          />
          <div className="md:hidden absolute top-full left-0 right-0 z-50 border-t border-border bg-white shadow-lg">
            <div className="px-4 sm:px-6 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm text-body
                    hover:text-sapphire hover:bg-sapphire-lt transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 mt-2 border-t border-border sm:hidden">
                <button
                  aria-label="Search"
                  onClick={() => {
                    setOpen(false)
                    setSearchOpen(true)
                  }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                    text-body hover:text-sapphire hover:bg-surface transition-colors"
                >
                  <Search size={18} />
                </button>
                <Link
                  href="/collections?wishlist=1"
                  aria-label="Wishlist"
                  onClick={goToWishlist}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-ruby transition-colors relative"
                >
                  <Heart size={18} fill={wishlistCount > 0 ? 'currentColor' : 'none'} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  )
}
