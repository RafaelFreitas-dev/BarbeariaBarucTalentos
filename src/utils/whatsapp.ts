import { business, type WhatsAppContact } from '../config/business'

export function whatsappHref(contact: WhatsAppContact): string {
  return `https://wa.me/${business.countryCode}${contact.phone}?text=${encodeURIComponent(contact.message)}`
}
