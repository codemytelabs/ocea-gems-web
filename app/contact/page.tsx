'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from '@/lib/contact'

const infoCards = [
  { icon: '📞', label: 'Call Us', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: '✉️', label: 'Email Us', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: '📍', label: 'Visit Us', value: ADDRESS, href: undefined },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Ocea Gems, my name is ${form.name || 'Not provided'}.\n\nMessage: ${form.message || 'Not provided'}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="border-b border-border px-4 sm:px-6 py-2.5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-sapphire transition-colors">Home</Link>
          <span className="text-border">›</span>
          <span className="font-semibold text-navy">Contact</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-semibold mb-3">
          We'd Love to Hear From You
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-heading font-medium mb-4">
          Get in Touch
        </h1>
        <p className="text-body text-base max-w-2xl mx-auto leading-relaxed">
          Questions about a gemstone, a bespoke commission, or an existing order? Our team is
          ready to help.
        </p>
      </section>

      <div className="h-px bg-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Info cards */}
        <div className="lg:col-span-2 space-y-4">
          {infoCards.map((c) => {
            const Wrapper = c.href ? 'a' : 'div'
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href } : {})}
                className="flex items-start gap-4 p-5 bg-white border border-border rounded-lg hover:border-sapphire hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-sapphire-lt flex items-center justify-center text-xl shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">
                    {c.label}
                  </p>
                  <p className="text-sm text-body">{c.value}</p>
                </div>
              </Wrapper>
            )
          })}

          {/* WhatsApp CTA */}
          <a
            href={waLink('Hello Ocea Gems, I would like to know more about your collection.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-whatsapp-tint border-2 border-whatsapp rounded-lg hover:bg-whatsapp/10 transition-all"
          >
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-xl shrink-0">
              <Image src="/whatsapp-icon.webp" alt="" width={24} height={24} className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-whatsapp-dark uppercase tracking-wide mb-1">
                Chat on WhatsApp
              </p>
              <p className="text-sm text-body">Usually replies within minutes</p>
            </div>
          </a>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-border rounded-lg p-8 space-y-5"
          >
            <h2 className="font-heading text-xl text-heading font-medium mb-2">
              Send Us a Message
            </h2>
            <p className="text-sm text-muted mb-4">
              Fill in the form below and we'll continue the conversation on WhatsApp.
            </p>

            <div>
              <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:border-sapphire focus:ring-1 focus:ring-sapphire transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:border-sapphire focus:ring-1 focus:ring-sapphire transition-colors resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3
                rounded-lg border-2 border-whatsapp text-whatsapp-dark hover:bg-whatsapp-tint
                text-sm font-semibold transition-all duration-300"
            >
              <Image src="/whatsapp-icon.webp" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
