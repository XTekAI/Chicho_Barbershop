import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Chicho Barbershop LLC | Links',
    description: 'Book an appointment, follow us on social media, or leave a review — Chicho Barbershop LLC, Trenton NJ.',
    robots: { index: false, follow: false },
};

const links = [
    {
        href: 'https://www.chichobarbershop.com',
        label: 'Our Website',
        sub: 'chichobarbershop.com',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
        highlight: false,
    },
    {
        href: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services',
        label: 'Book Appointment',
        sub: 'Powered by Square',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01M12 14h.01M16 14h.01" />
            </svg>
        ),
        highlight: true,
    },
    {
        href: 'https://www.instagram.com/chichobarbershop',
        label: 'Instagram',
        sub: '@chichobarbershop',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
        ),
        highlight: false,
    },
    {
        href: 'https://www.facebook.com/profile.php?id=100054426762491',
        label: 'Facebook',
        sub: 'Chicho Barbershop LLC',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
        highlight: false,
    },
    {
        href: 'https://www.google.com/maps/place/Chicho+Barbershop+LLC/@40.2236008,-74.7477965,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15905d680000f:0xf9cfbe8453285485!8m2!3d40.2235967!4d-74.7452216!16s%2Fg%2F11yfqkx5c3',
        label: 'Leave a Review',
        sub: 'Rate us on Google ⭐',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        highlight: false,
    },
];

export default function QRPage() {
    return (
        <main style={{
            minHeight: '100vh',
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1.25rem',
            fontFamily: 'var(--font-inter, sans-serif)',
        }}>
            {/* Card container */}
            <div style={{
                width: '100%',
                maxWidth: '420px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
            }}>
                {/* Profile */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2.5px solid #ADFF2F',
                        position: 'relative',
                        flexShrink: 0,
                    }}>
                        <Image
                            src="/team/chicho.jpeg"
                            alt="Chicho Barbershop"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            fontFamily: 'var(--font-bebas, sans-serif)',
                            fontSize: '1.9rem',
                            letterSpacing: '0.08em',
                            color: 'white',
                            lineHeight: 1,
                        }}>
                            CHICHO <span style={{ color: '#ADFF2F' }}>BARBERSHOP</span>
                        </div>
                        <div style={{ color: '#666', fontSize: '0.82rem', marginTop: '0.35rem', letterSpacing: '0.05em' }}>
                            869 E State St, Trenton, NJ · 4.3★ Google
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={link.highlight ? 'qr-link qr-link--highlight' : 'qr-link'}
                        >
                            <div className="qr-icon">
                                {link.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div className="qr-label">{link.label}</div>
                                <div className="qr-sub">{link.sub}</div>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.5 }}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div style={{ color: '#333', fontSize: '0.72rem', textAlign: 'center', marginTop: '0.5rem' }}>
                    © {new Date().getFullYear()} Chicho Barbershop LLC · Trenton, NJ
                </div>
            </div>

            <style>{`
                .qr-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    text-decoration: none;
                    transition: transform 0.2s ease;
                    background: #111;
                    color: white;
                    border: 1px solid #2a2a2a;
                }
                .qr-link--highlight {
                    background: #ADFF2F;
                    color: #000;
                    border: 1px solid #ADFF2F;
                }
                .qr-link:hover { transform: scale(1.02); }
                .qr-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: rgba(173,255,47,0.08);
                    color: #ADFF2F;
                }
                .qr-link--highlight .qr-icon {
                    background: rgba(0,0,0,0.12);
                    color: #000;
                }
                .qr-label {
                    font-family: var(--font-bebas, sans-serif);
                    font-size: 1.05rem;
                    letter-spacing: 0.06em;
                    line-height: 1.2;
                    color: white;
                }
                .qr-link--highlight .qr-label { color: #000; }
                .qr-sub {
                    font-size: 0.75rem;
                    margin-top: 0.1rem;
                    color: #555;
                }
                .qr-link--highlight .qr-sub { color: rgba(0,0,0,0.6); }
            `}</style>
        </main>
    );
}
