export const PHONE_DISPLAY = '+94 77 116 4429'
export const PHONE_TEL = '+94771164429'
export const WHATSAPP_NUMBER = '94771164429'
export const EMAIL = 'info@oceagems.com'
export const ADDRESS = 'Colombo, Sri Lanka'

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
