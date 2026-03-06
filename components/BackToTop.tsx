'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 900,
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(173,255,47,0.15)',
                border: '1px solid rgba(173,255,47,0.3)',
                backdropFilter: 'blur(8px)',
                color: '#ADFF2F',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'auto' : 'none',
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#ADFF2F';
                (e.currentTarget as HTMLElement).style.color = '#0a0a0a';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(173,255,47,0.15)';
                (e.currentTarget as HTMLElement).style.color = '#ADFF2F';
            }}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
        </button>
    );
}
