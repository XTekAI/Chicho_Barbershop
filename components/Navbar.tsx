'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useLoyalty } from '@/context/LoyaltyContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, toggleLang } = useLanguage();
    const { openLoyalty } = useLoyalty();
    const t = translations[lang].nav;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: t.services, href: '#services' },
        { label: t.gallery, href: '#gallery' },
        { label: t.team, href: '#team' },
        { label: t.about, href: '#about' },
        { label: t.contact, href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                right: '1rem',
                zIndex: 1000,
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.5)',
                backdropFilter: 'blur(16px)',
                border: scrolled ? '1px solid #2a2a2a' : '1px solid rgba(42,42,42,0.3)',
                boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.6)' : 'none',
            }}
        >
            {/* Logo */}
            <a
                href="#"
                aria-label="Chicho Barbershop — Home"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="10" y="2" width="4" height="20" rx="2" fill="#ADFF2F" opacity="0.2" />
                    <path d="M10 2C10 2 14 6 14 12C14 18 10 22 10 22C8.89543 22 8 21.1046 8 20V4C8 2.89543 8.89543 2 10 2Z" fill="#ADFF2F" opacity="0.5" />
                    <path d="M14 2C15.1046 2 16 2.89543 16 4V20C16 21.1046 15.1046 22 14 22C14 22 10 18 10 12C10 6 14 2 14 2Z" fill="#ADFF2F" />
                    <rect x="8" y="1" width="8" height="3" rx="1.5" fill="#888" />
                    <rect x="8" y="20" width="8" height="3" rx="1.5" fill="#888" />
                </svg>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.08em', color: 'white' }}>
                    CHICHO <span style={{ color: '#ADFF2F' }}>BARBERSHOP</span>
                </span>
            </a>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ADFF2F')}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#aaa')}
                    >
                        {link.label}
                    </a>
                ))}

                {/* Loyalty program */}
                <button
                    onClick={openLoyalty}
                    suppressHydrationWarning
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        color: '#ADFF2F',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="8" width="18" height="13" rx="2" />
                        <line x1="12" y1="8" x2="12" y2="21" />
                        <line x1="3" y1="13" x2="21" y2="13" />
                        <path d="M12 8S10.5 3 8 3a2.5 2.5 0 000 5zM12 8s1.5-5 4-5a2.5 2.5 0 010 5z" />
                    </svg>
                    {t.loyalty}
                </button>

                {/* Language toggle */}
                <button
                    onClick={toggleLang}
                    suppressHydrationWarning
                    style={{
                        display: 'flex',
                        background: '#1a1a1a',
                        border: '1px solid #2a2a2a',
                        borderRadius: '100px',
                        padding: '3px',
                        cursor: 'pointer',
                        gap: '2px',
                    }}
                    aria-label="Toggle language"
                >
                    {(['en', 'es'] as const).map((l) => (
                        <span
                            key={l}
                            style={{
                                padding: '3px 10px',
                                borderRadius: '100px',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                transition: 'all 0.2s ease',
                                background: lang === l ? '#ADFF2F' : 'transparent',
                                color: lang === l ? '#0a0a0a' : '#555',
                            }}
                        >
                            {l.toUpperCase()}
                        </span>
                    ))}
                </button>

                <a
                    href="https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    {t.bookNow}
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
                className="mobile-menu-btn"
                aria-label="Toggle menu"
            >
                {[0, 1, 2].map((i) => (
                    <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: '#ADFF2F', transition: 'all 0.3s ease' }} />
                ))}
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div style={{
                    position: 'absolute', top: 'calc(100% + 0.5rem)', left: 0, right: 0,
                    background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(16px)',
                    border: '1px solid #2a2a2a', borderRadius: '12px',
                    padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
                }}>
                    {/* Language toggle mobile */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #1a1a1a' }}>
                        <span style={{ color: '#555', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            {lang === 'en' ? 'Language' : 'Idioma'}
                        </span>
                        <button
                            onClick={toggleLang}
                            suppressHydrationWarning
                            style={{ display: 'flex', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '100px', padding: '3px', cursor: 'pointer', gap: '2px' }}
                        >
                            {(['en', 'es'] as const).map((l) => (
                                <span
                                    key={l}
                                    style={{
                                        padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                                        transition: 'all 0.2s ease',
                                        background: lang === l ? '#ADFF2F' : 'transparent',
                                        color: lang === l ? '#0a0a0a' : '#555',
                                    }}
                                >
                                    {l.toUpperCase()}
                                </span>
                            ))}
                        </button>
                    </div>

                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{ color: '#aaa', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '0.5rem 0', borderBottom: '1px solid #1a1a1a' }}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Loyalty program */}
                    <button
                        onClick={() => { setMenuOpen(false); openLoyalty(); }}
                        suppressHydrationWarning
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'none',
                            border: 'none',
                            borderBottom: '1px solid #1a1a1a',
                            padding: '0.5rem 0',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            textAlign: 'left',
                            color: '#ADFF2F',
                            fontSize: '1rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <rect x="3" y="8" width="18" height="13" rx="2" />
                            <line x1="12" y1="8" x2="12" y2="21" />
                            <line x1="3" y1="13" x2="21" y2="13" />
                            <path d="M12 8S10.5 3 8 3a2.5 2.5 0 000 5zM12 8s1.5-5 4-5a2.5 2.5 0 010 5z" />
                        </svg>
                        {t.loyalty}
                    </button>

                    <a
                        href="https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ marginTop: '0.5rem', justifyContent: 'center' }}
                    >
                        {t.bookNow}
                    </a>
                </div>
            )}

            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
            `}</style>
        </nav>
    );
}
