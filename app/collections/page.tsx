'use client'

import { useState } from 'react'

// Sample product data
const products = [
  {
    id: 1,
    category: 'Ring',
    name: 'Ceylonese Sapphire Solitaire',
    spec: 'Certified • 2.5ct Blue Sapphire',
    price: 4800,
    rating: 5,
    reviews: 12,
    badge: 'cert',
    image: '💎',
  },
  {
    id: 2,
    category: 'Necklace',
    name: 'Ruby Cascade Pendant',
    spec: 'Gold plated • 1.8ct Natural Ruby',
    price: 2400,
    rating: 4,
    reviews: 8,
    badge: 'new',
    image: '💍',
  },
  {
    id: 3,
    category: 'Bracelet',
    name: 'Sapphire Tennis Bracelet',
    spec: 'White Gold • 3.2ct Total',
    price: 5200,
    rating: 5,
    reviews: 15,
    badge: 'cert',
    image: '✨',
  },
  {
    id: 4,
    category: 'Ring',
    name: 'Bespoke Emerald Ring',
    spec: 'Custom • 1.5ct Zambian Emerald',
    price: 3600,
    rating: 5,
    reviews: 6,
    badge: 'sale',
    image: '💎',
  },
  {
    id: 5,
    category: 'Earrings',
    name: 'Twin Ruby Studs',
    spec: 'Gold • 0.9ct Each',
    price: 1800,
    rating: 4,
    reviews: 10,
    badge: 'new',
    image: '👑',
  },
  {
    id: 6,
    category: 'Necklace',
    name: 'Sapphire Heritage Chain',
    spec: 'Vintage • 2.1ct Blue Sapphire',
    price: 3200,
    rating: 5,
    reviews: 9,
    badge: 'cert',
    image: '✨',
  },
]

const categories = [
  'All Jewellery',
  'Rings',
  'Necklaces',
  'Bracelets',
  'Earrings',
]

const gemTypes = ['Sapphire', 'Ruby', 'Emerald', 'Diamond']

const priceRanges = ['Under $1,000', '$1,000 - $3,000', '$3,000 - $5,000', 'Over $5,000']

const normalizeCategory = (value: string) => value.toLowerCase().replace(/s$/, '')

const matchesGem = (product: { name: string; spec: string }, gem: string) =>
  product.name.toLowerCase().includes(gem.toLowerCase()) ||
  product.spec.toLowerCase().includes(gem.toLowerCase())

