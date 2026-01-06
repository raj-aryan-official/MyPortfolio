import { Code2, Database, Globe, Layout, Server, Smartphone, Terminal } from 'lucide-react';

export interface SkillCategory {
    title: string;
    skills: string[];
    icon: any;
}

export const skillsData: SkillCategory[] = [
    {
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS', 'SQL', 'NoSQL'],
        icon: Code2,
    },
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vite'],
        icon: Layout,
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Java Spring', 'REST APIs', 'GraphQL'],
        icon: Server,
    },
    {
        title: 'Mobile',
        skills: ['Flutter', 'React Native'],
        icon: Smartphone,
    },
    {
        title: 'Database',
        skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
        icon: Database,
    },
    {
        title: 'DevOps & Tools',
        skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman'],
        icon: Terminal,
    },
    {
        title: 'System Design',
        skills: ['HLD', 'LLD', 'Microservices', 'Distributed Systems'],
        icon: Globe,
    },
];
