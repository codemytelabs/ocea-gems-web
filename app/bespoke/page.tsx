'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { waLink } from '@/lib/contact'

const steps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Share your vision with us, whether it is a sketch, a reference photo, or simply an idea. We discuss gemstones, metals and budget.',
  },
  {
    step: '02',
    title: 'Design & Sourcing',
    desc: 'Our team sources the perfect certified gemstone and prepares a custom design for your approval.',
  },
  {
    step: '03',
    title: 'Handcrafting',
    desc: 'Master jewellers hand-craft your piece, with progress updates shared along the way.',
  },
  {
    step: '04',
    title: 'Delivery',
    desc: 'Your finished piece is quality-checked, certified, and delivered with full insurance worldwide.',
  },
]

export default function BespokePage() {
  const [form, setForm] = useState({ name: '', details: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text =
      `Hello Ocea Gems, I'd like to start a bespoke design.\n\n` +
      `Name: ${form.name || 'Not provided'}\n` +
      `Details: ${form.details || 'Not provided'}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="border-b border-border px-4 sm:px-6 py-2.5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-sapphire transition-colors">Home</Link>
          <span className="text-border">›</span>
          <span className="font-semibold text-navy">Bespoke</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[.14em] text-gold-dark uppercase font-semibold mb-3">
          Made Just For You
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-heading font-medium mb-4">
          Bespoke Jewellery
        </h1>
        <p className="text-body text-base max-w-2xl mx-auto leading-relaxed">
          From a loose certified gemstone to a finished heirloom, we design and craft jewellery
          built entirely around you.
        </p>
      </section>

      <div className="h-px bg-border" />

      {/* Process */}
      <section className="bg-surface py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl lg:text-4xl text-heading font-medium">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="bg-white border border-border rounded-lg p-6 relative">
                <span className="font-heading text-4xl text-sapphire-lt font-bold absolute top-4 right-5">
                  {s.step}
                </span>
                <h3 className="text-heading font-semibold mb-2 text-lg relative z-10">{s.title}</h3>
                <p className="text-sm text-body leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Inquiry form */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl text-heading font-medium mb-3">
              Start Your Bespoke Journey
            </h2>
            <p className="text-body text-sm leading-relaxed">
              Tell us a little about what you have in mind and we'll continue the conversation on
              WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-8 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:border-sapphire focus:ring-1 focus:ring-sapphire transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                Tell Us About Your Idea
              </label>
              <textarea
                required
                rows={4}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:border-sapphire focus:ring-1 focus:ring-sapphire transition-colors resize-none"
                placeholder="A ring, a pendant, an heirloom redesign..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3
                rounded-lg border-2 border-whatsapp text-whatsapp-dark hover:bg-whatsapp-tint
                text-sm font-semibold transition-all duration-300"
            >
              <Image src="/whatsapp-icon.webp" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              Start via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
