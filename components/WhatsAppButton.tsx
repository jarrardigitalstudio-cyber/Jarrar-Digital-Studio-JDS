"use client";

import React, { useState, useEffect } from 'react';
import { buildWhatsAppGreetingLink } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);
  const waLink = buildWhatsAppGreetingLink();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 760);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: isMobile ? '92px' : '24px',
        right: '24px',
        zIndex: 60,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 24px 60px rgba(156,122,34,0.16)',
        animation: 'waPulse 2.6s ease-in-out infinite',
        transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1)',
      }}
      className="hover:scale-110 hover:-rotate-6 active:scale-95"
    >
      <div
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '6px 6px 6px 2px',
          background: '#FFFFFF',
        }}
      />
    </a>
  );
}
