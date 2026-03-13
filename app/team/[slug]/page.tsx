import { notFound } from 'next/navigation';
import { teamMembers, getTeamMember } from '@/lib/team-data';
import TeamProfile from '@/components/TeamProfile';
import type { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const member = getTeamMember(slug);
    if (!member) return {};
    return {
        title: `${member.name} — ${member.role} | Chicho Barbershop`,
        description: `${member.shortBio} Book an appointment with ${member.name} at Chicho Barbershop in Trenton, NJ.`,
    };
}

export default async function TeamMemberPage({ params }: PageProps) {
    const { slug } = await params;
    const member = getTeamMember(slug);
    if (!member) notFound();
    return <TeamProfile member={member} />;
}
