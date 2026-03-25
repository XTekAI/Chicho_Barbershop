'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const BOOKING_URL = 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so';

const services = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
                <path d="M12 3v12M8 21h8M12 15v6" />
            </svg>
        ),
        name: 'Regular Haircut',
        desc: 'Precision cut tailored to your face shape and style preferences.',
        price: '$30',
        img: '/haircut.png',
        alt: 'Barber giving a regular haircut to a client at Chicho Barbershop',
        href: BOOKING_URL,
        external: true,
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="5" r="3" />
                <path d="M12 8v8M8 14l4 4 4-4" />
                <path d="M5 19h14" />
            </svg>
        ),
        name: 'Fades',
        desc: 'Clean skin fade or taper — low, mid or high, perfectly blended.',
        price: '$30',
        img: '/fade.png',
        alt: 'Clean fade haircut blended with precision at Chicho Barbershop',
        href: BOOKING_URL,
        external: true,
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 3H5a2 2 0 00-2 2v4a10 10 0 0014 9 10 10 0 0014-9V5a2 2 0 00-2-2h-4" />
                <path d="M9 3a6 6 0 006 6" />
            </svg>
        ),
        name: 'Haircut + Beard',
        desc: 'Full haircut combined with expert beard sculpting and lining.',
        price: '$40',
        img: '/beard.png',
        alt: 'Haircut and beard trim combo service at Chicho Barbershop',
        href: BOOKING_URL,
        external: true,
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.2V20h8v-4.8c1.8-1.5 3-3.7 3-6.2 0-4-3-7-7-7z" />
                <path d="M9 20h6M10 17v3M14 17v3" />
            </svg>
        ),
        name: 'Braids',
        desc: 'Professional braiding styles by María — book directly with her.',
        price: 'Variable',
        img: '/team/maria-work/braids 1.jpeg',
        alt: 'Professional braids service at Chicho Barbershop by María',
        href: '/team/maria',
        external: false,
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a5 5 0 015 5c0 1.5-.7 2.8-1.7 3.8L18 22H6l2.7-11.2C7.7 9.8 7 8.5 7 7a5 5 0 015-5z" />
                <path d="M9 22l1-4h4l1 4" />
            </svg>
        ),
        name: 'Nails',
        desc: 'Manicure & nail art by Gaby — book directly with her.',
        price: 'Variable',
        img: '/team/gabi-work/nails 1.jpeg',
        alt: 'Nail services at Chicho Barbershop by Gaby',
        href: '/team/gabi',
        external: false,
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    return (
        <a
            href={service.href}
            target={service.external ? '_blank' : '_self'}
            rel={service.external ? 'noopener noreferrer' : undefined}
            className="reveal card-bg"
            style={{
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                transitionDelay: `${index * 0.07}s`,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
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
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ background: 'rgba(173,255,47,0.08)', borderRadius: '8px', padding: '0.6rem' }}>
                        {service.icon}
                    </div>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.7rem', color: '#ADFF2F', lineHeight: 1 }}>
                        {service.price}
                    </span>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.04em', color: 'white', marginBottom: '0.5rem' }}>
                    {service.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {service.desc}
                </p>
            </div>
        </a>
    );
}

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

                {/* Top row: 3 barber services */}
                <div
                    className="services-grid"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', maxWidth: '900px', margin: '0 auto 1.25rem' }}
                >
                    {services.slice(0, 3).map((service, i) => (
                        <ServiceCard key={service.name} service={service} index={i} />
                    ))}
                </div>

                {/* Bottom row: Braids & Nails centered */}
                <div
                    className="services-grid-2"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', maxWidth: '600px', margin: '0 auto' }}
                >
                    {services.slice(3).map((service, i) => (
                        <ServiceCard key={service.name} service={service} index={i + 3} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .services-grid-2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 600px !important; }
                }
                @media (max-width: 540px) {
                    .services-grid { grid-template-columns: 1fr !important; }
                    .services-grid-2 { grid-template-columns: 1fr !important; max-width: 100% !important; }
                }
            `}</style>
        </section>
    );
}
