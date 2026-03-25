'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const galleryItems = [
    { src: '/gallery/gallery-2.jpg', alt: 'Chicho Barbershop — interior view' },
    { src: '/gallery/gallery-3.jpg', alt: 'Chicho Barbershop — barber station' },
    { src: '/gallery/gallery-4.jpg', alt: 'Chicho Barbershop — shop atmosphere' },
    { src: '/gallery/gallery-5.jpg', alt: 'Chicho Barbershop — workspace' },
    { src: '/gallery/gallery-6.jpg', alt: 'Chicho Barbershop — shop detail' },
    { src: '/gallery/gallery-7.jpg', alt: 'Chicho Barbershop — exterior' },
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
                    {galleryItems.map((item, i) => (
                        <div
                            key={item.src}
                            className="reveal"
                            style={{
                                position: 'relative',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                aspectRatio: '1 / 1',
                                border: '1px solid #2a2a2a',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s ease, transform 0.3s ease',
                                transitionDelay: `${i * 0.06}s`,
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = '#ADFF2F';
                                el.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = '#2a2a2a';
                                el.style.transform = 'scale(1)';
                            }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                            />
                            {/* Bottom gradient overlay */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
                                pointerEvents: 'none',
                            }} />
                        </div>
                    ))}
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
