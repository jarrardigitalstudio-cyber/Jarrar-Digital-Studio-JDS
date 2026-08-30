"use client";

import React from 'react';

export default function About() {
  return (
    <section
      data-screen-label="About"
      id="about"
      style={{
        background: '#F3EEE2',
        padding: '100px 24px',
      }}
      className="transition-all duration-700"
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: '1 1 320px', minWidth: '280px', maxWidth: '420px', margin: '0 auto' }}>
          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(156,122,34,0.16)',
            }}
          >
            <img
              src="/images/founder-jarrar.png"
              alt="Jarrar Hussain Naqvi, founder of Jarrar Digital Studio"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ flex: '1 1 380px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#9C7A22',
            }}
          >
            The Founder
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
            Built by one developer, not a department.
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#1A1710', margin: 0 }}>
            I'm Jarrar Hussain Naqvi — a 16-year-old self-taught developer from India. I learned to build software by doing it: taking real ideas and shipping them with AI-assisted "vibe coding" workflows that actually hold up in the real world.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#1A1710', margin: 0 }}>
            I started Jarrar Digital Studio because small business owners kept getting priced out of good software — big agencies were too expensive, and freelancers were inconsistent. My studio closes that gap: agency-level design and planning, delivered directly by the person building it, at a price a small business can actually afford.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#7A7264', margin: 0 }}>
            No account managers, no relay chains — when you message JDS, you're talking to the person writing the code.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
            <span style={{ background: '#FFFFFF', border: '1px solid rgba(26,23,16,0.10)', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>
              16 Years Old
            </span>
            <span style={{ background: '#FFFFFF', border: '1px solid rgba(26,23,16,0.10)', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>
              Self-Taught Developer
            </span>
            <span style={{ background: '#FFFFFF', border: '1px solid rgba(26,23,16,0.10)', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>
              AI-Assisted Development
            </span>
            <span style={{ background: '#FFFFFF', border: '1px solid rgba(26,23,16,0.10)', padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#1A1710' }}>
              India-Based
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
