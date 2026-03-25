'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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

    const values = [
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ADFF2F">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
            ),
            title: 'Quality First',
            text: 'We use only premium products and tools for every single client.',
        },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ADFF2F">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
            ),
            title: 'Expert Barbers',
            text: 'Licensed professionals with years of training and passion for the craft.',
        },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ADFF2F">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            ),
            title: 'Community Roots',
            text: 'Proudly serving Trenton, NJ since day one. Our community is our family.',
        },
    ];

    return (
        <section id="about" ref={sectionRef} className="section-padding" style={{ background: 'var(--charcoal)', overflow: 'hidden' }}>
            <div className="container-max">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '5rem',
                        alignItems: 'center',
                    }}
                    className="about-grid"
                >
                    {/* Left — Visual */}
                    <div className="reveal" style={{ position: 'relative' }}>
                        {/* Main card */}
                        <div
                            style={{
                                borderRadius: '16px',
                                border: '1px solid #2a2a2a',
                                minHeight: '320px',
                                height: 'auto',
                                aspectRatio: '3/4',
                                maxHeight: '460px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/business.jpg"
                                alt="Chicho Barbershop exterior"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center 30%',
                                    display: 'block',
                                }}
                            />
                            {/* Subtle bottom gradient overlay */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                height: '80px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                            }} />
                        </div>

                        {/* Floating badge */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-1rem',
                                right: '1rem',
                                background: '#ADFF2F',
                                color: '#0a0a0a',
                                borderRadius: '12px',
                                padding: '1.25rem 1.5rem',
                                textAlign: 'center',
                                boxShadow: '0 8px 32px rgba(173,255,47,0.3)',
                            }}
                        >
                            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', lineHeight: 1 }}>4.3★</div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Google Rating</div>
                        </div>
                    </div>

                    {/* Right — Text */}
                    <div>
                        <div className="reveal">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">ABOUT CHICHO BARBERSHOP</h2>
                            <div className="divider-line" />
                        </div>

                        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                            <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                Located at <strong style={{ color: 'white' }}>869 E State St, Trenton, NJ</strong>, Chicho Barbershop LLC
                                is more than just a haircut — it&rsquo;s an experience. We blend old-school craft
                                with modern style to deliver premium grooming services to every client who walks
                                through our doors.
                            </p>
                            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                From classic fades to hot towel shaves, every service is executed with precision,
                                care, and the finest tools in the trade. We&rsquo;re proud to serve our community in
                                Trenton and beyond.
                            </p>
                        </div>

                        {/* Values */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {values.map((v, i) => (
                                <div
                                    key={v.title}
                                    className="reveal"
                                    style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'flex-start',
                                        background: 'rgba(173,255,47,0.04)',
                                        border: '1px solid #2a2a2a',
                                        borderRadius: '10px',
                                        padding: '1rem 1.25rem',
                                        transitionDelay: `${0.2 + i * 0.1}s`,
                                    }}
                                >
                                    <div style={{ background: 'rgba(173,255,47,0.1)', borderRadius: '8px', padding: '0.5rem', flexShrink: 0 }}>
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '0.2rem' }}>{v.title}</h4>
                                        <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.5 }}>{v.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
        </section>
    );
}
