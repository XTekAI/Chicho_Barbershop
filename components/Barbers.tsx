'use client';

import { useEffect, useRef, useState } from 'react';

const barbers = [
    {
        name: 'Chicho',
        role: 'Owner & Master Barber',
        specialty: 'Fades & Skin Fades',
        desc: 'Con más de 15 años de experiencia, Chicho es el maestro del fade perfecto. Desde low fades hasta skin fades con diseños, cada corte es una obra de arte.',
        skills: ['Skin Fade', 'Low Fade', 'Mid Fade', 'Diseños', 'Hot Towel Shave'],
        initial: 'C',
        accent: '#ADFF2F',
    },
    {
        name: 'Miguel',
        role: 'Senior Barber',
        specialty: 'Trenzas & Braids',
        desc: 'Especialista en todo tipo de trenzas — box braids, cornrows, twist outs y estilos protectores. Creativo, detallista y siempre a la moda.',
        skills: ['Box Braids', 'Cornrows', 'Twist Out', 'Feed-in Braids', 'Protective Styles'],
        initial: 'M',
        accent: '#00D4FF',
    },
    {
        name: 'José',
        role: 'Barber & Stylist',
        specialty: 'Beard Sculpting',
        desc: 'José transforma barbas. Desde line-ups perfectos hasta beard fades complejos, domina el arte de esculpir la barba ideal para cada rostro.',
        skills: ['Beard Fade', 'Line-up', 'Beard Trim', 'Hot Towel Shave', 'Beard Design'],
        initial: 'J',
        accent: '#FF6B35',
    },
    {
        name: 'Carlos',
        role: 'Junior Barber',
        specialty: 'Modern & Textured Cuts',
        desc: 'La nueva generación. Carlos domina los cortes modernos — textured crops, mullets, curtain bangs y todo lo que está trending en redes.',
        skills: ['Textured Crop', 'Mullet', 'Curtain Bangs', 'Buzz Cut', 'Kids Cuts'],
        initial: 'D',
        accent: '#C77DFF',
    },
];

export default function Barbers() {
    const sectionRef = useRef<HTMLElement>(null);
    const [selected, setSelected] = useState<number | null>(null);

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
        <section id="barbers" ref={sectionRef} className="section-padding" style={{ background: 'var(--charcoal)' }}>
            <div className="container-max">
                {/* Header */}
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">Meet The Team</span>
                    <h2 className="section-title">NUESTROS BARBEROS</h2>
                    <div className="divider-line" style={{ margin: '0 auto' }} />
                    <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                        Cada barbero tiene su especialidad. Elige al profesional perfecto para el estilo que buscas.
                    </p>
                </div>

                {/* Barbers grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem',
                    }}
                    className="barbers-grid"
                >
                    {barbers.map((barber, i) => {
                        const isSelected = selected === i;
                        return (
                            <div
                                key={barber.name}
                                className="reveal"
                                style={{
                                    background: 'var(--card)',
                                    border: `1.5px solid ${isSelected ? barber.accent : 'var(--border)'}`,
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    transitionDelay: `${i * 0.08}s`,
                                    cursor: 'pointer',
                                    transform: isSelected ? 'translateY(-6px)' : 'translateY(0)',
                                    boxShadow: isSelected ? `0 12px 40px ${barber.accent}25` : 'none',
                                }}
                                onClick={() => setSelected(isSelected ? null : i)}
                                onMouseEnter={(e) => {
                                    if (!isSelected) (e.currentTarget as HTMLElement).style.borderColor = barber.accent + '80';
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                                }}
                            >
                                {/* Top accent bar */}
                                <div style={{ height: '4px', background: `linear-gradient(90deg, ${barber.accent}, ${barber.accent}40)` }} />

                                <div style={{ padding: '1.75rem 1.5rem' }}>
                                    {/* Avatar + Name */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                                        <div style={{
                                            width: '52px', height: '52px', borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${barber.accent}25, ${barber.accent}08)`,
                                            border: `1px solid ${barber.accent}30`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: '1.5rem', color: barber.accent,
                                            flexShrink: 0,
                                        }}>
                                            {barber.initial}
                                        </div>
                                        <div>
                                            <h3 style={{
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: '1.4rem', letterSpacing: '0.04em',
                                                color: 'white', lineHeight: 1.1,
                                            }}>
                                                {barber.name}
                                            </h3>
                                            <span style={{ color: '#555', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                {barber.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Specialty badge */}
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                        background: `${barber.accent}12`,
                                        border: `1px solid ${barber.accent}25`,
                                        borderRadius: '100px',
                                        padding: '0.3rem 0.85rem',
                                        marginBottom: '1rem',
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill={barber.accent}>
                                            <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                                        </svg>
                                        <span style={{ color: barber.accent, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                                            {barber.specialty}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p style={{ color: '#888', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                                        {barber.desc}
                                    </p>

                                    {/* Skills tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                                        {barber.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                style={{
                                                    background: '#1a1a1a',
                                                    border: '1px solid #2a2a2a',
                                                    borderRadius: '6px',
                                                    padding: '0.25rem 0.6rem',
                                                    fontSize: '0.7rem',
                                                    color: '#777',
                                                    letterSpacing: '0.02em',
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA button */}
                                    <a
                                        href="#contact"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            width: '100%',
                                            padding: '0.75rem',
                                            borderRadius: '8px',
                                            background: isSelected ? barber.accent : 'transparent',
                                            border: `1.5px solid ${barber.accent}`,
                                            color: isSelected ? '#0a0a0a' : barber.accent,
                                            fontWeight: 700,
                                            fontSize: '0.78rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase' as const,
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = barber.accent;
                                            (e.currentTarget as HTMLElement).style.color = '#0a0a0a';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isSelected) {
                                                (e.currentTarget as HTMLElement).style.background = 'transparent';
                                                (e.currentTarget as HTMLElement).style.color = barber.accent;
                                            }
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                                        </svg>
                                        Agendar con {barber.name}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .barbers-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 540px) {
                    .barbers-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
