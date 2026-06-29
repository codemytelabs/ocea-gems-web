import Link from 'next/link'
import Image from 'next/image'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from '@/lib/contact'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/bespoke', label: 'Bespoke' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <Image
                src="/ocea-logo.png"
                alt="Ocea Gems"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-base font-semibold text-white tracking-wide">
                Ocea Gems
              </span>
              <span className="text-[9px] tracking-widest uppercase text-navy-text">
                International
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Certified gemstones and bespoke jewellery, sourced directly from the mines of
            Sri Lanka and crafted with generations of expertise.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span>© {new Date().getFullYear()} Ocea Gems International</span>
            <span>·</span>
            <span>🇱🇰 Sri Lanka</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold-light mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold-light mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Image src="/whatsapp-icon.webp" alt="" width={14} height={14} className="w-3.5 h-3.5" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy-text">
          <span>GIA Certified · Ethically Sourced · Worldwide Shipping</span>
          <span>Designed with care in Sri Lanka</span>
        </div>
      </div>
    </footer>
  )
}
