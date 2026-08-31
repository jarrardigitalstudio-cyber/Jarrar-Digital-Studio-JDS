"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FrictionCard {
  id: string;
  badgeIcon: string;
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
    badgeIcon: '🏠',
    badgeLabel: 'Home Seller',
    headline: 'Orders arrive in DMs. Details live in a notebook.',
    frictionLabel: 'Everyday friction',
    solutionPill: 'One catalogue, one checkout',
    image: '/images/friction/home-seller.jpg',
    imageAlt: 'A home business owner checking orders on her phone, surrounded by packed boxes',
  },
  {
    id: 'local-service',
    badgeIcon: '💇',
    badgeLabel: 'Local Service',
    headline: 'The phone rings while the customer is in the chair.',
    frictionLabel: 'Everyday friction',
    solutionPill: 'Bookings that answer themselves',
    image: '/images/friction/local-service.jpg',
    imageAlt: 'A salon or clinic owner checking her phone at the reception desk',
  },
  {
    id: 'restaurant-owner',
    badgeIcon: '🍽️',
    badgeLabel: 'Restaurant Owner',
    headline: 'Orders come from five different numbers.',
    frictionLabel: 'Everyday friction',
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
      style={{ padding: '90px 24px', backgroundColor: '#FBF8F2' }}
      className="overflow-hidden"
    >
      {/* Section heading */}
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
          Every Business Has the Same Everyday Friction
        </h2>
        <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#7A7264', margin: 0, maxWidth: '620px' }}>
          See yourself in one of these? You&rsquo;re not alone.
        </p>
      </div>

      {/* 3 columns on desktop, 1 column on mobile */}
      <div
        style={{ maxWidth: '1160px', margin: '0 auto' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {FRICTION_CARDS.map((card) => (
          <article
            key={card.id}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#1A1710',
              position: 'relative',
              aspectRatio: '3 / 4',
              boxShadow: '0 12px 32px rgba(26,23,16,0.10)',
            }}
            className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(26,23,16,0.20)]"
          >
            {/* Base layer — photo */}
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              className="transition duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, #1A1710 0%, rgba(26,23,16,0.85) 25%, rgba(26,23,16,0.45) 45%, rgba(26,23,16,0) 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Badge — top left */}
            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                zIndex: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(26,23,16,0.55)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '7px 14px',
                borderRadius: '999px',
                color: '#FBF8F2',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              <span aria-hidden="true">{card.badgeIcon}</span>
              <span>{card.badgeLabel}</span>
            </div>

            {/* Text zone — bottom */}
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
              }}
            >
              <h3
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: 1.3,
                  color: '#FBF8F2',
                  margin: 0,
                }}
              >
                {card.headline}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    color: 'rgba(251,248,242,0.75)',
                    fontSize: '12px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.frictionLabel} &rarr;
                </span>

                <span
                  style={{
                    background: 'linear-gradient(135deg,#9C7A22,#B8912F)',
                    color: '#FFFFFF',
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

      {/* CTA */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
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
