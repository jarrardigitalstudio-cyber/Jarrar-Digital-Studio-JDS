"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FrictionCard {
  id: string;
  badge: string;
  headline: string;
  frictionLabel: string;
  solutionPill: string;
  image: string;
  imageAlt: string;
}

const FRICTION_CARDS: FrictionCard[] = [
  {
    id: 'home-seller',
    badge: '🏠  Home Seller',
    headline: 'Orders come by call and WhatsApp. Nothing is written down properly.',
    frictionLabel: 'Everyday friction  →',
    solutionPill: 'One catalogue, one checkout',
    image: '/images/friction/home-seller.jpg',
    imageAlt: 'A home business owner checking orders on her phone surrounded by packed boxes',
  },
  {
    id: 'local-service',
    badge: '💇  Local Service',
    headline: 'The phone rings while a customer is in the chair.',
    frictionLabel: 'Everyday friction  →',
    solutionPill: 'Bookings that answer themselves',
    image: '/images/friction/local-service.jpg',
    imageAlt: 'A salon or clinic owner checking her phone at the reception desk',
  },
  {
    id: 'restaurant-owner',
    badge: '🍽️  Restaurant Owner',
    headline: 'Orders come from five different numbers.',
    frictionLabel: 'Everyday friction  →',
    solutionPill: 'One menu, always up to date',
    image: '/images/friction/restaurant-owner.jpg',
    imageAlt: 'A restaurant owner checking his phone at the counter during a busy service',
  },
];

export default function EverydayFriction() {
  return (
    <section
      data-screen-label="Everyday Friction"
      id="friction"
      style={{
        padding: '100px 24px',
        backgroundColor: '#FBF8F2',
      }}
      className="transition-all duration-700"
    >
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto 56px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A1710',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Every Business Has the Same Everyday Friction
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#7A7264',
            margin: 0,
          }}
        >
          See yourself in one of these? You're not alone.
        </p>
      </div>

      {/* 3-Column Grid on Desktop, 1-Column on Mobile */}
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {FRICTION_CARDS.map((card) => (
          <div
            key={card.id}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#1A1710',
              position: 'relative',
              boxShadow: '0 12px 32px rgba(26,23,16,0.10)',
              border: '1px solid rgba(26,23,16,0.08)',
              minHeight: '460px',
              aspectRatio: '3 / 4',
            }}
            className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(26,23,16,0.18)]"
          >
            {/* Background Photo */}
            <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Gradient Overlay for legibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(26,23,16,0.95) 0%, rgba(26,23,16,0.6) 35%, rgba(26,23,16,0) 65%)',
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
                gap: '6px',
                background: 'rgba(26,23,16,0.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '999px',
                color: '#FBF8F2',
                fontSize: '13px',
                fontWeight: 500,
                border: '1px solid rgba(251,248,242,0.15)',
              }}
            >
              <span>{card.badge}</span>
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
                gap: '14px',
                width: '100%',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: 1.35,
                  color: '#FBF8F2',
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
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    color: '#D8D2C4',
                    fontSize: '13px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.frictionLabel}
                </span>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #9C7A22, #B8912F)',
                    color: '#FFFFFF',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(156,122,34,0.25)',
                  }}
                >
                  {card.solutionPill}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div
        style={{
          marginTop: '48px',
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
      </div>
    </section>
  );
}
