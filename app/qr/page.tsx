import type { Metadata } from 'next';
import QRContent from './QRContent';

export const metadata: Metadata = {
    title: 'Chicho Barbershop LLC | Links',
    description: 'Book an appointment, join our loyalty program, follow us on social media, or leave a review — Chicho Barbershop LLC, Trenton NJ.',
    robots: { index: false, follow: false },
};

export default function QRPage() {
    return <QRContent />;
}
