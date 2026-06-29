import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    icon: '🔒',
    title: 'Certified & Authentic',
    desc: 'Every gemstone is GIA certified with complete documentation and an authenticity guarantee.',
  },
  {
    icon: '🌍',
    title: 'Ethically Sourced',
    desc: 'Sourced directly from Sri Lanka mines with full traceability and ethical sourcing practices.',
  },
  {
    icon: '✦',
    title: 'Bespoke Craftsmanship',
    desc: 'Each bespoke piece is hand finished by master jewellers with decades of combined experience.',
  },
  {
    icon: '✈️',
    title: 'Worldwide Shipping',
    desc: 'Complimentary insured shipping on orders over $500, delivered securely anywhere in the world.',
  },
]

const stats = [
  { value: '15+', label: 'Years of Expertise' },
  { value: '2,000+', label: 'Gems Sourced' },
  { value: '40+', label: 'Countries Served' },
  { value: '100%', label: 'GIA Certified' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="border-b border-border px-4 sm:px-6 py-2.5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-sapphire transition-colors">Home</Link>
          <span className="text-border">›</span>
          <span className="font-semibold text-navy">About</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-semibold mb-3">
              Our Story
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-heading font-medium leading-tight mb-6">
              Sharing the beauty of <span className="text-sapphire">authentic gems</span> from Sri Lanka
            </h1>
            <p className="text-body text-lg leading-relaxed mb-6">
              Ocea Gems International was founded by a small group of gemstone enthusiasts who set
              out to connect collectors and admirers worldwide with certified, ethically sourced
              gemstones straight from the mines of Sri Lanka.
            </p>
            <p className="text-body leading-relaxed">
              What began as a personal passion has grown into a trusted name for bespoke jewellery,
              built on transparency, craftsmanship, and an uncompromising standard of authenticity.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-3xl bg-surface border-2 border-gold flex items-center justify-center overflow-hidden shadow-xl">
              <Image
                src="/ocea-logo.png"
                alt="Ocea Gems International"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Stats */}
      <section className="bg-navy py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl lg:text-4xl text-gold-light font-semibold mb-1">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-navy-text">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Values */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-semibold mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl text-heading font-medium">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-16 h-16 rounded-xl bg-surface border border-border flex items-center justify-center mx-auto mb-4 group-hover:border-sapphire group-hover:shadow-md transition-all">
                  <span className="text-3xl">{v.icon}</span>
                </div>
                <h3 className="text-heading font-semibold mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* CTA */}
      <section className="bg-surface py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-heading font-medium mb-4">
            Ready to find your perfect gem?
          </h2>
          <p className="text-body leading-relaxed mb-8">
            Explore our curated collection or speak with us directly to begin a bespoke design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sapphire hover:bg-sapphire-dark text-white
                text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-sapphire text-sapphire hover:bg-sapphire-lt
                text-sm font-semibold rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
