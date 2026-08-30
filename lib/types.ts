export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  idea?: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  deliveryTime: string;
  highlight?: boolean;
  badge?: string;
  headerNote?: string;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  imageAlt: string;
  linkText: string;
  linkUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  content: string;
  date?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
}
