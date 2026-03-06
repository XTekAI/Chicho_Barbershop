'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background image */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src="/hero.png"
                    alt="Chicho Barbershop interior"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Dark gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(105deg, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.55) 100%)',
                    }}
                />
                {/* Green accent glow bottom */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '20%',
                        width: '60%',
                        height: '40%',
                        background: 'radial-gradient(ellipse, rgba(173,255,47,0.08) 0%, transparent 70%)',
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="container-max"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '0 1.5rem',
                    paddingTop: '7rem',
                    paddingBottom: '4rem',
                }}
            >
                {/* Badge */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(173,255,47,0.1)',
                        border: '1px solid rgba(173,255,47,0.3)',
                        borderRadius: '100px',
                        padding: '0.35rem 1rem',
                        marginBottom: '2rem',
                        animation: 'fadeInUp 0.6s ease forwards',
                    }}
                >
                    {/* Star icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#ADFF2F" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span style={{ color: '#ADFF2F', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Rated 4.3★ on Google · Trenton, NJ
                    </span>
                </div>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                        lineHeight: 0.95,
                        color: 'white',
                        marginBottom: '1.5rem',
                        animation: 'fadeInUp 0.7s ease 0.1s both',
                        maxWidth: '650px',
                    }}
                >
                    LOOK SHARP.{' '}
                    <span style={{ color: '#ADFF2F' }}>FEEL</span>
                    {' '}CONFIDENT.
                </h1>

                {/* Subheadline */}
                <p
                    style={{
                        color: '#aaa',
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        maxWidth: '520px',
                        lineHeight: 1.7,
                        marginBottom: '2.5rem',
                        animation: 'fadeInUp 0.7s ease 0.2s both',
                    }}
                >
                    Premium haircuts, fades, beard trims & hot towel shaves at
                    Chicho Barbershop LLC. Walk-ins welcome — your best look is
                    one visit away.
                </p>

                {/* CTA Buttons */}
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        animation: 'fadeInUp 0.7s ease 0.3s both',
                    }}
                >
                    <a href="#contact" className="btn-primary glow-pulse">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                        </svg>
                        Book Appointment
                    </a>
                    <a href="#services" className="btn-outline">
                        View Services
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                    </a>
                </div>

                {/* Stats bar */}
                <div
                    className="hero-stats"
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        marginTop: '3rem',
                        flexWrap: 'wrap',
                        animation: 'fadeInUp 0.7s ease 0.4s both',
                    }}
                >
                    {[
                        { value: '4.3★', label: 'Google Rating' },
                        { value: '10+', label: 'Years Experience' },
                        { value: '5K+', label: 'Happy Clients' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div
                                style={{
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: '2.2rem',
                                    color: '#ADFF2F',
                                    lineHeight: 1,
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ color: '#666', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    animation: 'fadeInUp 1s ease 0.8s both',
                }}
            >
                <span style={{ color: '#555', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
                <div
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, #ADFF2F, transparent)',
                        animation: 'fadeInUp 1.5s ease infinite',
                    }}
                />
            </div>

            <style jsx>{`
                @media (max-width: 480px) {
                    .hero-stats { gap: 1.5rem !important; }
                }
            `}</style>
        </section>
    );
}
