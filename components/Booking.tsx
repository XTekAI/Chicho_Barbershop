'use client';

import { useEffect, useRef, useState } from 'react';

export default function Booking() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const infoItems = [
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ADFF2F">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            ),
            label: 'Address',
            value: '869 E State St, Trenton, NJ 08609',
            href: 'https://maps.google.com/?q=869+E+State+St,+Trenton,+NJ+08609',
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
            value: 'Mon–Sat: 8AM–7PM · Sun: 9AM–5PM',
            href: null,
        },
    ];

    return (
        <section id="contact" ref={sectionRef} className="section-padding" style={{ background: 'var(--black)' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">BOOK YOUR APPOINTMENT</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                        Ready for your best look? Walk-ins always welcome or leave us a message below.
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
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            style={{ color: 'white', textDecoration: 'none', fontWeight: 500, lineHeight: 1.5, cursor: 'pointer' }}
                                            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ADFF2F')}
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
                        <div
                            className="reveal card-bg"
                            style={{ overflow: 'hidden', borderRadius: '12px' }}
                        >
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

                    {/* Form Column */}
                    <div className="reveal card-bg" style={{ padding: '2rem' }}>
                        {submitted ? (
                            <div role="alert" aria-live="polite" style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <div style={{ width: '60px', height: '60px', background: 'rgba(173,255,47,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#ADFF2F" aria-hidden="true">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.05em', color: 'white', marginBottom: '0.75rem' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--muted)' }}>We&rsquo;ll be in touch shortly. See you at the shop!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.05em', color: 'white', marginBottom: '0.5rem' }}>
                                    SEND US A MESSAGE
                                </h3>

                                {[
                                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', key: 'name' as const },
                                    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000', key: 'phone' as const },
                                ].map((field) => (
                                    <div key={field.id}>
                                        <label htmlFor={field.id} style={{ display: 'block', color: '#777', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>
                                            {field.label}
                                        </label>
                                        <input
                                            id={field.id}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            required
                                            value={formData[field.key]}
                                            onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                            style={{
                                                width: '100%', background: '#111', border: '1px solid #2a2a2a', borderRadius: '8px',
                                                padding: '0.875rem 1rem', color: 'white', fontSize: '0.95rem', outline: 'none',
                                                transition: 'border-color 0.2s ease',
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = '#ADFF2F')}
                                            onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label htmlFor="service" style={{ display: 'block', color: '#777', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>
                                        Service
                                    </label>
                                    <select
                                        id="service"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        style={{
                                            width: '100%', background: '#111', border: '1px solid #2a2a2a', borderRadius: '8px',
                                            padding: '0.875rem 1rem', color: formData.service ? 'white' : '#555', fontSize: '0.95rem',
                                            outline: 'none', cursor: 'pointer',
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = '#ADFF2F')}
                                        onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                                    >
                                        <option value="" disabled>Select a service...</option>
                                        <option value="haircut">Classic Haircut — $25</option>
                                        <option value="beard">Beard Trim & Shape — $20</option>
                                        <option value="fade">Fade & Taper — $30</option>
                                        <option value="shave">Hot Towel Shave — $35</option>
                                        <option value="kids">Kids Haircut — $18</option>
                                        <option value="package">Full Package — $65</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" style={{ display: 'block', color: '#777', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>
                                        Message (optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        placeholder="Preferred time, style notes..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{
                                            width: '100%', background: '#111', border: '1px solid #2a2a2a', borderRadius: '8px',
                                            padding: '0.875rem 1rem', color: 'white', fontSize: '0.95rem', outline: 'none',
                                            resize: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s ease',
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = '#ADFF2F')}
                                        onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                                    />
                                </div>

                                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        )}
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
