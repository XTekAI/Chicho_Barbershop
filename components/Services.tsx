'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const services = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
                <path d="M12 3v12M8 21h8M12 15v6" />
            </svg>
        ),
        name: 'Classic Haircut',
        desc: 'Precision cut tailored to your face shape and style preferences.',
        price: '$25',
        img: '/haircut.png',
        alt: 'Barber giving a classic haircut to a client at Chicho Barbershop',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 3H5a2 2 0 00-2 2v4a10 10 0 0014 9 10 10 0 0014-9V5a2 2 0 00-2-2h-4" />
                <path d="M9 3a6 6 0 006 6" />
            </svg>
        ),
        name: 'Beard Trim & Shape',
        desc: 'Expert beard sculpting, lining and hot towel finishing.',
        price: '$20',
        img: '/beard.png',
        alt: 'Professional beard trimming and shaping service at Chicho Barbershop',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="5" r="3" />
                <path d="M12 8v8M8 14l4 4 4-4" />
                <path d="M5 19h14" />
            </svg>
        ),
        name: 'Fade & Taper',
        desc: 'Clean skin fade or taper — low, mid or high, perfectly blended.',
        price: '$30',
        img: '/fade.png',
        alt: 'Clean fade haircut blended with precision at Chicho Barbershop',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        name: 'Hot Towel Shave',
        desc: 'Traditional straight razor shave with hot towel and skin treatment.',
        price: '$35',
        img: '/shave.png',
        alt: 'Hot towel straight razor shave service at Chicho Barbershop',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
        ),
        name: 'Kids Haircut',
        desc: 'Friendly haircuts for boys under 12. Fun and stress-free.',
        price: '$18',
        img: '/kids.png',
        alt: 'Kid getting a fun haircut at Chicho Barbershop in Trenton NJ',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
            </svg>
        ),
        name: 'Full Package',
        desc: 'Haircut + beard trim + hot towel shave — the complete experience.',
        price: '$65',
        img: '/package.png',
        alt: 'Full grooming package including haircut beard trim and shave at Chicho Barbershop',
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const reveals = sectionRef.current?.querySelectorAll('.reveal');
        reveals?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="section-padding" style={{ background: 'var(--charcoal)' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">What We Offer</span>
                    <h2 className="section-title">OUR SERVICES</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                        Every service is crafted with precision, care and premium products.
                        Walk in, leave looking your absolute best.
                    </p>
                </div>

                {/* Grid */}
                <div
                    className="services-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.25rem',
                    }}
                >
                    {services.map((service, i) => (
                        <div
                            key={service.name}
                            className="reveal card-bg"
                            style={{
                                overflow: 'hidden',
                                transition: 'border-color 0.3s ease, transform 0.3s ease',
                                transitionDelay: `${i * 0.07}s`,
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#ADFF2F';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                <Image
                                    src={service.img}
                                    alt={service.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,1) 0%, transparent 50%)' }} />
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                    <div style={{ background: 'rgba(173,255,47,0.08)', borderRadius: '8px', padding: '0.6rem' }}>
                                        {service.icon}
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: '1.7rem',
                                            color: '#ADFF2F',
                                            lineHeight: 1,
                                        }}
                                    >
                                        {service.price}
                                    </span>
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: '1.3rem',
                                        letterSpacing: '0.04em',
                                        color: 'white',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    {service.name}
                                </h3>
                                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 540px) {
                    .services-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
