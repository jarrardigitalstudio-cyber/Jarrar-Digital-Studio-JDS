"use client";

import React, { useState } from 'react';
import { OrderFormData, ValidationErrors } from '@/lib/types';
import { validateOrderForm } from '@/lib/validation';
import { buildWhatsAppOrderLink, buildWhatsAppGreetingLink, formatWhatsAppDisplay } from '@/lib/whatsapp';
import { CONTACT_INFO } from '@/lib/constants';

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    idea: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (field: keyof OrderFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (apiError) setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const validationErrors = validateOrderForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Post to backend API route (/api/order)
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Server error occurred while submitting inquiry.');
      }

      // 2. Show on-screen success state
      setSubmitted(true);

      // 3. Immediately and automatically open WhatsApp deep link in new tab
      const waUrl = buildWhatsAppOrderLink(formData);
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setApiError(
        err.message || 'Failed to submit the form. Please check your connection or message directly on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', address: '', idea: '' });
    setErrors({});
    setSubmitted(false);
    setApiError(null);
  };

  const firstName = (formData.name.trim().split(' ')[0]) || 'there';
  const waDisplay = formatWhatsAppDisplay(CONTACT_INFO.defaultWhatsAppNumber);
  const waDirectLink = buildWhatsAppGreetingLink();

  const nameBorderColor = errors.name ? '#B3261E' : 'rgba(26,23,16,0.14)';
  const emailBorderColor = errors.email ? '#B3261E' : 'rgba(26,23,16,0.14)';
  const phoneBorderColor = errors.phone ? '#B3261E' : 'rgba(26,23,16,0.14)';
  const addressBorderColor = errors.address ? '#B3261E' : 'rgba(26,23,16,0.14)';

  return (
    <section
      data-screen-label="Order Form"
      id="order"
      style={{ padding: '100px 24px' }}
      className="transition-all duration-700"
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
        }}
      >
        <div style={{ flex: '2 1 420px', minWidth: '300px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#9C7A22',
            }}
          >
            Start Your Project
          </span>
          <h2
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.02em',
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#1A1710',
              margin: '12px 0 0',
            }}
          >
            Tell me about your idea.
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#7A7264', margin: '16px 0 0' }}>
            Fill this in and I'll personally follow up within 30 minutes — no bots, no queue.
          </p>

          {/* SUCCESS STATE */}
          {submitted ? (
            <div
              style={{
                marginTop: '32px',
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '48px 40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 12px 32px rgba(26,23,16,0.10)',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#F3EEE2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '11px',
                    borderLeft: '3px solid #7C5F16',
                    borderBottom: '3px solid #7C5F16',
                    transform: 'rotate(-45deg) translate(2px,-2px)',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Satoshi',sans-serif",
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#1A1710',
                  margin: 0,
                }}
              >
                Thank you, {firstName}!
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#7A7264', maxWidth: '360px', margin: 0 }}>
                Your inquiry is in. Expect a call or message from Jarrar within 30 minutes.
              </p>
              <button
                type="button"
                onClick={resetForm}
                style={{
                  color: '#9C7A22',
                  fontWeight: 600,
                  fontSize: '14px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
                className="hover:underline transition-all"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>Full Name*</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                  placeholder="Your name"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: `1.5px solid ${nameBorderColor}`,
                    fontSize: '15px',
                    fontFamily: "'Inter',sans-serif",
                    background: '#FFFFFF',
                    color: '#1A1710',
                    outline: 'none',
                  }}
                />
                <span style={{ fontSize: '13px', color: '#B3261E', minHeight: '16px' }}>{errors.name || ''}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>Email*</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  placeholder="you@email.com"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: `1.5px solid ${emailBorderColor}`,
                    fontSize: '15px',
                    fontFamily: "'Inter',sans-serif",
                    background: '#FFFFFF',
                    color: '#1A1710',
                    outline: 'none',
                  }}
                />
                <span style={{ fontSize: '13px', color: '#B3261E', minHeight: '16px' }}>{errors.email || ''}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>Phone*</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  placeholder="+91 XXXXX XXXXX"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: `1.5px solid ${phoneBorderColor}`,
                    fontSize: '15px',
                    fontFamily: "'Inter',sans-serif",
                    background: '#FFFFFF',
                    color: '#1A1710',
                    outline: 'none',
                  }}
                />
                <span style={{ fontSize: '13px', color: '#B3261E', minHeight: '16px' }}>{errors.phone || ''}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>Address*</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={handleChange('address')}
                  placeholder="City, State"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: `1.5px solid ${addressBorderColor}`,
                    fontSize: '15px',
                    fontFamily: "'Inter',sans-serif",
                    background: '#FFFFFF',
                    color: '#1A1710',
                    outline: 'none',
                  }}
                />
                <span style={{ fontSize: '13px', color: '#B3261E', minHeight: '16px' }}>{errors.address || ''}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>Tell me about your idea (optional)</label>
                <textarea
                  rows={4}
                  value={formData.idea}
                  onChange={handleChange('idea')}
                  placeholder="What are you looking to build?"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(26,23,16,0.14)',
                    fontSize: '15px',
                    fontFamily: "'Inter',sans-serif",
                    resize: 'vertical',
                    background: '#FFFFFF',
                    color: '#1A1710',
                    outline: 'none',
                  }}
                />
              </div>

              {apiError && (
                <div style={{ padding: '12px 16px', background: '#FFECEC', border: '1px solid #B3261E', borderRadius: '12px', color: '#B3261E', fontSize: '14px' }}>
                  {apiError}{' '}
                  <a href={waDirectLink} target="_blank" rel="noopener noreferrer" style={{ color: '#9C7A22', fontWeight: 600, textDecoration: 'underline' }}>
                    Message on WhatsApp
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: '8px',
                  background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 24px 60px rgba(156,122,34,0.16)',
                  transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s ease',
                }}
                className="hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_28px_64px_rgba(156,122,34,0.28)] active:scale-95 disabled:opacity-75"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>

        {/* Right Info Box */}
        <div style={{ flex: '1 1 280px', minWidth: '260px' }}>
          <div
            style={{
              background: '#1A1710',
              borderRadius: '24px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              color: '#FBF8F2',
            }}
          >
            <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '20px', margin: 0 }}>
              Prefer to talk directly?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(251,248,242,0.65)', margin: 0 }}>
              Skip the form — message me directly and I'll respond personally.
            </p>
            <a
              href={waDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(251,248,242,0.08)',
                padding: '14px 18px',
                borderRadius: '14px',
                color: '#FBF8F2',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
              }}
              className="hover:bg-[rgba(251,248,242,0.15)] transition-colors"
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B8912F', flexShrink: 0 }} />
              WhatsApp: {waDisplay}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.defaultEmail}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(251,248,242,0.08)',
                padding: '14px 18px',
                borderRadius: '14px',
                color: '#FBF8F2',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
              }}
              className="hover:bg-[rgba(251,248,242,0.15)] transition-colors"
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B8912F', flexShrink: 0 }} />
              {CONTACT_INFO.defaultEmail}
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', position: 'relative' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B8912F', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: 'rgba(251,248,242,0.85)', position: 'relative' }}>
                {CONTACT_INFO.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
