'use client'
import { Heart, ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/products'

const gemIcons: Record<string, string> = {
  sapphire: '💎',
  ruby: '❤️',
  diamond: '✨',
  emerald: '💚',
  pearl: '🤍',
  alexandrite: '🌈',
}

export default function ProductCard({ product }: { product: Product }) {
  const badgeStyles = {
    new: 'bg-sapphire-lt text-sapphire border border-sapphire',
    sale: 'bg-red-50 text-red-700 border border-red-200',
    certified: 'bg-gold-tint text-gold-dark border border-gold-light',
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-sapphire hover:border-[1.5px] transition-colors cursor-pointer">
      {/* Product Image Area */}
      <div className="h-32 bg-surface relative flex items-center justify-center border-b border-border group">
        <div className="text-5xl opacity-60 group-hover:opacity-80 transition-opacity">
          {gemIcons[product.gemstone]}
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-lg ${badgeStyles[product.badge]}`}
          >
            {product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center hover:border-sapphire hover:text-sapphire hover:bg-sapphire-lt transition-all">
          <Heart size={14} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        {/* Category */}
        <p className="text-xs text-sapphire uppercase font-semibold mb-1 tracking-widest">
          {product.category.replace('-', ' ')}
        </p>

        {/* Name */}
        <h3 className="font-heading text-sm font-semibold text-heading mb-1 leading-tight">
          {product.name}
        </h3>

        {/* Specs */}
        <p className="text-xs text-muted mb-2">{product.specs}</p>

        {/* Rating */}
        <div className="flex gap-1 items-center mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-xs ${i < product.rating ? 'text-gold' : 'text-border'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted ml-1">({product.reviews})</span>
        </div>

        {/* Footer: Price + Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gold-dark">
              ${product.price.toLocaleString()}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-muted line-through">
                ${product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
          <button className="p-1.5 bg-sapphire hover:bg-sapphire-dark text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center">
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
