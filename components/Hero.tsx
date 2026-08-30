"use client";

import React from 'react';
import Link from 'next/link';
import { buildWhatsAppGreetingLink } from '@/lib/whatsapp';

export default function Hero() {
  const waLink = buildWhatsAppGreetingLink();

  return (
    <section
      data-screen-label="Hero"
      id="top"
      style={{
        position: 'relative',
        padding: '140px 24px 100px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(60% 60% at 50% 0%, rgba(156,122,34,0.12), rgba(156,122,34,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '56px',
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: '1 1 460px',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            animation: 'heroRise 0.9s cubic-bezier(.16,1,.3,1) both',
          }}
        >
          <span
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1px solid rgba(26,23,16,0.10)',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#7A7264',
            }}
          >
            AI-Assisted Development Studio · India
          </span>

          <h1
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              fontSize: 'clamp(38px,5.2vw,64px)',
              color: '#1A1710',
              margin: 0,
            }}
          >
            Premium apps and websites — <span style={{ color: '#9C7A22' }}>built at startup speed.</span>
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#7A7264',
              maxWidth: '520px',
              margin: 0,
            }}
          >
            Jarrar Digital Studio is a one-founder, AI-assisted development studio helping small businesses across India go from idea to a working product — without agency price tags or agency delays.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link
              href="#order"
              style={{
                background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
                color: '#FFFFFF',
                padding: '16px 32px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 24px 60px rgba(156,122,34,0.16)',
                transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s ease',
              }}
              className="hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_28px_64px_rgba(156,122,34,0.28)] active:scale-95"
            >
              Start Your Project
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#FFFFFF',
                border: '1px solid rgba(26,23,16,0.14)',
                color: '#1A1710',
                padding: '16px 28px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1),border-color 0.3s ease',
              }}
              className="hover:-translate-y-1.5 hover:scale-[1.03] hover:border-[#9C7A22] active:scale-95"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              marginTop: '8px',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#7A7264',
              fontWeight: 600,
            }}
          >
            <span>Mobile Apps</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Websites</span>
          </div>
        </div>

        {/* Right Column Phone Mockup */}
        <div
          style={{
            flex: '1 1 320px',
            minWidth: '260px',
            display: 'flex',
            justifyContent: 'center',
            animation: 'heroRise 0.9s cubic-bezier(.16,1,.3,1) 0.15s both',
          }}
        >
          <div style={{ position: 'relative', width: '248px' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '40px',
                background: '#1A1710',
                padding: '12px',
                boxShadow: '0 40px 80px rgba(26,23,16,0.22)',
                width: '270px',
                height: '590px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '20px',
                  background: '#1A1710',
                  borderRadius: '0 0 14px 14px',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  width: '100%',
                  height: '563px',
                }}
              >
                <img
                  src="/images/hero-phone-screen.png"
                  alt="Spice &amp; Co. restaurant ordering app screen"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Top Left Floating Tag */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#1A1710',
                color: '#FBF8F2',
                padding: '10px 16px',
                borderRadius: '14px',
                boxShadow: '0 16px 32px rgba(26,23,16,0.24)',
                border: '1px solid rgba(251,248,242,0.12)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#B8912F',
                  flexShrink: 0,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.3 }}>Concept Build</span>
                <span style={{ fontSize: '11px', color: 'rgba(251,248,242,0.65)', lineHeight: 1.3 }}>
                  Restaurant Ordering App
                </span>
              </div>
            </div>

            {/* Bottom Right Floating Tag */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-24px',
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                padding: '12px 18px',
                borderRadius: '14px',
                boxShadow: '0 16px 32px rgba(26,23,16,0.16)',
                border: '1px solid rgba(26,23,16,0.06)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Satoshi',sans-serif",
                  fontWeight: 800,
                  fontSize: '16px',
                  color: '#1A1710',
                }}
              >
                From ₹8,499
              </span>
              <span style={{ fontSize: '11px', color: '#7A7264' }}>
                Android + iOS · ships in 3–4 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
