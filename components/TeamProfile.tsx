'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { TeamMember } from '@/lib/team-data';

export default function TeamProfile({ member }: { member: TeamMember }) {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        const reveals = mainRef.current?.querySelectorAll('.reveal');
        reveals?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const isNailSpecialist = member.role === 'Nail Specialist';

    return (
        <div ref={mainRef} style={{ background: 'var(--black)', minHeight: '100vh' }}>
            {/* Navigation bar */}
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--border)',
                padding: '1rem 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                <Link href="/" style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none',
                }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect x="10" y="2" width="4" height="20" rx="2" fill="#00FF2A" opacity="0.2" />
                        <path d="M10 2C10 2 14 6 14 12C14 18 10 22 10 22C8.89543 22 8 21.1046 8 20V4C8 2.89543 8.89543 2 10 2Z" fill="#00FF2A" opacity="0.5" />
                        <path d="M14 2C15.1046 2 16 2.89543 16 4V20C16 21.1046 15.1046 22 14 22C14 22 10 18 10 12C10 6 14 2 14 2Z" fill="#00FF2A" />
                        <rect x="8" y="1" width="8" height="3" rx="1.5" fill="#888" />
                        <rect x="8" y="20" width="8" height="3" rx="1.5" fill="#888" />
                    </svg>
                    <span style={{
                        fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem',
                        letterSpacing: '0.08em', color: 'white',
                    }}>
                        CHICHO <span style={{ color: '#00FF2A' }}>BARBERSHOP</span>
                    </span>
                </Link>
                <Link href="/#team" style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    color: 'var(--muted)', textDecoration: 'none', fontSize: '0.85rem',
                    fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
                    transition: 'color 0.2s ease',
                }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#00FF2A')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                    Back to Team
                </Link>
            </nav>

            {/* SECTION 1 — Profile Intro */}
            <section className="section-padding" style={{ paddingTop: '8rem', background: 'var(--black)' }}>
                <div className="container-max">
                    <div className="reveal" style={{
                        display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap',
                    }}>
                        {/* Large avatar */}
                        <div style={{
                            width: '160px', height: '160px', borderRadius: '20px',
                            background: `linear-gradient(135deg, ${member.accent}30, ${member.accent}08)`,
                            border: `2px solid ${member.accent}40`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: '4.5rem', color: member.accent, flexShrink: 0,
                            overflow: 'hidden', position: 'relative',
                        }}>
                            {member.image ? (
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="160px"
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            ) : (
                                member.initial
                            )}
                        </div>

                        <div style={{ flex: 1, minWidth: '250px' }}>
                            <span style={{
                                display: 'inline-block', fontSize: '0.75rem', fontWeight: 700,
                                letterSpacing: '0.15em', textTransform: 'uppercase',
                                color: member.accent, marginBottom: '0.5rem',
                            }}>
                                {member.role}
                            </span>
                            <h1 style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                lineHeight: 1, color: 'white', marginBottom: '1rem',
                            }}>
                                {member.name}
                            </h1>

                            {/* Specialty badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: `${member.accent}12`,
                                border: `1px solid ${member.accent}25`,
                                borderRadius: '100px',
                                padding: '0.4rem 1rem',
                                marginBottom: '1.5rem',
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill={member.accent}>
                                    <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                                </svg>
                                <span style={{ color: member.accent, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                                    {member.specialty}
                                </span>
                            </div>

                            <p style={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '2rem' }}>
                                {member.shortBio}
                            </p>

                            <a href={member.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                                </svg>
                                Book with {member.name}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — About */}
            <section className="section-padding" style={{ background: 'var(--charcoal)' }}>
                <div className="container-max">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-label">Get to Know</span>
                        <h2 className="section-title">ABOUT {member.name.toUpperCase()}</h2>
                        <div className="divider-line" style={{ margin: '0 auto' }} />
                    </div>

                    <div className="reveal profile-about-grid" style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr',
                        gap: '1.5rem',
                    }}>
                        {[
                            { label: 'Background', text: member.fullBio, icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
                            { label: 'Experience', text: member.experience, icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' },
                            { label: 'Approach', text: member.approach, icon: 'M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z' },
                            { label: 'Personality', text: member.personality, icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z' },
                        ].map((item) => (
                            <div key={item.label} style={{
                                background: 'var(--card)', border: '1px solid var(--border)',
                                borderRadius: '14px', padding: '1.75rem',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '8px',
                                        background: `${member.accent}15`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={member.accent}>
                                            <path d={item.icon} />
                                        </svg>
                                    </div>
                                    <h3 style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: '1.3rem', color: 'white', letterSpacing: '0.04em',
                                    }}>
                                        {item.label}
                                    </h3>
                                </div>
                                <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3 — Specialties */}
            <section className="section-padding" style={{ background: 'var(--black)' }}>
                <div className="container-max">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-label">What {isNailSpecialist ? 'She' : 'They'} Do Best</span>
                        <h2 className="section-title">SPECIALTIES</h2>
                        <div className="divider-line" style={{ margin: '0 auto' }} />
                    </div>

                    <div className="reveal" style={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                        gap: '1rem', maxWidth: '700px', margin: '0 auto',
                    }}>
                        {member.specialties.map((spec) => (
                            <div key={spec} style={{
                                background: 'var(--card)',
                                border: `1px solid ${member.accent}30`,
                                borderRadius: '10px',
                                padding: '1rem 1.5rem',
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                transition: 'all 0.2s ease',
                            }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = member.accent;
                                    (e.currentTarget as HTMLElement).style.background = `${member.accent}10`;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${member.accent}30`;
                                    (e.currentTarget as HTMLElement).style.background = 'var(--card)';
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill={member.accent}>
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                                <span style={{
                                    color: 'var(--text)', fontSize: '0.9rem', fontWeight: 600,
                                    letterSpacing: '0.03em',
                                }}>
                                    {spec}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — Work Gallery */}
            <section className="section-padding" style={{ background: 'var(--charcoal)', overflow: 'hidden' }}>
                <div className="container-max">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-label">Portfolio</span>
                        <h2 className="section-title">{member.name.toUpperCase()}&apos;S WORK</h2>
                        <div className="divider-line" style={{ margin: '0 auto' }} />
                    </div>
                </div>

                {/* Infinite scroll gallery — real photos or animated placeholders */}
                <div style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                    overflow: 'hidden',
                }}>
                    <div className="gallery-scroll-track" style={{ display: 'flex', gap: '1rem', width: 'max-content' }}>
                        {(() => {
                            const items = member.workPhotos && member.workPhotos.length > 0
                                ? [...member.workPhotos, ...member.workPhotos]
                                : Array.from({ length: 16 }, (_, i) => i);
                            return items.map((item, i) => (
                                <div key={i} className="gallery-scroll-item" style={{
                                    flexShrink: 0, width: '280px', height: '280px',
                                    borderRadius: '14px', overflow: 'hidden',
                                    border: `1px solid ${member.accent}25`,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                                    transition: 'transform 0.3s ease, filter 0.3s ease',
                                    background: typeof item === 'string'
                                        ? undefined
                                        : `linear-gradient(135deg, ${member.accent}${i % 2 === 0 ? '18' : '0a'}, #111)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexDirection: 'column', gap: '0.75rem',
                                }}>
                                    {typeof item === 'string' ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={item}
                                            alt={`${member.name} work`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <>
                                            <svg width="36" height="36" viewBox="0 0 24 24" fill={`${member.accent}50`}>
                                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                            </svg>
                                            <span style={{ color: `${member.accent}80`, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                                Coming Soon
                                            </span>
                                        </>
                                    )}
                                </div>
                            ));
                        })()}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scroll-right {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .gallery-scroll-track {
                        animation: scroll-right 25s linear infinite;
                    }
                    .gallery-scroll-track:hover {
                        animation-play-state: paused;
                    }
                    .gallery-scroll-item:hover {
                        transform: scale(1.04);
                        filter: brightness(1.1);
                    }
                `}</style>
            </section>

            {/* SECTION 5 — Social Media */}
            {member.socialLinks.length > 0 && (
                <section className="section-padding" style={{ background: 'var(--black)', paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <div className="container-max">
                        <div className="reveal" style={{ textAlign: 'center' }}>
                            <span className="section-label">Follow Chicho Barbershop</span>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                                {member.socialLinks.map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.platform}
                                        style={{
                                            width: '52px', height: '52px', borderRadius: '12px',
                                            background: 'var(--card)', border: '1px solid var(--border)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            transition: 'all 0.2s ease', textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.borderColor = member.accent;
                                            (e.currentTarget as HTMLElement).style.background = `${member.accent}15`;
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                                            (e.currentTarget as HTMLElement).style.background = 'var(--card)';
                                        }}
                                    >
                                        {link.platform === 'Instagram' && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill={member.accent}>
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        )}
                                        {link.platform === 'Facebook' && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill={member.accent}>
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* SECTION 6 — Booking CTA */}
            <section className="section-padding" style={{
                background: `linear-gradient(180deg, var(--charcoal), var(--black))`,
                textAlign: 'center',
            }}>
                <div className="container-max">
                    <div className="reveal">
                        <span className="section-label">Ready?</span>
                        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                            BOOK WITH {member.name.toUpperCase()}
                        </h2>
                        <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                            {isNailSpecialist
                                ? `Get your nails done by ${member.name}. Call now to schedule your appointment.`
                                : `Ready for a fresh cut? Book your appointment with ${member.name} today.`
                            }
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href={member.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.9rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                Book with {member.name}
                            </a>
                            <Link href="/#team" className="btn-outline" style={{ fontSize: '0.9rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                                </svg>
                                View All Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
