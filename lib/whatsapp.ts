import { OrderFormData } from './types';
import { CONTACT_INFO } from './constants';

export function getCleanWhatsAppNumber(number?: string): string {
  const raw = number || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || CONTACT_INFO.defaultWhatsAppNumber;
  return raw.replace(/\D/g, '');
}

export function formatWhatsAppDisplay(number?: string): string {
  const digits = getCleanWhatsAppNumber(number);
  if (digits.length === 12 && digits.startsWith('91')) {
    const local = digits.slice(2);
    return '+91 ' + local.slice(0, 5) + ' ' + local.slice(5);
  }
  if (digits.length === 10) {
    return '+91 ' + digits.slice(0, 5) + ' ' + digits.slice(5);
  }
  return '+' + digits;
}

export function buildWhatsAppGreetingLink(number?: string): string {
  const cleanNumber = getCleanWhatsAppNumber(number);
  const greeting = "Hi Jarrar, I'm interested in building an app/website with Jarrar Digital Studio.";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(greeting)}`;
}

export function buildWhatsAppOrderLink(data: OrderFormData, number?: string): string {
  const cleanNumber = getCleanWhatsAppNumber(number);
  
  const lines = [
    'New Order Inquiry',
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Address: ${data.address.trim()}`,
    `Idea: ${data.idea && data.idea.trim() ? data.idea.trim() : 'Not provided'}`,
  ];

  const messageText = lines.join('\n');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
}
