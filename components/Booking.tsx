'use client';

import { useEffect, useRef } from 'react';

const infoItems = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ADFF2F">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
        ),
        label: 'Address',
        value: '869 E State St, Trenton, NJ 08609',
        href: 'https://www.google.com/maps/place/Chicho+Barbershop+LLC/@40.2236008,-74.7477965,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15905d680000f:0xf9cfbe8453285485!8m2!3d40.2235967!4d-74.7452216!16s%2Fg%2F11yfqkx5c3',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ADFF2F">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
        ),
        label: 'Phone',
        value: '(609) 310-8842',
        href: 'tel:6093108842',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ADFF2F">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
        ),
        label: 'Hours',
        value: null,
        href: null,
        hours: [
            { days: 'Mon – Thu', time: '9AM – 7PM' },
            { days: 'Fri – Sat', time: '8AM – 8PM' },
            { days: 'Sunday', time: '9AM – 5PM' },
        ],
    },
];

export default function Booking() {
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
        <section id="contact" ref={sectionRef} className="section-padding" style={{ background: 'var(--black)' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">BOOK YOUR APPOINTMENT</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                        Ready for your best look? Walk-ins always welcome — or book online in seconds.
                    </p>
                </div>

                <div
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}
                    className="contact-grid"
                >
                    {/* Info Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {infoItems.map((item) => (
                            <div
                                key={item.label}
                                className="reveal card-bg"
                                style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                            >
                                <div style={{ background: 'rgba(173,255,47,0.1)', borderRadius: '8px', padding: '0.6rem', flexShrink: 0 }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ color: '#555', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>
                                        {item.label}
                                    </div>
                                    {item.hours ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                            {item.hours.map((h) => (
                                                <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem' }}>
                                                    <span style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem' }}>{h.days}</span>
                                                    <span style={{ color: '#00FF2A', fontWeight: 600, fontSize: '0.9rem' }}>{h.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            style={{ color: 'white', textDecoration: 'none', fontWeight: 500, lineHeight: 1.5, cursor: 'pointer' }}
                                            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FF2A')}
                                            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'white')}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span style={{ color: 'white', fontWeight: 500, lineHeight: 1.5 }}>{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Google Maps embed */}
                        <div className="reveal card-bg" style={{ overflow: 'hidden', borderRadius: '12px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.5!2d-74.74!3d40.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s869+E+State+St%2C+Trenton%2C+NJ+08609!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%"
                                height="200"
                                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chicho Barbershop location"
                            />
                        </div>
                    </div>

                    {/* Booking Column */}
                    <div
                        className="reveal card-bg"
                        style={{
                            padding: '3rem 2.5rem',
                            textAlign: 'center',
                            border: '1px solid #ADFF2F33',
                            background: 'linear-gradient(135deg, #0d1a00 0%, #111 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}
                    >
                        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="1.4">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                        </svg>

                        <div>
                            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', letterSpacing: '0.06em', color: 'white', marginBottom: '0.75rem', lineHeight: 1 }}>
                                READY TO LOOK<br />YOUR BEST?
                            </h3>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '320px' }}>
                                Book your appointment online — choose your service, pick a date and time, and we&apos;ll take care of the rest.
                            </p>
                        </div>

                        <a
                            href="https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
                                background: '#ADFF2F', color: '#000', fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: '1.3rem', letterSpacing: '0.12em', padding: '1rem 3rem',
                                borderRadius: '8px', textDecoration: 'none',
                                transition: 'transform 0.2s ease, background 0.2s ease',
                                width: '100%', justifyContent: 'center',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                                (e.currentTarget as HTMLElement).style.background = '#c8ff50';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLElement).style.background = '#ADFF2F';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            BOOK NOW
                        </a>

                        <p style={{ color: '#444', fontSize: '0.78rem' }}>
                            Powered by Square Appointments
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
