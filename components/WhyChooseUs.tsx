"use client";

import React from 'react';

export default function WhyChooseUs() {
  return (
    <section
      data-screen-label="Why Choose Us"
      id="why"
      style={{
        background: '#F3EEE2',
        padding: '100px 24px',
      }}
      className="transition-all duration-700"
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto 56px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#9C7A22',
          }}
        >
          Why Choose Us
        </span>
        <h2
          style={{
            fontFamily: "'Satoshi',sans-serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(28px,4vw,42px)',
            color: '#1A1710',
            margin: 0,
          }}
        >
          Small studio. Zero compromises.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: '32px',
          maxWidth: '1160px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid #9C7A22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              color: '#9C7A22',
              fontSize: '15px',
            }}
          >
            01
          </div>
          <h3
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#1A1710',
              margin: 0,
            }}
          >
            Direct line to the founder
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            No account managers, no relay chains. Every message reaches the person actually building your product.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid #9C7A22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              color: '#9C7A22',
              fontSize: '15px',
            }}
          >
            02
          </div>
          <h3
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#1A1710',
              margin: 0,
            }}
          >
            Agency quality, startup price
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            AI-assisted development means senior-level planning and design without a senior-agency invoice.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid #9C7A22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              color: '#9C7A22',
              fontSize: '15px',
            }}
          >
            03
          </div>
          <h3
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#1A1710',
              margin: 0,
            }}
          >
            30-minute follow-up, always
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Every inquiry gets a personal response within 30 minutes — not a support ticket number.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid #9C7A22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              color: '#9C7A22',
              fontSize: '15px',
            }}
          >
            04
          </div>
          <h3
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#1A1710',
              margin: 0,
            }}
          >
            Built for how you actually work
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Plain-language explanations and WhatsApp-first communication — no unnecessary jargon.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid #9C7A22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              color: '#9C7A22',
              fontSize: '15px',
            }}
          >
            05
          </div>
          <h3
            style={{
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#1A1710',
              margin: 0,
            }}
          >
            Fast, without cutting corners
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Startup speed doesn't mean shortcuts — every build goes through real review before it reaches you.
          </p>
        </div>
      </div>
    </section>
  );
}
