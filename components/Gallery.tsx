'use client';

import { useEffect, useRef } from 'react';

const galleryItems = [
    {
        label: 'High Fade',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.2" opacity="0.6">
                <path d="M6 9l6 6 6-6" /><path d="M12 3v12M8 21h8" />
            </svg>
        ),
    },
    {
        label: 'Skin Fade',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.2" opacity="0.6">
                <circle cx="12" cy="5" r="3" /><path d="M12 8v8M8 14l4 4 4-4M5 19h14" />
            </svg>
        ),
    },
    {
        label: 'Classic Pompadour',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#ADFF2F" opacity="0.5">
                <path d="M9.64 7.64A3.5 3.5 0 1 0 5.5 11 3.48 3.48 0 0 0 8 10.15L9.17 11.3l-7.13 7.14 1.41 1.41L10.58 12.7 12 11.28l9.17 9.17 1.41-1.41-9.6-9.6A3.48 3.48 0 0 0 13 6.5a3.5 3.5 0 0 0-3.36 1.14zM5.5 9A1.5 1.5 0 1 1 7 10.5 1.5 1.5 0 0 1 5.5 9zm13 5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 18.5 14zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" />
            </svg>
        ),
    },
    {
        label: 'Beard Sculpt',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.2" opacity="0.6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        label: 'Crew Cut',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.2" opacity="0.6">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
        ),
    },
    {
        label: 'Textured Crop',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.2" opacity="0.6">
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
            </svg>
        ),
    },
];

export default function Gallery() {
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
        <section id="gallery" ref={sectionRef} className="section-padding" style={{ background: 'var(--black)' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">Our Work</span>
                    <h2 className="section-title">THE GALLERY</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                        Every cut tells a story. Browse some of our finest work and
                        find your next style.
                    </p>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                    }}
                    className="gallery-grid"
                >
                    {galleryItems.map((item, i) => {
                        return (
                            <div
                                key={item.label}
                                className="reveal"
                                style={{
                                    position: 'relative',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    height: '260px',
                                    background: '#111',
                                    border: '1px solid #2a2a2a',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                                    transitionDelay: `${i * 0.06}s`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = '#ADFF2F';
                                    el.style.transform = 'scale(1.02)';
                                    const label = el.querySelector('.gallery-label') as HTMLElement;
                                    if (label) label.style.opacity = '1';
                                    const overlay = el.querySelector('.gallery-overlay') as HTMLElement;
                                    if (overlay) overlay.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = '#2a2a2a';
                                    el.style.transform = 'scale(1)';
                                    const label = el.querySelector('.gallery-label') as HTMLElement;
                                    if (label) label.style.opacity = '0';
                                    const overlay = el.querySelector('.gallery-overlay') as HTMLElement;
                                    if (overlay) overlay.style.opacity = '0';
                                }}
                            >
                                {/* Diagonal stripes background pattern */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    backgroundImage: `repeating-linear-gradient(
                                        45deg,
                                        transparent,
                                        transparent 20px,
                                        rgba(173,255,47,0.03) 20px,
                                        rgba(173,255,47,0.03) 21px
                                    )`,
                                }} />

                                {/* Radial glow */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'radial-gradient(circle at 50% 50%, rgba(173,255,47,0.06) 0%, transparent 70%)',
                                }} />

                                {/* Center icon */}
                                {item.icon}

                                {/* Hover green overlay */}
                                <div
                                    className="gallery-overlay"
                                    style={{
                                        position: 'absolute', inset: 0,
                                        background: 'radial-gradient(circle at 50% 50%, rgba(173,255,47,0.1) 0%, transparent 70%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                />

                                {/* Label on hover */}
                                <div
                                    className="gallery-label"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0, left: 0, right: 0,
                                        padding: '1.25rem',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    <span style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.1em',
                                        color: 'white',
                                    }}>
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .gallery-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (max-width: 480px) {
                        .gallery-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
