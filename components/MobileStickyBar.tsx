"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileStickyBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 760);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          display: isMobile ? 'block' : 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 59,
          background: '#FFFFFF',
          borderTop: '1px solid rgba(26,23,16,0.10)',
          padding: '12px 20px',
          boxShadow: '0 -4px 20px rgba(26,23,16,0.08)',
        }}
      >
        <Link
          href="#order"
          style={{
            display: 'block',
            textAlign: 'center',
            background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
            color: '#FFFFFF',
            padding: '14px',
            borderRadius: '999px',
            fontWeight: 600,
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1)',
          }}
          className="hover:scale-[1.02] active:scale-95"
        >
          Order Your App
        </Link>
      </div>
      <div style={{ height: isMobile ? '76px' : '0px' }} />
    </>
  );
}
