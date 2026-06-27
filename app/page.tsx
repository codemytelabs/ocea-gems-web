import Image from 'next/image'
import Link from 'next/link'

// Sample past pieces data
const pastPieces = [
  {
    id: 1,
    title: 'Royal Sapphire Ring',
    year: '2025',
    rating: 5,
    image: '💎',
  },
  {
    id: 2,
    title: 'Ruby Heirloom Necklace',
    year: '2025',
    rating: 5,
    image: '👑',
  },
  {
    id: 3,
    title: 'Emerald Statement Pendant',
    year: '2025',
    rating: 5,
    image: '✨',
  },
  {
    id: 4,
    title: 'Diamond Engagement Ring',
    year: '2024',
    rating: 5,
    image: '💍',
  },
  {
    id: 5,
    title: 'Sapphire Tennis Bracelet',
    year: '2024',
    rating: 5,
    image: '✨',
  },
  {
    id: 6,
    title: 'Ruby Drop Earrings',
    year: '2024',
    rating: 5,
    image: '💎',
  },
  {
    id: 7,
    title: 'Bespoke Emerald Brooch',
    year: '2024',
    rating: 5,
    image: '👑',
  },
  {
    id: 8,
    title: 'Vintage Pearl Necklace',
    year: '2023',
    rating: 5,
    image: '✨',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-surface via-surface to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-6 inline-flex w-fit">
                <div className="px-3 py-1.5 rounded-full bg-sapphire-lt border border-sapphire text-sapphire text-xs font-semibold tracking-wide uppercase">
                  ✨ Coming Soon
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-5xl lg:text-6xl text-heading font-medium leading-tight mb-6">
                Curated <span className="text-gold">gems</span>,<br />
                crafted for you
              </h1>

              {/* Description */}
              <p className="text-body text-lg leading-relaxed mb-8 max-w-lg">
                Discover our exclusive collection of certified gemstones and bespoke jewellery pieces, handpicked from the finest mines in Sri Lanka. Each piece tells a story of craftsmanship and elegance.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sapphire-lt flex items-center justify-center text-lg">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wide">GIA Certified</p>
                    <p className="text-xs text-body">100% Authentic Gemstones</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-tint flex items-center justify-center text-lg">
                    🌍
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wide">Direct Source</p>
                    <p className="text-xs text-body">From Sri Lanka Mines</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mb-8">
                <a
                  href="tel:+94771164429"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3
                    rounded-lg bg-gold hover:bg-gold-dark text-white text-sm font-semibold
                    transition-all duration-300 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Us
                </a>

                <a
                  href="https://wa.me/94771164429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3
                    rounded-lg border-2 border-gold text-gold hover:bg-gold-tint hover:border-gold-dark
                    text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.25l-.355.211-.369-.015C8.23 8.288 4.897 5.155 4.897 1.27 4.897.573 5.45 0 6.167 0h2.833c.683 0 1.235.573 1.235 1.27v2.833c0 .697.553 1.27 1.235 1.27h2.833c.683 0 1.235-.573 1.235-1.27V1.27C18.33.573 17.777 0 17.094 0h-2.833c-.683 0-1.235.573-1.235 1.27v2.833c0 .697-.552 1.27-1.235 1.27" />
                  </svg>
                  Message Us
                </a>
              </div>

              {/* Subtext */}
              <p className="text-xs text-muted">
                Available for consultation & custom requests
              </p>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-80 h-80 bg-sapphire-lt rounded-full opacity-10 blur-3xl" />
              </div>

              {/* Logo Box */}
              <div className="relative z-10">
                <div className="w-48 h-48 rounded-3xl bg-white border-2 border-gold flex items-center justify-center overflow-hidden shadow-2xl">
                  <Image
                    src="/logo.png"
                    alt="Ocea Gems International"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold rounded-2xl opacity-80 flex items-center justify-center text-3xl shadow-lg">
                  💎
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sapphire rounded-full opacity-70 flex items-center justify-center text-2xl shadow-lg">
                  👑
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name Section */}
          <div className="mt-20 pt-12 border-t border-border">
            <div className="text-center">
              <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-semibold mb-1">
                Ocea Gems International
              </p>
              <p className="text-sm text-body mb-6">
                Established by gemstone enthusiasts passionate about sharing the beauty of authentic gems from Sri Lanka
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted">
                <span>© 2026 Ocea Gems International</span>
                <span>·</span>
                <span>🇱🇰 Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Gallery Section - Past Pieces */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-semibold mb-3">
              Our Heritage
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-heading font-medium mb-4">
              Gallery of Past Creations
            </h2>
            <p className="text-body text-base max-w-2xl mx-auto leading-relaxed">
              Explore our collection of expertly crafted pieces and bespoke designs from our valued clients. Each creation represents a unique story of artistry and elegance.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {pastPieces.map((piece) => (
              <div
                key={piece.id}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-gold hover:shadow-lg transition-all cursor-pointer bg-card"
              >
                {/* Image Container */}
                <div className="aspect-square bg-surface flex items-center justify-center overflow-hidden relative">
                  <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                    {piece.image}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
                </div>

                {/* Info */}
                <div className="p-4 border-t border-border">
                  <h3 className="font-heading text-sm font-medium text-heading mb-1 group-hover:text-gold transition-colors">
                    {piece.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{piece.year}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: piece.rating }).map((_, i) => (
                        <span key={i} className="text-xs text-gold">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-sapphire hover:bg-sapphire text-white
                text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Explore Collections
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Features Section */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-white border border-border flex items-center justify-center mx-auto mb-4 group-hover:border-gold group-hover:shadow-md transition-all">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-heading font-semibold mb-2 text-lg">Certified & Authentic</h3>
              <p className="text-sm text-body leading-relaxed">
                All gems certified by GIA with complete documentation and authenticity guarantee
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-white border border-border flex items-center justify-center mx-auto mb-4 group-hover:border-gold group-hover:shadow-md transition-all">
                <span className="text-3xl">✈️</span>
              </div>
              <h3 className="text-heading font-semibold mb-2 text-lg">Free Insured Shipping</h3>
              <p className="text-sm text-body leading-relaxed">
                Complimentary insured shipping on orders over $500 worldwide
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-white border border-border flex items-center justify-center mx-auto mb-4 group-hover:border-gold group-hover:shadow-md transition-all">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-heading font-semibold mb-2 text-lg">Ethically Sourced</h3>
              <p className="text-sm text-body leading-relaxed">
                Direct from Sri Lanka with full traceability and ethical sourcing practices
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}