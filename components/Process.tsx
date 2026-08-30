"use client";

import React from 'react';

export default function Process() {
  return (
    <section
      data-screen-label="Process"
      id="process"
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
          How It Works
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
          From idea to launch in seven steps.
        </h2>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          maxWidth: '1160px',
          margin: '0 auto',
        }}
      >
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            1
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            Share Your Idea
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Fill out the inquiry form or message directly on WhatsApp.
          </p>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            2
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            30-Minute Callback
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Jarrar personally reaches out to understand your business and goals.
          </p>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            3
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            Design Your UI/UX
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            We turn your idea into screens you can see and react to.
          </p>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            4
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            Review Your Design
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            You review the design and confirm it before development starts.
          </p>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            5
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            Develop
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            AI-assisted development turns the approved design into a real, working product.
          </p>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            6
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            Review &amp; Change
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            You see the working build and request changes before anything is final.
          </p>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Satoshi',sans-serif",
              fontWeight: 700,
            }}
          >
            7
          </div>
          <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: '17px', color: '#1A1710', margin: 0 }}>
            Launch
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7A7264', margin: 0 }}>
            Your app, website, or software goes live — with support after launch.
          </p>
        </div>
      </div>
    </section>
  );
}
