"use client";

import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section
      data-screen-label="Mobile App Packages"
      id="pricing"
      style={{ padding: '100px 24px' }}
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
          Pricing
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
          Mobile App Packages
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
          Transparent pricing, premium delivery — pick the plan that fits where your business is today.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: '28px',
          maxWidth: '1160px',
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        {/* Launch Plan */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 2px 8px rgba(26,23,16,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            transition: 'transform 0.35s cubic-bezier(.16,1,.3,1),box-shadow 0.35s ease',
          }}
          className="hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(26,23,16,0.12)]"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 700,
                fontSize: '22px',
                color: '#1A1710',
                margin: 0,
              }}
            >
              Launch
            </h3>
            <p style={{ fontSize: '14px', color: '#7A7264', margin: '4px 0 0' }}>Get live fast</p>
          </div>
          <div>
            <span
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 800,
                fontSize: '28px',
                color: '#1A1710',
              }}
            >
              ₹8,499
            </span>
            <span style={{ fontSize: '14px', color: '#7A7264' }}> · ships in 3–4 days</span>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              1 category template
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Up to 7 core screens
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Android + iOS (Flutter)
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Your logo, colors &amp; fonts
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Guided store submission
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              15 days free post-launch bug-fix support
            </li>
          </ul>
          <Link
            href="#order"
            style={{
              marginTop: '8px',
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #9C7A22',
              color: '#9C7A22',
              padding: '14px 24px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
            }}
            className="hover:bg-[#9C7A22] hover:text-white transition-all active:scale-95"
          >
            Start Building
          </Link>
        </div>

        {/* Growth Plan (Most Popular) */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 24px 60px rgba(156,122,34,0.16)',
            border: '2px solid #9C7A22',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative',
            transition: 'transform 0.35s cubic-bezier(.16,1,.3,1)',
          }}
          className="hover:-translate-y-2.5"
        >
          <span
            style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '999px',
              whiteSpace: 'nowrap',
            }}
          >
            Most Popular
          </span>
          <div style={{ marginTop: '8px' }}>
            <h3
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 700,
                fontSize: '22px',
                color: '#1A1710',
                margin: 0,
              }}
            >
              Growth
            </h3>
            <p style={{ fontSize: '14px', color: '#7A7264', margin: '4px 0 0' }}>Start selling / booking</p>
          </div>
          <div>
            <span
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 800,
                fontSize: '28px',
                color: '#1A1710',
              }}
            >
              ₹13,999
            </span>
            <span style={{ fontSize: '14px', color: '#7A7264' }}> · ships in 5–7 days</span>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1710', margin: 0 }}>
            Everything in Launch, plus:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Up to 12 screens
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Payments (UPI/Cards via Razorpay)
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Cart or bookings
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Push notifications
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              1 free round of post-delivery revisions
            </li>
          </ul>
          <Link
            href="#order"
            style={{
              marginTop: '8px',
              textAlign: 'center',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              padding: '14px 24px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 12px 32px rgba(26,23,16,0.10)',
              transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s ease',
            }}
            className="hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(156,122,34,0.30)] active:scale-95"
          >
            Start Building
          </Link>
        </div>

        {/* Pro Plan */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 2px 8px rgba(26,23,16,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            transition: 'transform 0.35s cubic-bezier(.16,1,.3,1),box-shadow 0.35s ease',
          }}
          className="hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(26,23,16,0.12)]"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 700,
                fontSize: '22px',
                color: '#1A1710',
                margin: 0,
              }}
            >
              Pro
            </h3>
            <p style={{ fontSize: '14px', color: '#7A7264', margin: '4px 0 0' }}>For serious operators</p>
          </div>
          <div>
            <span
              style={{
                fontFamily: "'Satoshi',sans-serif",
                fontWeight: 800,
                fontSize: '28px',
                color: '#1A1710',
              }}
            >
              ₹26,999
            </span>
            <span style={{ fontSize: '14px', color: '#7A7264' }}> · ships in 7–10 days</span>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1710', margin: 0 }}>
            Everything in Growth, plus:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Up to 18 screens
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Multi-module + full admin panel
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Advanced payments + coupons
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              Segmented push notifications
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0, marginTop: '6px' }} />
              30 days free post-launch support
            </li>
          </ul>
          <Link
            href="#order"
            style={{
              marginTop: '8px',
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #9C7A22',
              color: '#9C7A22',
              padding: '14px 24px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
            }}
            className="hover:bg-[#9C7A22] hover:text-white transition-all active:scale-95"
          >
            Start Building
          </Link>
        </div>
      </div>
    </section>
  );
}
