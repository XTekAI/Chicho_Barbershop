'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        name: 'Marcus R.',
        rating: 5,
        text: 'Best barbershop in Trenton, hands down. Chicho gave me the cleanest fade I\'ve ever had. Will definitely be coming back every two weeks.',
        service: 'Fade & Taper',
    },
    {
        name: 'David L.',
        rating: 5,
        text: 'The hot towel shave experience here is unmatched. Felt like a king walking out. Great vibes, great music, great people.',
        service: 'Hot Towel Shave',
    },
    {
        name: 'Carlos M.',
        rating: 4,
        text: 'Took my son here for his first real haircut. They were patient and made him feel comfortable. He loves his new look!',
        service: 'Kids Haircut',
    },
    {
        name: 'James T.',
        rating: 5,
        text: 'I\'ve been to a lot of barbers in NJ and Chicho is top tier. The attention to detail on my beard trim was incredible.',
        service: 'Beard Trim & Shape',
    },
    {
        name: 'Andre W.',
        rating: 5,
        text: 'Got the full package before my wedding. Looked and felt amazing. My wife couldn\'t stop complimenting the cut. 10/10.',
        service: 'Full Package',
    },
    {
        name: 'Kevin P.',
        rating: 4,
        text: 'Walk-in friendly, no crazy waits, and the price is right for the quality you get. This is my go-to spot now.',
        service: 'Classic Haircut',
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div style={{ display: 'flex', gap: '2px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= count ? '#ADFF2F' : '#2a2a2a'}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

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

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    const scroll = (dir: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', checkScroll);
        checkScroll();
        return () => el.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <section id="testimonials" ref={sectionRef} className="section-padding" style={{ background: 'var(--black)', overflow: 'hidden' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="section-label">What Clients Say</span>
                    <h2 className="section-title">TESTIMONIALS</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                        Don&rsquo;t just take our word for it — hear from the people who keep coming back.
                    </p>
                </div>

                {/* Scroll controls */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <button
                        suppressHydrationWarning
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        style={{
                            width: '40px', height: '40px', borderRadius: '8px',
                            background: canScrollLeft ? 'rgba(173,255,47,0.1)' : '#1a1a1a',
                            border: `1px solid ${canScrollLeft ? 'rgba(173,255,47,0.3)' : '#2a2a2a'}`,
                            color: canScrollLeft ? '#ADFF2F' : '#333',
                            cursor: canScrollLeft ? 'pointer' : 'default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s ease',
                        }}
                        aria-label="Scroll left"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                    </button>
                    <button
                        suppressHydrationWarning
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        style={{
                            width: '40px', height: '40px', borderRadius: '8px',
                            background: canScrollRight ? 'rgba(173,255,47,0.1)' : '#1a1a1a',
                            border: `1px solid ${canScrollRight ? 'rgba(173,255,47,0.3)' : '#2a2a2a'}`,
                            color: canScrollRight ? '#ADFF2F' : '#333',
                            cursor: canScrollRight ? 'pointer' : 'default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s ease',
                        }}
                        aria-label="Scroll right"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable cards */}
                <div
                    ref={scrollRef}
                    className="reveal hide-scrollbar"
                    style={{
                        display: 'flex',
                        gap: '1.25rem',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        paddingBottom: '1rem',
                    }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            style={{
                                minWidth: 'min(300px, 85vw)',
                                maxWidth: '360px',
                                flexShrink: 0,
                                scrollSnapAlign: 'start',
                                background: 'var(--card)',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                padding: '1.75rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'border-color 0.3s ease',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#ADFF2F')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                        >
                            {/* Quote icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ADFF2F" opacity="0.3">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>

                            <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
                                &ldquo;{t.text}&rdquo;
                            </p>

                            <div>
                                <StarRating count={t.rating} />
                                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    {/* Avatar placeholder */}
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(173,255,47,0.2), rgba(173,255,47,0.05))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 700, fontSize: '0.8rem', color: '#ADFF2F',
                                    }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>{t.name}</div>
                                        <div style={{ color: '#555', fontSize: '0.75rem' }}>{t.service}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
