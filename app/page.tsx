import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 py-16 text-center">

      {/* logo */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-2xl bg-card border border-border
          flex items-center justify-center mx-auto mb-4 overflow-hidden">
          <Image
            src="/logo.png"
            alt="Ocea Gems International"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* text */}
      <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-medium mb-3">
        Ocea Gems International
      </p>
      <h1 className="font-heading text-4xl md:text-5xl text-heading
        font-medium leading-tight mb-4">
        Curated gems,<br />crafted for you
      </h1>
      <p className="text-body text-sm leading-relaxed max-w-sm mb-10">
        Our new collection is almost ready. Be the first to explore certified
        sapphires, rubies, and bespoke jewellery from Sri Lanka.
      </p>

      {/* contact buttons */}
      <div className="flex gap-3 w-full max-w-sm mb-8">
        {/* call button */}
        <a
          href="tel:+94771164429"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5
            rounded-lg bg-gold hover:bg-gold-dark text-white text-sm font-medium
            transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>

        {/* whatsapp button */}
        <a
          href="https://wa.me/94771164429"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5
            rounded-lg border border-gold text-gold hover:bg-gold-tint hover:border-gold-dark
            text-sm font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>

      <p className="text-xs text-muted">
        © 2026 Ocea Gems International · Sri Lanka
      </p>
    </main>
  )
}