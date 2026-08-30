"use client";

import React from 'react';

export default function Services() {
  return (
    <section
      data-screen-label="Services"
      id="services"
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
          What I Build
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
          Two platforms, one studio.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '28px',
          maxWidth: '1160px',
          margin: '0 auto',
        }}
      >
        {/* Mobile Apps Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 2px 8px rgba(26,23,16,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'transform 0.35s cubic-bezier(.16,1,.3,1),box-shadow 0.35s ease',
          }}
          className="hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(26,23,16,0.12)]"
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '32px',
                border: '2px solid #FFFFFF',
                borderRadius: '5px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                }}
              />
            </div>
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
            Mobile Apps
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Android and iOS-ready apps that put your business directly in your customers' pockets — ordering, booking, loyalty, or anything your business needs.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 0 0', padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0 }} />
              Custom UI design
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0 }} />
              Built for real customer use
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0 }} />
              Launch-ready builds
            </li>
          </ul>
        </div>

        {/* Websites Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 2px 8px rgba(26,23,16,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'transform 0.35s cubic-bezier(.16,1,.3,1),box-shadow 0.35s ease',
          }}
          className="hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(26,23,16,0.12)]"
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '24px',
                border: '2px solid #FFFFFF',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '6px',
                  background: 'rgba(255,255,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  paddingLeft: '3px',
                }}
              >
                <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#FFFFFF' }} />
                <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#FFFFFF' }} />
              </div>
            </div>
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
            Websites
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Fast, mobile-first websites that make your business look credible the moment someone lands on them — built to load quickly even on slower connections.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 0 0', padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0 }} />
              Mobile-first design
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0 }} />
              SEO-ready structure
            </li>
            <li style={{ fontSize: '14px', color: '#1A1710', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9C7A22', flexShrink: 0 }} />
              Lead capture built in
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
