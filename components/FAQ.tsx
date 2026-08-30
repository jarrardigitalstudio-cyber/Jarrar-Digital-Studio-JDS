"use client";

import React, { useState } from 'react';
import { FAQ_DATA } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      data-screen-label="FAQ"
      id="faq"
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
          FAQ
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
          Questions, answered.
        </h2>
      </div>

      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(26,23,16,0.08)',
                overflow: 'hidden',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Satoshi',sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#1A1710',
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: '20px',
                    lineHeight: 1,
                    color: '#9C7A22',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s cubic-bezier(.22,1,.36,1)',
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: isOpen ? '240px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s cubic-bezier(.22,1,.36,1)',
                }}
              >
                <p
                  style={{
                    padding: '0 24px 20px',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#7A7264',
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
