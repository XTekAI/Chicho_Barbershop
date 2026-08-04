'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useLoyalty } from '@/context/LoyaltyContext';
import { translations } from '@/lib/translations';

const LOYALTY_URL = 'https://app.myloyalink.com/join/1458264a-b13f-403f-8d87-6ce9a462758b';
const STORAGE_KEY = 'loyaltyPopupSeen';
const SHOW_DELAY_MS = 2000;

export default function LoyaltyPopup() {
    const { open, openLoyalty, closeLoyalty } = useLoyalty();
    const { lang } = useLanguage();
    const t = translations[lang].loyalty;

    // Auto-open once per visitor; opening it from the menu always works.
    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY) === 'true') return;
        const timer = setTimeout(() => {
            localStorage.setItem(STORAGE_KEY, 'true');
            openLoyalty();
        }, SHOW_DELAY_MS);
        return () => clearTimeout(timer);
    }, [openLoyalty]);

    const close = closeLoyalty;

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, close]);

    if (!open) return null;

    return (
        <div
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-labelledby="loyalty-title"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem',
                animation: 'loyaltyFade 0.3s ease',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '420px',
                    background: '#111',
                    border: '1px solid rgba(173,255,47,0.35)',
                    borderRadius: '18px',
                    padding: '2.25rem 1.75rem 1.75rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-inter, sans-serif)',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
                    animation: 'loyaltyPop 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                }}
            >
                {/* Close button */}
                <button
                    onClick={close}
                    aria-label={t.close}
                    style={{
                        position: 'absolute',
                        top: '0.85rem',
                        right: '0.85rem',
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'transparent',
                        border: 'none',
                        color: '#666',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        lineHeight: 0,
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Gift icon */}
                <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '14px',
                    background: 'rgba(173,255,47,0.1)',
                    color: '#ADFF2F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.1rem',
                }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <rect x="3" y="8" width="18" height="13" rx="2" />
                        <line x1="12" y1="8" x2="12" y2="21" />
                        <line x1="3" y1="13" x2="21" y2="13" />
                        <path d="M12 8S10.5 3 8 3a2.5 2.5 0 000 5zM12 8s1.5-5 4-5a2.5 2.5 0 010 5z" />
                    </svg>
                </div>

                {/* Badge */}
                <div suppressHydrationWarning style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: 'rgba(173,255,47,0.12)',
                    color: '#ADFF2F',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.9rem',
                }}>
                    {t.badge}
                </div>

                {/* Title */}
                <h2
                    id="loyalty-title"
                    suppressHydrationWarning
                    style={{
                        fontFamily: 'var(--font-bebas, sans-serif)',
                        fontSize: '2rem',
                        lineHeight: 1.05,
                        letterSpacing: '0.04em',
                        color: 'white',
                        whiteSpace: 'pre-line',
                        margin: 0,
                    }}
                >
                    {t.title}
                </h2>

                {/* Subtitle */}
                <p suppressHydrationWarning style={{
                    color: '#888',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    margin: '0.85rem 0 1.35rem',
                }}>
                    {t.sub}
                </p>

                {/* Perks */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    textAlign: 'left',
                    marginBottom: '1.6rem',
                }}>
                    {t.perks.map((perk) => (
                        <div key={perk} suppressHydrationWarning style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            color: '#ccc',
                            fontSize: '0.85rem',
                        }}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ADFF2F" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {perk}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href={LOYALTY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    suppressHydrationWarning
                    className="loyalty-cta"
                >
                    {t.cta}
                </a>

                {/* Dismiss */}
                <button
                    onClick={close}
                    suppressHydrationWarning
                    style={{
                        display: 'block',
                        width: '100%',
                        marginTop: '0.85rem',
                        background: 'transparent',
                        border: 'none',
                        color: '#555',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                    }}
                >
                    {t.dismiss}
                </button>
            </div>

            <style>{`
                @keyframes loyaltyFade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes loyaltyPop {
                    from { opacity: 0; transform: translateY(16px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .loyalty-cta {
                    display: block;
                    width: 100%;
                    padding: 0.95rem 1.25rem;
                    border-radius: 12px;
                    background: #ADFF2F;
                    color: #0a0a0a;
                    font-family: var(--font-bebas, sans-serif);
                    font-size: 1.1rem;
                    letter-spacing: 0.08em;
                    text-decoration: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    box-shadow: 0 8px 24px rgba(173,255,47,0.18);
                }
                .loyalty-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(173,255,47,0.28);
                }
                @media (prefers-reduced-motion: reduce) {
                    .loyalty-cta { transition: none; }
                }
            `}</style>
        </div>
    );
}
