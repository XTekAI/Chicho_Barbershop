export interface TeamMember {
    name: string;
    slug: string;
    role: string;
    specialty: string;
    initial: string;
    accent: string;
    image?: string;
    imagePosition?: string;
    workPhotos?: string[];
    shortBio: string;
    fullBio: string;
    experience: string;
    approach: string;
    personality: string;
    specialties: string[];
    socialLinks: { platform: string; url: string }[];
    bookingUrl: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Chicho',
        slug: 'chicho',
        role: 'Owner & Master Barber',
        specialty: 'Fades & Skin Fades',
        initial: 'C',
        accent: '#00FF2A',
        image: '/team/chicho.jpeg',
        shortBio: 'The founder — over 10 years of experience crafting the perfect fade.',
        fullBio: 'As the owner and master barber of Chicho Barbershop, Chicho has dedicated his career to providing premium grooming services in Trenton, NJ. His passion for barbering started at a young age and has only grown stronger.',
        experience: 'With over a decade of experience, Chicho has mastered every type of fade, from low skin fades to complex designs. He has trained and mentored many of the barbers on the team.',
        approach: 'Chicho treats every client like family. His goal is to make sure you leave looking sharp and feeling confident, no matter what style you choose.',
        personality: 'Passionate, hardworking, and always pushing to be the best.',
        specialties: ['Skin Fades', 'Low Fades', 'Mid Fades', 'Designs', 'Hot Towel Shaves', 'Kids Cuts'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMEj5Sv9HQV4TrBh',
    },
    {
        name: 'Jodon',
        slug: 'jodon',
        role: 'Barber',
        specialty: 'Fades & Sharp Cuts',
        initial: 'J',
        accent: '#FF003C',
        image: '/team/jodon.jpg',
        shortBio: 'Clean fades and sharp cuts — precision and style every single time.',
        fullBio: 'Jodon brings energy and skill to every cut. His attention to detail and passion for the craft make him a standout at Chicho Barbershop, delivering sharp results clients keep coming back for.',
        experience: 'Trained in both classic and modern barbering techniques, Jodon has built a reputation for clean, consistent fades and styles that fit every client.',
        approach: 'He takes the time to understand what each client wants and delivers results that exceed expectations every time.',
        personality: 'Energetic, dedicated, and always bringing his best game to the chair.',
        specialties: ['Fades', 'Skin Fades', 'Modern Cuts', 'Beard Trims', 'Line-ups', 'Designs'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMrqvWsCPQ8NGKP2',
    },
    {
        name: 'Anxel',
        slug: 'anxel',
        role: 'Barber',
        specialty: 'Classic Cuts & Beard Work',
        initial: 'A',
        accent: '#00D4FF',
        image: '/team/anxel.jpeg',
        imagePosition: 'top',
        shortBio: 'Classic cuts with a modern touch — clean, sharp, and always on point.',
        fullBio: 'Anxel is known for his mastery of classic barbering techniques combined with a modern edge. His attention to detail ensures every client leaves the chair looking their best.',
        experience: 'With years of hands-on experience, Anxel has perfected the art of traditional cuts, beard sculpting, and hot towel shaves.',
        approach: 'He believes in taking the time to understand what each client wants, ensuring a personalized experience every visit.',
        personality: 'Calm, professional, and dedicated to his craft.',
        specialties: ['Classic Cuts', 'Beard Trims', 'Hot Towel Shaves', 'Line-ups', 'Taper Fades'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMi3HMxjkC6QXFnQ',
    },
    {
        name: 'Jeremy',
        slug: 'jeremy',
        role: 'Barber',
        specialty: 'Textured Crops & Trends',
        initial: 'J',
        accent: '#FF6B35',
        image: '/team/jeremy.jpeg',
        shortBio: 'Trending styles and textured cuts — always fresh, always on point.',
        fullBio: 'Jeremy is the go-to barber for anyone looking for the latest trends. From textured crops to mullets and everything in between, he keeps his skills sharp and his clients looking fresh.',
        experience: 'Jeremy has honed his skills working with clients of all ages and hair types, building a reputation for versatile and creative cuts.',
        approach: 'He stays up to date with social media trends and brings that inspiration to every appointment, always adding his own unique touch.',
        personality: 'Energetic, creative, and always bringing good vibes to the shop.',
        specialties: ['Textured Crops', 'Modern Fades', 'Beard Trims', 'Kids Cuts', 'Designs'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TM3YsdhGovEIk72x',
    },
    {
        name: 'Jesús',
        slug: 'jesus',
        role: 'Barber',
        specialty: 'Beard Sculpting & Fades',
        initial: 'J',
        accent: '#C77DFF',
        image: '/team/jesus.jpeg',
        shortBio: 'Master of beard sculpting and precision fades for the perfect look.',
        fullBio: 'Jesús specializes in combining expert fades with detailed beard work. His clients trust him to deliver sharp, clean results every single time.',
        experience: 'With a strong foundation in both classic and modern techniques, Jesús has developed a signature style that blends precision with artistry.',
        approach: 'He takes pride in listening to his clients and delivering exactly what they envision — or even better.',
        personality: 'Detail-oriented, patient, and always striving for perfection.',
        specialties: ['Beard Sculpting', 'Fades', 'Line-ups', 'Hot Towel Shaves', 'Classic Cuts'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMv_srPKC9er16Sb',
    },
    {
        name: 'Jon',
        slug: 'john',
        role: 'Barber',
        specialty: 'Kids Cuts & Family Styles',
        initial: 'J',
        accent: '#FFD700',
        image: '/team/jon.jpeg',
        shortBio: 'The family barber — great with kids and adults alike.',
        fullBio: 'Jon is known for his patience and skill, especially when it comes to working with younger clients. He creates a comfortable and fun experience for kids while delivering top-notch cuts for the whole family.',
        experience: 'Jon has spent years building expertise in family-friendly barbering, earning the trust of parents and kids throughout Trenton.',
        approach: 'He believes barbering is about more than just hair — it\'s about building relationships and making everyone feel welcome.',
        personality: 'Warm, patient, and great with people of all ages.',
        specialties: ['Kids Cuts', 'Classic Cuts', 'Fades', 'Beard Trims', 'Line-ups'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMm2LGRnP6Nljy6b',
    },
    {
        name: 'María',
        slug: 'maria',
        role: 'Braids Specialist',
        specialty: 'Braids, Trenzas & Hair Design',
        initial: 'M',
        accent: '#FF69B4',
        image: '/team/maria.jpeg',
        workPhotos: Array.from({ length: 10 }, (_, i) => `/team/maria-work/braids ${i + 1}.jpeg`),
        shortBio: 'Expert in braids, trenzas, and creative hair designs that make a statement.',
        fullBio: 'María is the go-to braids specialist at Chicho Barbershop. From intricate trenzas to bold creative designs, she brings artistry and precision to every style she creates.',
        experience: 'With years of expertise in braiding and hair design, María has mastered a wide range of styles — from classic cornrows to modern feed-in braids and custom patterns.',
        approach: 'She takes time to consult with each client, understanding the look they want and delivering braids that are not only beautiful but also comfortable and long-lasting.',
        personality: 'Artistic, patient, and passionate about creating unique styles.',
        specialties: ['Braids', 'Trenzas', 'Cornrows', 'Feed-in Braids', 'Hair Designs', 'Protective Styles'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMc-Jz9V_FNuN0o2',
    },
    {
        name: 'Gaby',
        slug: 'gabi',
        role: 'Nail Specialist',
        specialty: 'Nail Specialist – Manicure & Pedicure',
        initial: 'G',
        accent: '#E040FB',
        image: '/team/gabi.jpeg',
        workPhotos: Array.from({ length: 10 }, (_, i) => `/team/gabi-work/nails ${i + 1}.jpeg`),
        shortBio: 'Expert nail care — manicure, pedicure, and nail design services.',
        fullBio: 'Gabi is the dedicated nail specialist at Chicho Barbershop, bringing professional nail care services to complement the grooming experience. Her precision and attention to detail ensure every client leaves with perfectly polished nails.',
        experience: 'With extensive training in nail care and design, Gabi has developed a loyal client base who appreciate her meticulous work and creative nail art.',
        approach: 'She uses high-quality products and the latest techniques to deliver nail services that are both beautiful and long-lasting.',
        personality: 'Meticulous, creative, and passionate about nail artistry.',
        specialties: ['Manicure', 'Pedicure', 'Nail Care', 'Nail Design'],
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/chichobarbershop' },
            { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054426762491' },
        ],
        bookingUrl: 'https://book.squareup.com/appointments/fizei3yso5d64r/location/LE9WWBS6A0PFZ/services?buttonTextColor=000000&color=0eee1d&locale=en&referrer=so&team_member_id=TMAyhxxiRwkFHLtn',
    },
];

export function getTeamMember(slug: string): TeamMember | undefined {
    return teamMembers.find((m) => m.slug === slug);
}
