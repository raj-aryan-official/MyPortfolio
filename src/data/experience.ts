
export interface ExperienceItem {
    id: string;
    title?: string;
    role?: string;
    company?: string;
    duration?: string;
    description: string;
    technologies?: string[];
    link?: string;
    listItems?: string[];
}

export interface ExperienceCategory {
    id: string;
    title: string;
    items: ExperienceItem[];
}

export const experienceSections: ExperienceCategory[] = [
    {
        id: 'hackathons',
        title: 'Hackathons & Builder Programs',
        items: [
            {
                id: 'h1',
                description: 'Over the years, I have actively participated in 8+ hackathons and builder programs, gaining hands-on experience in rapid problem-solving, collaboration, and product thinking. These include programs and events such as Google for Developers initiatives, builderthons, all-night hackathons, and community-driven innovation challenges. Through these experiences, I worked on real-world problem statements, built functional prototypes under strict time constraints, and collaborated with diverse, high-energy teams.',
                technologies: ['Problem Solving', 'Rapid Prototyping', 'Collaboration']
            }
        ]
    },
    {
        id: 'saas',
        title: 'SaaS & Product Development',
        items: [
            {
                id: 's1',
                title: 'Customer Connect',
                description: 'A SaaS platform focused on improving communication and engagement between businesses and their customers.',
                technologies: ['SaaS', 'B2B', 'Communication']
            },
            {
                id: 's2',
                title: 'Voice Notes Application',
                description: 'A productivity application that converts voice input into real-time text notes, simplifying note-taking and improving accessibility.',
                technologies: ['Productivity', 'Accessibility', 'Voice Tech']
            },
            {
                id: 's3',
                title: 'Assetwise (App Clone)',
                description: 'Developed a functional clone to understand real-world business workflows, application structure, and product logic.',
                technologies: ['App Dev', 'Workflow Logic']
            },
            {
                id: 's4',
                title: 'Polaris Solution Center (MVP)',
                description: 'Built an MVP platform for a college that enables students to raise complaints directly to responsible authorities, improving transparency and response efficiency.',
                technologies: ['MVP', 'EdTech', 'Platform']
            },
            {
                id: 's5',
                description: 'These projects strengthened my understanding of user needs, MVP execution, and scalable product thinking.'
            }
        ]
    },
    {
        id: 'freelance',
        title: 'Freelancing & Business Solutions',
        items: [
            {
                id: 'f1',
                description: 'I have completed 13+ freelance website projects for local and growing businesses, helping them establish a strong digital presence and reach customers more effectively.',
                listItems: [
                    'Raj Gharana',
                    'Harinivas',
                    'Other local shops and service-based businesses'
                ],
                role: 'Freelance Developer',
                technologies: ['Web Development', 'Digital Presence', 'Client Management']
            },
            {
                id: 'f2',
                description: 'Each project involved understanding business goals, translating requirements into practical solutions, and delivering reliable, real-world products.'
            }
        ]
    },
    {
        id: 'startups',
        title: 'Startup Journey & Ventures',
        items: [
            {
                id: 'st1',
                title: 'Bharat Navodaya Shiksha',
                link: 'https://bharatnavodayashiksha.netlify.app/',
                description: 'Bharat Navodaya Shiksha is an education-focused initiative aimed at empowering schools and preparing students for the future. The startup bridges the gap between traditional academics and real-world skills by partnering with schools and educators.',
                listItems: [
                    'AI, coding, robotics, and startup-oriented learning for students',
                    'Teacher empowerment through workshops, tools, and innovation support',
                    'Skill-based and startup certifications aligned with NEP 2020',
                    'Innovation labs, hackathons, workshops, and student showcases'
                ],
                technologies: ['EdTech', 'NEP 2020', 'Innovation']
            },
            {
                id: 'st2',
                title: 'Sankalp Siddhi',
                description: 'Sankalp Siddhi is a community-driven initiative focused on building an ecosystem of founders, builders, and innovators. It brings together motivated individuals from diverse backgrounds to form high-performing teams and build real startups.',
                listItems: [
                    'Vision and strategy leadership',
                    'Technology and product development',
                    'Growth, branding, and marketing',
                    'Fundraising and financial planning'
                ],
                technologies: ['Community', 'Ecosystem', 'Leadership'],
                link: 'https://sankalpsiddhi.netlify.app/'
            },
            {
                id: 'st3',
                title: 'Chromo',
                description: 'Chromo is a commerce-focused startup designed to simplify the process of ordering paint. The platform aims to make paint purchasing as easy and accessible as ordering products from leading e-commerce platforms. The goal is to modernize a traditional industry by improving convenience, accessibility, and overall user experience.',
                technologies: ['E-commerce', 'Paint Industry', 'UX']
            }
        ]
    },
    {
        id: 'leetcode',
        title: 'LeetCode Practice & Consistency',
        items: [
            {
                id: 'lc1',
                description: 'I actively practice data structures and algorithms on LeetCode, focusing on consistency, depth, and problem-solving patterns rather than just numbers.',
                listItems: [
                    '517+ problems solved across Easy, Medium, and Hard levels',
                    'Strong focus on Java, with additional practice in MySQL and C++',
                    'Covered a wide range of core topics including arrays, strings, trees, graphs, dynamic programming, greedy algorithms, and advanced data structures',
                    'Maintained long streaks with 200+ active days and 70+ max streak, demonstrating long-term consistency',
                    'Achieved a contest rating of ~1560, competing regularly in coding contests'
                ],
                link: 'https://leetcode.com/u/raj_aryan_official/',
                technologies: ['Data Structures', 'Algorithms', 'Java', 'Problem Solving']
            },
            {
                id: 'lc2',
                description: 'This practice has significantly strengthened my logical thinking, algorithmic clarity, and ability to approach complex problems in a structured and optimized way.'
            }
        ]
    }
];
