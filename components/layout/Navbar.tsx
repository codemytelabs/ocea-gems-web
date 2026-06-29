'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/bespoke', label: 'Bespoke' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* logo + brand name */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
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
            aria-label="Search"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg
              text-body hover:text-sapphire hover:bg-surface transition-colors"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Wishlist"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg
              text-body hover:text-sapphire hover:bg-surface transition-colors"
          >
            <Heart size={18} />
          </button>
          <div className="hidden sm:block w-px h-5 bg-border mx-1" />
          <button
            aria-label="Cart"
            className="w-9 h-9 flex items-center justify-center rounded-lg
              border border-border text-heading relative
              hover:border-sapphire hover:text-sapphire transition-colors"
          >
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white
              text-[9px] font-semibold rounded-full flex items-center justify-center
              border-2 border-white">
              0
            </span>
          </button>

          {/* mobile menu toggle */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
              text-body hover:text-sapphire hover:bg-surface transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

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
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                    text-body hover:text-sapphire hover:bg-surface transition-colors"
                >
                  <Search size={18} />
                </button>
                <button
                  aria-label="Wishlist"
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                    text-body hover:text-sapphire hover:bg-surface transition-colors"
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
