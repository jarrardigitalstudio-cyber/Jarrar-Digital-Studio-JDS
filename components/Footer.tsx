"use client";

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';
import { buildWhatsAppGreetingLink, formatWhatsAppDisplay } from '@/lib/whatsapp';

export default function Footer() {
  const waLink = buildWhatsAppGreetingLink();
  const waDisplay = formatWhatsAppDisplay(CONTACT_INFO.defaultWhatsAppNumber);

  return (
    <footer
      data-screen-label="Footer"
      style={{
        background: '#1A1710',
        color: '#FBF8F2',
        padding: '72px 24px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/images/jds-logo-footer.png"
              alt="Jarrar Digital Studio logo"
              style={{ height: '44px', width: '44px', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '-0.01em',
                color: '#FBF8F2',
              }}
            >
              Jarrar Digital Studio
            </span>
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(251,248,242,0.6)', maxWidth: '280px', margin: 0 }}>
            {CONTACT_INFO.tagline}
          </p>
        </div>

        <div style={{ flex: '1 1 160px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(251,248,242,0.5)' }}>
            Studio
          </span>
          <Link href="#about" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            About
          </Link>
          <Link href="#services" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            Services
          </Link>
          <Link href="#process" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            Process
          </Link>
        </div>

        <div style={{ flex: '1 1 160px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(251,248,242,0.5)' }}>
            Get Started
          </span>
          <Link href="#pricing" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            Pricing
          </Link>
          <Link href="#portfolio" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            Portfolio
          </Link>
          <Link href="#faq" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            FAQ
          </Link>
          <Link href="#order" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            Start a Project
          </Link>
        </div>

        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(251,248,242,0.5)' }}>
            Contact
          </span>
          <a href={`mailto:${CONTACT_INFO.defaultEmail}`} style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            {CONTACT_INFO.defaultEmail}
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(251,248,242,0.85)', fontSize: '14px', textDecoration: 'none' }} className="hover:text-[#B8912F] transition-colors">
            WhatsApp: {waDisplay}
          </a>
          <span style={{ color: 'rgba(251,248,242,0.6)', fontSize: '14px' }}>
            {CONTACT_INFO.address}
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1160px',
          margin: '56px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(251,248,242,0.12)',
          fontSize: '13px',
          color: 'rgba(251,248,242,0.5)',
        }}
      >
        <span>© 2026 Jarrar Digital Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}
