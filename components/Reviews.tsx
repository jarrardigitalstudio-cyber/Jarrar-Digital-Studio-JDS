"use client";

import React from 'react';
import Link from 'next/link';
import { ReviewItem } from '@/lib/types';

interface ReviewsProps {
  reviews?: ReviewItem[];
  showComingSoon?: boolean;
}

export default function Reviews({ reviews = [], showComingSoon = true }: ReviewsProps) {
  if (!reviews || (reviews.length === 0 && !showComingSoon)) {
    return null;
  }

  return (
    <section
      data-screen-label="Reviews"
      id="reviews"
      style={{
        background: '#F3EEE2',
        padding: '100px 24px',
      }}
      className="transition-all duration-700"
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto 48px',
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
          Client Reviews
        </span>
      </div>

      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1.5px dashed rgba(26,23,16,0.18)',
          borderRadius: '24px',
          padding: '56px 40px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '14px', height: '18px', borderRadius: '0 8px 8px 8px', background: '#F3EEE2' }}></div>
          <div style={{ width: '14px', height: '18px', borderRadius: '0 8px 8px 8px', background: '#F3EEE2' }}></div>
        </div>
        <h3
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: '#1A1710',
            margin: 0,
          }}
        >
          Reviews are on the way.
        </h3>
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: '#7A7264',
            maxWidth: '420px',
            margin: 0,
          }}
        >
          Jarrar Digital Studio just opened its doors — every one of the first clients will be featured here first.
        </p>
        <Link
          href="#order"
          style={{
            color: '#9C7A22',
            fontWeight: 600,
            fontSize: '15px',
            textDecoration: 'none',
          }}
          className="hover:underline transition-all"
        >
          Want to be one of them? Start your project →
        </Link>
      </div>
    </section>
  );
}
