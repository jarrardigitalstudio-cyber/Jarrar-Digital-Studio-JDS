"use client";

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/lib/types';
import { SAMPLE_PROJECTS } from '@/lib/constants';

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({ projects = SAMPLE_PROJECTS }: ProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section
      data-screen-label="Portfolio"
      id="portfolio"
      style={{ padding: '100px 24px' }}
      className="transition-all duration-700"
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto 20px',
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
          Selected Work
        </span>
        <h2
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(28px,4vw,42px)',
            color: '#1A1710',
            margin: 0,
          }}
        >
          Early studio projects.
        </h2>
      </div>

      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {projects.map((proj, idx) => (
          <div
            key={proj.id || idx}
            style={{
              maxWidth: '640px',
              margin: idx === 0 ? '0 auto' : '0 auto',
              background: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(26,23,16,0.06)',
              border: '1px solid rgba(26,23,16,0.06)',
              width: '100%',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '370px', background: '#FBF8F2', overflow: 'hidden' }}>
              <img
                src={proj.image}
                alt={proj.imageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  background: '#FBF8F2',
                  display: 'block',
                }}
              />
            </div>
            <div
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <span
                style={{
                  alignSelf: 'flex-start',
                  background: '#F3EEE2',
                  color: '#7C5F16',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: '999px',
                }}
              >
                {proj.badge}
              </span>
              <h3
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#1A1710',
                  margin: 0,
                }}
              >
                {proj.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#7A7264',
                  margin: 0,
                }}
              >
                {proj.description}
              </p>
              <a
                href={proj.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#9C7A22',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  marginTop: '4px',
                }}
                className="hover:underline transition-all"
              >
                {proj.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
