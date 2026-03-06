'use client';

export default function Footer() {
    return (
        <footer
            style={{
                background: '#050505',
                borderTop: '1px solid #1a1a1a',
                padding: '3rem 1.5rem 2rem',
            }}
        >
            <div className="container-max">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr',
                        gap: '3rem',
                        marginBottom: '3rem',
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: '1.8rem',
                                letterSpacing: '0.08em',
                                color: 'white',
                                marginBottom: '1rem',
                            }}
                        >
                            CHICHO <span style={{ color: '#ADFF2F' }}>BARBERSHOP</span>
                        </div>
                        <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.875rem', maxWidth: '280px', marginBottom: '1.5rem' }}>
                            Premium grooming services in Trenton, NJ. Look sharp, feel confident — every visit.
                        </p>
                        {/* Social links */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {/* Instagram */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                style={{
                                    width: '44px', height: '44px',
                                    background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = '#ADFF2F';
                                    (e.currentTarget as HTMLElement).style.background = 'rgba(173,255,47,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                                    (e.currentTarget as HTMLElement).style.background = '#1a1a1a';
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ADFF2F">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a
                                href="#"
                                aria-label="Facebook"
                                style={{
                                    width: '44px', height: '44px',
                                    background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = '#ADFF2F';
                                    (e.currentTarget as HTMLElement).style.background = 'rgba(173,255,47,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                                    (e.currentTarget as HTMLElement).style.background = '#1a1a1a';
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ADFF2F">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Google */}
                            <a
                                href="https://maps.google.com/?q=Chicho+Barbershop+LLC+Trenton+NJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Google Maps"
                                style={{
                                    width: '44px', height: '44px',
                                    background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = '#ADFF2F';
                                    (e.currentTarget as HTMLElement).style.background = 'rgba(173,255,47,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                                    (e.currentTarget as HTMLElement).style.background = '#1a1a1a';
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ADFF2F">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
                            Quick Links
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {['#services', '#gallery', '#about', '#contact'].map((href) => (
                                <a
                                    key={href}
                                    href={href}
                                    style={{ color: '#555', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s ease', cursor: 'pointer' }}
                                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ADFF2F')}
                                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#555')}
                                >
                                    {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            <a href="tel:6093108842" style={{ color: '#555', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s ease' }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ADFF2F')}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#555')}
                            >
                                (609) 310-8842
                            </a>
                            <a href="https://maps.google.com/?q=869+E+State+St+Trenton+NJ" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#555', textDecoration: 'none', fontSize: '0.875rem', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ADFF2F')}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#555')}
                            >
                                869 E State St<br />Trenton, NJ 08609
                            </a>
                            <span style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                Mon–Sat: 8AM–7PM<br />Sun: 9AM–5PM
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: '1px solid #1a1a1a',
                        paddingTop: '1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}
                >
                    <span style={{ color: '#333', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Chicho Barbershop LLC. All rights reserved.
                    </span>
                    <span style={{ color: '#333', fontSize: '0.8rem' }}>
                        869 E State St · Trenton, NJ · <span style={{ color: '#ADFF2F' }}>4.3★ on Google</span>
                    </span>
                    <span style={{ color: '#333', fontSize: '0.8rem' }}>
                        Website by{' '}
                        <a
                            href="https://www.xtekai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#ADFF2F', textDecoration: 'none', fontWeight: 600, transition: 'opacity 0.2s ease' }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                        >
                            XTek AI
                        </a>
                    </span>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    );
}
