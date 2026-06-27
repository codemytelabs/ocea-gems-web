'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, ShoppingBag } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/bespoke', label: 'Bespoke' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* logo + brand name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
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
                hover:text-gold-dark hover:bg-gold-tint transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* utility icons */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Search"
            className="w-9 h-9 flex items-center justify-center rounded-lg
              text-body hover:text-gold-dark hover:bg-surface transition-colors"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Wishlist"
            className="w-9 h-9 flex items-center justify-center rounded-lg
              text-body hover:text-gold-dark hover:bg-surface transition-colors"
          >
            <Heart size={18} />
          </button>
          <div className="w-px h-5 bg-border mx-1" />
          <button
            aria-label="Cart"
            className="w-9 h-9 flex items-center justify-center rounded-lg
              border border-border text-heading relative
              hover:border-gold hover:text-gold-dark transition-colors"
          >
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white
              text-[9px] font-semibold rounded-full flex items-center justify-center
              border-2 border-white">
              0
            </span>
          </button>
        </div>

      </div>
    </nav>
  )
}