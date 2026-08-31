"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FrictionCard {
  id: string;
  badgeIcon: React.ReactNode;
  badgeLabel: string;
  headline: string;
  frictionLabel: string;
  solutionPill: string;
  image: string;
  imageAlt: string;
}

const FRICTION_CARDS: FrictionCard[] = [
  {
    id: 'home-seller',
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 10a4 4 0 0 1-8 0"></path>
        <path d="M3.103 6.034h17.794"></path>
        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
      </svg>
    ),
    badgeLabel: 'Home seller',
    headline: 'Orders arrive in DMs. Details live in a notebook.',
    frictionLabel: 'Everyday friction',
    solutionPill: 'Catalogue + cleaner checkout',
    image: '/images/friction/home-bakery.webp',
    imageAlt: 'Indian home bakery owner managing phone orders beside cakes and handwritten notes',
  },
  {
    id: 'local-service',
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 14v2.2l1.6 1"></path>
        <path d="M16 2v4"></path>
        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
        <path d="M3 10h5"></path>
        <path d="M8 2v4"></path>
        <circle cx="16" cy="16" r="6"></circle>
      </svg>
    ),
    badgeLabel: 'Local service',
    headline: 'The phone rings while the customer is in the chair.',
    frictionLabel: 'Everyday friction',
    solutionPill: 'Live slots + reminders',
    image: '/images/friction/salon-owner.webp',
    imageAlt: 'Indian salon owner checking appointment messages beside a paper diary',
  },
  {
    id: 'coach-creator',
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V7"></path>
        <path d="m16 12 2 2 4-4"></path>
        <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path>
      </svg>
    ),
    badgeLabel: 'Coach or creator',
    headline: 'Lessons, links and updates are scattered everywhere.',
    frictionLabel: 'Everyday friction',
    solutionPill: 'One student home',
    image: '/images/friction/coach-creator.webp',
    imageAlt: 'Indian coach organising student messages, lessons and notes at a home desk',
  },
];

export default function EverydayFriction() {
  return (
    <section
      data-screen-label="Everyday Friction"
      id="friction"
      style={{
        padding: '90px 24px',
        backgroundColor: '#FBF8F2',
      }}
      className="transition-all duration-700"
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto 48px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            border: '1px solid rgba(26,23,16,0.10)',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#9C7A22',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>
          Built for real working days
        </span>

        <h2
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: '#1A1710',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Does your business day look anything like this?
        </h2>
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#7A7264',
            margin: 0,
            maxWidth: '620px',
          }}
        >
          An app becomes valuable when it removes a familiar daily mess—not when it adds another complicated tool.
        </p>
      </div>

      {/* 3-Column Grid on Desktop, Horizontal Scroll/Stack on Mobile */}
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {FRICTION_CARDS.map((card) => (
          <article
            key={card.id}
            style={{
              borderRadius: '28px',
              overflow: 'hidden',
              backgroundColor: '#14121F',
              position: 'relative',
              boxShadow: '0 16px 36px rgba(26,23,16,0.12)',
              minHeight: '480px',
              height: '480px',
            }}
            className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(26,23,16,0.20)]"
          >
            {/* Background Photo */}
            <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Gradient Overlay for crystal clear bottom text readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(15,11,24,0.96) 0%, rgba(15,11,24,0.65) 36%, rgba(15,11,24,0.10) 65%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* Top-Left Category Badge */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                zIndex: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 0, 0, 0.40)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '7px 14px',
                borderRadius: '999px',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              {card.badgeIcon}
              <span>{card.badgeLabel}</span>
            </div>

            {/* Bottom Content Block */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: 1.3,
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {card.headline}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.70)',
                    fontSize: '12px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.frictionLabel}
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>

                <span
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#14121F',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  {card.solutionPill}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Summary Row */}
      <div
        style={{
          maxWidth: '840px',
          margin: '32px auto 0',
          background: '#FFFFFF',
          border: '1px solid rgba(26,23,16,0.08)',
          borderRadius: '16px',
          padding: '14px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          fontSize: '14px',
          color: '#7A7264',
          textAlign: 'center',
          boxShadow: '0 2px 6px rgba(26,23,16,0.04)',
        }}
      >
        <span style={{ fontWeight: 700, color: '#1A1710' }}>Same business.</span>
        <span>Less chasing.</span>
        <span style={{ color: '#9C7A22', fontWeight: 700 }}>→</span>
        <span>Clearer customer action.</span>
        <span style={{ color: '#9C7A22', fontWeight: 700 }}>→</span>
        <span>More reasons to return.</span>
      </div>

      {/* Bottom CTA Button */}
      <div
        style={{
          marginTop: '36px',
          textAlign: 'center',
        }}
      >
        <Link
          href="#order"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
            color: '#FFFFFF',
            padding: '16px 36px',
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
      </div>
    </section>
  );
}
