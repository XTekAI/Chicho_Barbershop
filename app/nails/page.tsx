import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'C&G Nails Studio | Links',
    description: 'Book a nail appointment with Gaby — manicure, pedicure & nail design. C&G Nails Studio at Chicho Barbershop, Trenton NJ.',
    robots: { index: false, follow: false },
};

const links = [
    {
        href: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMAyhxxiRwkFHLtn',
        label: 'Book Appointment',
        sub: 'Manicure · Pedicure · Nail Design',
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
        href: 'https://www.instagram.com/cgnailsstudio869/',
        label: 'Instagram',
        sub: '@cgnailsstudio869',
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
        href: 'https://www.tiktok.com/@cgnail.studio_869',
        label: 'TikTok',
        sub: '@cgnail.studio_869',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
        highlight: false,
    },
    {
        href: 'https://www.chichobarbershop.com/team/gabi',
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

export default function NailsPage() {
    return (
        <main style={{
            minHeight: '100vh',
            background: 'linear-gradient(160deg, #100b05 0%, #1a1107 50%, #0d0804 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1.25rem',
            fontFamily: 'var(--font-inter, sans-serif)',
        }}>
            <div style={{
                width: '100%',
                maxWidth: '420px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.75rem',
            }}>
                {/* Profile */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.1rem' }}>
                    {/* Gold ring + photo */}
                    <div style={{
                        position: 'relative',
                        width: '100px',
                        height: '100px',
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '-3px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #C9A84C, #F5D78E, #C9A84C, #8B6914)',
                            zIndex: 0,
                        }} />
                        <div style={{
                            position: 'absolute',
                            inset: '2px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            zIndex: 1,
                        }}>
                            <Image
                                src="/team/gabi.jpeg"
                                alt="Gaby – C&G Nails Studio"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>
                    </div>

                    {/* Name & brand */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            letterSpacing: '0.04em',
                            lineHeight: 1,
                            color: '#F5D78E',
                            textShadow: '0 0 30px rgba(201,168,76,0.4)',
                        }}>
                            C<span style={{ color: '#fff', opacity: 0.85 }}>&</span>G
                        </div>
                        <div style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.28em',
                            color: '#C9A84C',
                            textTransform: 'uppercase',
                            marginTop: '0.15rem',
                            fontWeight: 500,
                        }}>
                            NAILS STUDIO
                        </div>
                        <div style={{
                            color: '#6b5a3a',
                            fontSize: '0.78rem',
                            marginTop: '0.5rem',
                            letterSpacing: '0.03em',
                        }}>
                            869 E State St, Trenton, NJ
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)',
                }} />

                {/* Links */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={link.highlight ? 'ng-link ng-link--highlight' : 'ng-link'}
                        >
                            <div className="ng-icon">
                                {link.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div className="ng-label">{link.label}</div>
                                <div className="ng-sub">{link.sub}</div>
                            </div>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.4, flexShrink: 0 }}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div style={{ color: '#3a2e1a', fontSize: '0.7rem', textAlign: 'center', marginTop: '0.25rem', letterSpacing: '0.04em' }}>
                    © {new Date().getFullYear()} C&G Nails Studio · Trenton, NJ
                </div>
            </div>

            <style>{`
                .ng-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    text-decoration: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    background: rgba(255,255,255,0.035);
                    color: white;
                    border: 1px solid rgba(201,168,76,0.18);
                }
                .ng-link--highlight {
                    background: linear-gradient(135deg, #C9A84C 0%, #F5D78E 50%, #C9A84C 100%);
                    color: #1a0f00;
                    border: 1px solid #C9A84C;
                    box-shadow: 0 4px 24px rgba(201,168,76,0.3);
                }
                .ng-link:hover {
                    transform: scale(1.02);
                    box-shadow: 0 4px 20px rgba(201,168,76,0.12);
                }
                .ng-link--highlight:hover {
                    box-shadow: 0 6px 28px rgba(201,168,76,0.45);
                }
                .ng-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: rgba(201,168,76,0.1);
                    color: #C9A84C;
                }
                .ng-link--highlight .ng-icon {
                    background: rgba(26,15,0,0.12);
                    color: #1a0f00;
                }
                .ng-label {
                    font-weight: 700;
                    font-size: 0.92rem;
                    letter-spacing: 0.04em;
                    line-height: 1.2;
                    color: #F5D78E;
                }
                .ng-link--highlight .ng-label {
                    color: #1a0f00;
                }
                .ng-sub {
                    font-size: 0.73rem;
                    margin-top: 0.12rem;
                    color: #6b5a3a;
                }
                .ng-link--highlight .ng-sub {
                    color: rgba(26,15,0,0.55);
                }
            `}</style>
        </main>
    );
}
