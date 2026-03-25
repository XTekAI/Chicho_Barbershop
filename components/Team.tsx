'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '@/lib/team-data';

export default function Team() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        const reveals = sectionRef.current?.querySelectorAll('.reveal');
        reveals?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="team" ref={sectionRef} className="section-padding" style={{ background: 'var(--charcoal)' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">Our Professionals</span>
                    <h2 className="section-title">MEET THE TEAM</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                        Every professional has their specialty. Find the perfect match for the look you want.
                    </p>
                </div>

                {/* Team grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem',
                    }}
                    className="team-grid"
                >
                    {teamMembers.map((member, i) => (
                        <div
                            key={member.slug}
                            className="reveal"
                            style={{
                                background: 'var(--card)',
                                border: '1.5px solid var(--border)',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                transitionDelay: `${i * 0.06}s`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = member.accent + '80';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${member.accent}15`;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            }}
                        >
                            {/* Top accent bar */}
                            <div style={{ height: '4px', background: `linear-gradient(90deg, ${member.accent}, ${member.accent}40)` }} />

                            <div style={{ padding: '1.75rem 1.5rem' }}>
                                {/* Avatar + Name */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '56px', height: '56px', borderRadius: '14px',
                                        background: `linear-gradient(135deg, ${member.accent}25, ${member.accent}08)`,
                                        border: `1px solid ${member.accent}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: '1.6rem', color: member.accent,
                                        flexShrink: 0, overflow: 'hidden', position: 'relative',
                                    }}>
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="56px"
                                                style={{ objectFit: 'cover', objectPosition: member.imagePosition ?? 'center' }}
                                            />
                                        ) : (
                                            member.initial
                                        )}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: '1.5rem', letterSpacing: '0.04em',
                                            color: 'white', lineHeight: 1.1,
                                        }}>
                                            {member.name}
                                        </h3>
                                        <span style={{ color: '#555', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            {member.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Specialty badge */}
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    background: `${member.accent}12`,
                                    border: `1px solid ${member.accent}25`,
                                    borderRadius: '100px',
                                    padding: '0.3rem 0.85rem',
                                    marginBottom: '1rem',
                                }}>
                                    {member.role === 'Nail Specialist' ? (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill={member.accent}>
                                            <path d="M9.5 3C7.56 3 5.85 4.24 5.23 6.08C3.36 6.44 2 8.09 2 10c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4 0-1.91-1.36-3.56-3.23-3.92C18.15 4.24 16.44 3 14.5 3c-1.22 0-2.31.5-3.11 1.3A4.484 4.484 0 008.28 3H9.5zM6 20h12v2H6v-2z" />
                                        </svg>
                                    ) : (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill={member.accent}>
                                            <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                                        </svg>
                                    )}
                                    <span style={{ color: member.accent, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                                        {member.specialty}
                                    </span>
                                </div>

                                {/* Short bio */}
                                <p style={{ color: '#888', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1.5rem', minHeight: '2.7em' }}>
                                    {member.shortBio}
                                </p>

                                {/* View Profile button */}
                                <Link
                                    href={`/team/${member.slug}`}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '8px',
                                        background: 'transparent',
                                        border: `1.5px solid ${member.accent}`,
                                        color: member.accent,
                                        fontWeight: 700,
                                        fontSize: '0.78rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = member.accent;
                                        (e.currentTarget as HTMLElement).style.color = '#0a0a0a';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                        (e.currentTarget as HTMLElement).style.color = member.accent;
                                    }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 540px) {
                    .team-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
