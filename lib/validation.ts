import { OrderFormData, ValidationErrors } from './types';

export function validateEmail(email: string): boolean {
  if (!email || !email.trim()) return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(email.trim());
}

export function validateIndianPhone(phone: string): boolean {
  if (!phone || !phone.trim()) return false;
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) return true;
  if (digits.length === 11 && digits.startsWith('0') && /^[6-9]\d{9}$/.test(digits.slice(1))) return true;
  if (digits.length === 12 && digits.startsWith('91') && /^[6-9]\d{9}$/.test(digits.slice(2))) return true;
  return digits.length >= 10;
}

export function validateOrderForm(data: OrderFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Please enter your name';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Enter a valid email address';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Enter a valid phone number';
  } else if (!validateIndianPhone(data.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian phone number';
  }

  if (!data.address || !data.address.trim()) {
    errors.address = 'Please enter your address';
  }

  return errors;
}
