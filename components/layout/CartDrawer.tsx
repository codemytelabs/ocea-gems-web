'use client'
import Image from 'next/image'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/useCart'
import { waLink } from '@/lib/contact'

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const cart = useCart()

  const handleCheckout = () => {
    const lines = cart.items
      .map((i) => `- ${i.name} x${i.qty} ($${(i.price * i.qty).toLocaleString()})`)
      .join('\n')
    const text = `Hello Ocea Gems, I'd like to order:\n\n${lines}\n\nSubtotal: $${cart.subtotal.toLocaleString()}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/20 z-[60] transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[70] flex flex-col
          transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
          <h2 className="font-heading text-lg text-heading font-medium">
            Your Cart{cart.count > 0 && ` (${cart.count})`}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-body hover:text-sapphire hover:bg-surface transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {cart.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="text-sm text-body mb-1">Your cart is empty.</p>
            <p className="text-xs text-muted">Add a piece from the collection to get started.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="flex gap-3 pb-4 border-b border-border">
                <div className="w-16 h-16 rounded-lg bg-surface border border-border flex items-center justify-center text-2xl shrink-0">
                  {item.image}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-heading font-serif leading-snug mb-1 line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-sm font-bold text-gold-dark mb-2">
                    ${item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => cart.updateQty(item.id, item.qty - 1)}
                      aria-label="Decrease quantity"
                      className="w-6 h-6 rounded border border-border flex items-center justify-center hover:border-sapphire hover:text-sapphire transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-medium w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => cart.updateQty(item.id, item.qty + 1)}
                      aria-label="Increase quantity"
                      className="w-6 h-6 rounded border border-border flex items-center justify-center hover:border-sapphire hover:text-sapphire transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => cart.remove(item.id)}
                      aria-label="Remove from cart"
                      className="ml-auto w-6 h-6 rounded flex items-center justify-center text-muted hover:text-ruby transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.items.length > 0 && (
          <div className="px-5 py-4 border-t border-border space-y-3 shrink-0">
            <div className="flex items-center justify-between text-sm">
              <span className="text-body">Subtotal</span>
              <span className="font-bold text-heading">${cart.subtotal.toLocaleString()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3
                rounded-lg border-2 border-whatsapp text-whatsapp-dark hover:bg-whatsapp-tint
                text-sm font-semibold transition-all duration-300"
            >
              <Image src="/whatsapp-icon.webp" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  )
}