const matchesPriceRange = (price: number, range: string) => {
  if (range === 'Under $1,000') return price < 1000
  if (range === '$1,000 - $3,000') return price >= 1000 && price <= 3000
  if (range === '$3,000 - $5,000') return price >= 3000 && price <= 5000
  if (range === 'Over $5,000') return price > 5000
  return true
}

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Jewellery')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState<{
    gems: string[]
    price: string[]
  }>({
    gems: [],
    price: [],
  })

  const toggleFilter = (type: 'gems' | 'price', value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }))
  }

  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      selectedCategory === 'All Jewellery' ||
      normalizeCategory(selectedCategory) === normalizeCategory(p.category)
    const gemMatch = filters.gems.length === 0 || filters.gems.some((g) => matchesGem(p, g))
    const priceMatch =
      filters.price.length === 0 || filters.price.some((r) => matchesPriceRange(p.price, r))
    return categoryMatch && gemMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'newest') return b.id - a.id
    return 0
  })

  const categoryCount = (cat: string) =>
    cat === 'All Jewellery'
      ? products.length
      : products.filter((p) => normalizeCategory(cat) === normalizeCategory(p.category)).length

  const gemCount = (gem: string) => products.filter((p) => matchesGem(p, gem)).length

  const priceCount = (range: string) =>
    products.filter((p) => matchesPriceRange(p.price, range)).length

  const badgeStyles: any = {
    new: 'bg-sapphire-lt text-sapphire border border-sapphire',
    sale: 'bg-red-50 text-red-700 border border-red-200',
    cert: 'bg-gold-tint text-gold-dark border border-gold-light',
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="border-b border-border px-4 sm:px-6 py-2.5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted">
          <span>Home</span>
          <span className="text-border">›</span>
          <span className="font-semibold text-navy">Collections</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-48 lg:shrink-0">
          {/* Mobile filters toggle */}
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="lg:hidden w-full flex items-center justify-between px-4 py-2.5 mb-4
              border border-border rounded-lg text-sm font-medium text-navy bg-white"
          >
            Filters
            <span className="text-xs text-muted">{filtersOpen ? '▲' : '▼'}</span>
          </button>

          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
          {/* Category Filter */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-navy uppercase tracking-widest">
                Category
              </h3>
              <button
                onClick={() => setSelectedCategory('All Jewellery')}
                className="text-xs text-gold hover:text-gold-dark"
              >
                Clear
              </button>
            </div>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded border-1.5 flex items-center justify-center transition-all ${
                      selectedCategory === cat
                        ? 'bg-sapphire border-sapphire'
                        : 'border-sapphire-lt bg-sapphire-lt'
                    }`}
                  >
                    {selectedCategory === cat && (
                      <svg
                        className="w-2 h-2 text-white"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-body flex-1">{cat}</span>
                  <span className="text-xs bg-sapphire-lt text-sapphire px-1.5 py-0.5 rounded">
                    {categoryCount(cat)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gem Type Filter */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-3">
              Gem Type
            </h3>
            <div className="space-y-2">
              {gemTypes.map((gem) => (
                <div
                  key={gem}
                  onClick={() => toggleFilter('gems', gem)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded border-1.5 flex items-center justify-center transition-all ${
                      filters.gems.includes(gem)
                        ? 'bg-sapphire border-sapphire'
                        : 'border-sapphire-lt bg-sapphire-lt'
                    }`}
                  >
                    {filters.gems.includes(gem) && (
                      <svg
                        className="w-2 h-2 text-white"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-body flex-1">{gem}</span>
                  <span className="text-xs bg-sapphire-lt text-sapphire px-1.5 py-0.5 rounded">
                    {gemCount(gem)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-3">
              Price Range
            </h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div
                  key={range}
                  onClick={() => toggleFilter('price', range)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded border-1.5 flex items-center justify-center transition-all ${
                      filters.price.includes(range)
                        ? 'bg-sapphire border-sapphire'
                        : 'border-sapphire-lt bg-sapphire-lt'
                    }`}
                  >
                    {filters.price.includes(range) && (
                      <svg
                        className="w-2 h-2 text-white"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-body flex-1">{range}</span>
                  <span className="text-xs bg-sapphire-lt text-sapphire px-1.5 py-0.5 rounded">
                    {priceCount(range)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Page Header */}
          <div className="mb-8 pb-5 border-b border-border">
            <h1 className="text-2xl font-semibold text-navy font-serif mb-1">
              Collections
            </h1>
            <p className="text-sm text-body">
              Discover our curated collection of certified gems and bespoke jewellery
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                  selectedCategory === cat
                    ? 'bg-sapphire border-sapphire text-white'
                    : 'border-border text-body bg-white hover:border-sapphire hover:text-sapphire hover:bg-sapphire-lt'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Filters */}
          {(filters.gems.length > 0 || filters.price.length > 0) && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-xs text-muted font-medium">Active filters:</span>
              {filters.gems.map((gem) => (
                <div
                  key={gem}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-sapphire-lt border border-sapphire rounded-lg text-sapphire"
                >
                  {gem}
                  <button
                    onClick={() => toggleFilter('gems', gem)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {filters.price.map((price) => (
                <div
                  key={price}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-sapphire-lt border border-sapphire rounded-lg text-sapphire"
                >
                  {price}
                  <button
                    onClick={() => toggleFilter('price', price)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-border">
            <div className="text-xs text-muted">
              Showing <span className="font-semibold text-navy">{sortedProducts.length}</span> items
            </div>
            <div className="flex gap-3 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 text-xs border border-sapphire-lt bg-sapphire-lt text-sapphire rounded-lg font-medium cursor-pointer hover:border-sapphire transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <div className="flex gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-sapphire border border-sapphire text-white hover:bg-sapphire-dark'
                      : 'border border-border text-muted bg-white hover:border-sapphire hover:text-sapphire'
                  }`}
                  title="Grid view"
                >
                  ⊞
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-all ${
                    viewMode === 'list'
                      ? 'bg-sapphire border border-sapphire text-white hover:bg-sapphire-dark'
                      : 'border border-border text-muted bg-white hover:border-sapphire hover:text-sapphire'
                  }`}
                  title="List view"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16 mb-8 border border-dashed border-border rounded-lg">
              <p className="text-sm text-body mb-1">No pieces match these filters.</p>
              <p className="text-xs text-muted">Try clearing a filter to see more results.</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:border-sapphire hover:shadow-lg transition-all cursor-pointer group"
              >
                {/* Product Image */}
                <div className="h-40 bg-surface border-b border-border flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>

                  {/* Badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-lg ${badgeStyles[product.badge]}`}>
                    {product.badge === 'new'
                      ? 'New'
                      : product.badge === 'sale'
                      ? 'Sale'
                      : 'Certified'}
                  </div>

                  {/* Wishlist */}
                  <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center hover:border-sapphire hover:text-sapphire hover:bg-sapphire-lt transition-all opacity-0 group-hover:opacity-100">
                    ♡
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-3.5">
                  <p className="text-xs text-sapphire uppercase font-semibold mb-1.5 tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="text-sm font-medium text-heading font-serif mb-1.5 leading-snug line-clamp-2 h-9">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted mb-2.5 line-clamp-1">{product.spec}</p>

                  {/* Rating */}
                  <div className="flex gap-1 items-center mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < product.rating ? 'text-gold' : 'text-border'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted ml-1">({product.reviews})</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm font-bold text-gold-dark">
                      ${product.price.toLocaleString()}
                    </span>
                    <button className="px-3 py-1.5 bg-sapphire hover:bg-sapphire-dark text-white text-xs font-medium rounded-lg transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Pagination */}
          <div className="flex gap-1 justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded text-xs font-medium flex items-center justify-center transition-all ${
                  i === 0
                    ? 'bg-sapphire border border-sapphire text-white hover:bg-sapphire-dark'
                    : 'border border-border text-body bg-white hover:border-sapphire hover:text-sapphire hover:bg-sapphire-lt'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
