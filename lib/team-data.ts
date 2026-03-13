export interface TeamMember {
    name: string;
    slug: string;
    role: string;
    specialty: string;
    initial: string;
    accent: string;
    shortBio: string;
    fullBio: string;
    experience: string;
    approach: string;
    personality: string;
    specialties: string[];
    socialLinks: { platform: string; url: string }[];
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Chicho',
        slug: 'chicho',
        role: 'Owner & Master Barber',
        specialty: 'Fades & Skin Fades',
        initial: 'C',
        accent: '#00FF2A',
        shortBio: 'The founder — over 10 years of experience crafting the perfect fade.',
        fullBio: 'As the owner and master barber of Chicho Barbershop, Chicho has dedicated his career to providing premium grooming services in Trenton, NJ. His passion for barbering started at a young age and has only grown stronger.',
        experience: 'With over a decade of experience, Chicho has mastered every type of fade, from low skin fades to complex designs. He has trained and mentored many of the barbers on the team.',
        approach: 'Chicho treats every client like family. His goal is to make sure you leave looking sharp and feeling confident, no matter what style you choose.',
        personality: 'Passionate, hardworking, and always pushing to be the best.',
        specialties: ['Skin Fades', 'Low Fades', 'Mid Fades', 'Designs', 'Hot Towel Shaves', 'Kids Cuts'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'Alex',
        slug: 'alex',
        role: 'Barber',
        specialty: 'Fades & Modern Cuts',
        initial: 'A',
        accent: '#00FF2A',
        shortBio: 'Precision fades and modern styles that keep you looking sharp every time.',
        fullBio: 'Alex brings creativity and precision to every cut. With a keen eye for detail and a passion for modern barbering, he stays on top of the latest trends while mastering the classics.',
        experience: 'Trained in both classic and contemporary techniques, Alex has built a loyal client base who trust him for clean, consistent results.',
        approach: 'Every client gets a personalized consultation to make sure the cut matches their style, face shape, and lifestyle.',
        personality: 'Friendly, focused, and always ready to try something new.',
        specialties: ['Fades', 'Modern Cuts', 'Beard Trims', 'Line-ups', 'Designs'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'Anxel',
        slug: 'anxel',
        role: 'Barber',
        specialty: 'Classic Cuts & Beard Work',
        initial: 'A',
        accent: '#00D4FF',
        shortBio: 'Classic cuts with a modern touch — clean, sharp, and always on point.',
        fullBio: 'Anxel is known for his mastery of classic barbering techniques combined with a modern edge. His attention to detail ensures every client leaves the chair looking their best.',
        experience: 'With years of hands-on experience, Anxel has perfected the art of traditional cuts, beard sculpting, and hot towel shaves.',
        approach: 'He believes in taking the time to understand what each client wants, ensuring a personalized experience every visit.',
        personality: 'Calm, professional, and dedicated to his craft.',
        specialties: ['Classic Cuts', 'Beard Trims', 'Hot Towel Shaves', 'Line-ups', 'Taper Fades'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'Jeremy',
        slug: 'jeremy',
        role: 'Barber',
        specialty: 'Textured Crops & Trends',
        initial: 'J',
        accent: '#FF6B35',
        shortBio: 'Trending styles and textured cuts — always fresh, always on point.',
        fullBio: 'Jeremy is the go-to barber for anyone looking for the latest trends. From textured crops to mullets and everything in between, he keeps his skills sharp and his clients looking fresh.',
        experience: 'Jeremy has honed his skills working with clients of all ages and hair types, building a reputation for versatile and creative cuts.',
        approach: 'He stays up to date with social media trends and brings that inspiration to every appointment, always adding his own unique touch.',
        personality: 'Energetic, creative, and always bringing good vibes to the shop.',
        specialties: ['Textured Crops', 'Modern Fades', 'Beard Trims', 'Kids Cuts', 'Designs'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'Jesús',
        slug: 'jesus',
        role: 'Barber',
        specialty: 'Beard Sculpting & Fades',
        initial: 'J',
        accent: '#C77DFF',
        shortBio: 'Master of beard sculpting and precision fades for the perfect look.',
        fullBio: 'Jesús specializes in combining expert fades with detailed beard work. His clients trust him to deliver sharp, clean results every single time.',
        experience: 'With a strong foundation in both classic and modern techniques, Jesús has developed a signature style that blends precision with artistry.',
        approach: 'He takes pride in listening to his clients and delivering exactly what they envision — or even better.',
        personality: 'Detail-oriented, patient, and always striving for perfection.',
        specialties: ['Beard Sculpting', 'Fades', 'Line-ups', 'Hot Towel Shaves', 'Classic Cuts'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'John',
        slug: 'john',
        role: 'Barber',
        specialty: 'Kids Cuts & Family Styles',
        initial: 'J',
        accent: '#FFD700',
        shortBio: 'The family barber — great with kids and adults alike.',
        fullBio: 'John is known for his patience and skill, especially when it comes to working with younger clients. He creates a comfortable and fun experience for kids while delivering top-notch cuts for the whole family.',
        experience: 'John has spent years building expertise in family-friendly barbering, earning the trust of parents and kids throughout Trenton.',
        approach: 'He believes barbering is about more than just hair — it\'s about building relationships and making everyone feel welcome.',
        personality: 'Warm, patient, and great with people of all ages.',
        specialties: ['Kids Cuts', 'Classic Cuts', 'Fades', 'Beard Trims', 'Line-ups'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'María',
        slug: 'maria',
        role: 'Barber',
        specialty: 'Styling & Creative Cuts',
        initial: 'M',
        accent: '#FF69B4',
        shortBio: 'Creative cuts and styling with a unique artistic touch.',
        fullBio: 'María brings a fresh perspective to the team with her creative approach to barbering. Her eye for style and attention to detail make her a standout professional.',
        experience: 'With training in both barbering and hairstyling, María offers a unique blend of techniques that cater to a diverse range of clients.',
        approach: 'She loves collaborating with clients to create looks that reflect their personality, from bold and edgy to clean and classic.',
        personality: 'Artistic, approachable, and always inspiring confidence.',
        specialties: ['Creative Cuts', 'Styling', 'Fades', 'Modern Cuts', 'Beard Trims'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
    {
        name: 'Gabi',
        slug: 'gabi',
        role: 'Nail Specialist',
        specialty: 'Nail Specialist – Manicure & Pedicure',
        initial: 'G',
        accent: '#E040FB',
        shortBio: 'Expert nail care — manicure, pedicure, and nail design services.',
        fullBio: 'Gabi is the dedicated nail specialist at Chicho Barbershop, bringing professional nail care services to complement the grooming experience. Her precision and attention to detail ensure every client leaves with perfectly polished nails.',
        experience: 'With extensive training in nail care and design, Gabi has developed a loyal client base who appreciate her meticulous work and creative nail art.',
        approach: 'She uses high-quality products and the latest techniques to deliver nail services that are both beautiful and long-lasting.',
        personality: 'Meticulous, creative, and passionate about nail artistry.',
        specialties: ['Manicure', 'Pedicure', 'Nail Care', 'Nail Design'],
        socialLinks: [
            { platform: 'Instagram', url: '#' },
            { platform: 'TikTok', url: '#' },
        ],
    },
];

export function getTeamMember(slug: string): TeamMember | undefined {
    return teamMembers.find((m) => m.slug === slug);
}
