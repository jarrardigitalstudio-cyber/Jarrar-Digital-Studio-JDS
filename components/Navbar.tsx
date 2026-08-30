"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 760;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      data-screen-label="Navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(251,248,242,0.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(26,23,16,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        <Link href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/jds-logo-header.png"
            alt="Jarrar Digital Studio"
            style={{ height: '68px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center',
            gap: '36px',
          }}
        >
          <Link href="#about" style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#9C7A22] transition-colors">
            About
          </Link>
          <Link href="#services" style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#9C7A22] transition-colors">
            Services
          </Link>
          <Link href="#pricing" style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#9C7A22] transition-colors">
            Pricing
          </Link>
          <Link href="#process" style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#9C7A22] transition-colors">
            Process
          </Link>
          <Link href="#faq" style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#9C7A22] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link
            href="#order"
            style={{
              display: isMobile ? 'none' : 'inline-flex',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 12px 32px rgba(26,23,16,0.10)',
              textDecoration: 'none',
              transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s ease',
            }}
            className="hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_18px_40px_rgba(156,122,34,0.30)] active:scale-95"
          >
            Order Your App
          </Link>

          {/* Mobile hamburger toggle button */}
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            style={{
              display: isMobile ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <div
              style={{
                width: '22px',
                height: '2px',
                background: '#1A1710',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                transition: 'transform 0.25s cubic-bezier(.22,1,.36,1)',
              }}
            />
            <div
              style={{
                width: '22px',
                height: '2px',
                background: '#1A1710',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.2s',
              }}
            />
            <div
              style={{
                width: '22px',
                height: '2px',
                background: '#1A1710',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s cubic-bezier(.22,1,.36,1)',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        style={{
          display: isMobile && menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '8px 24px 24px',
          gap: '18px',
          background: '#FBF8F2',
          borderTop: '1px solid rgba(26,23,16,0.08)',
        }}
      >
        <Link href="#about" onClick={closeMenu} style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
          About
        </Link>
        <Link href="#services" onClick={closeMenu} style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
          Services
        </Link>
        <Link href="#pricing" onClick={closeMenu} style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
          Pricing
        </Link>
        <Link href="#process" onClick={closeMenu} style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
          Process
        </Link>
        <Link href="#faq" onClick={closeMenu} style={{ color: '#1A1710', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
          FAQ
        </Link>
        <Link
          href="#order"
          onClick={closeMenu}
          style={{
            background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '14px',
            borderRadius: '999px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1)',
          }}
          className="hover:scale-[1.03] active:scale-95"
        >
          Order Your App
        </Link>
      </div>
    </header>
  );
}
