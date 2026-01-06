
import { Github, Linkedin, Code } from 'lucide-react';

import { motion } from 'framer-motion';

const profiles = [
    {
        name: 'GitHub',
        url: 'https://github.com/raj-aryan-official',
        icon: Github,
        color: 'bg-gray-900 text-white',
        stats: '50+ Repositories',
        description: 'Check out my open source contributions and personal projects.'
    },
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/username',
        icon: Code,
        color: 'bg-yellow-600 text-white',
        stats: '500+ Questions Solved',
        description: 'Solving complex algorithmic problems and mastering data structures.'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rajaryanofficial/',
        icon: Linkedin,
        color: 'bg-blue-700 text-white',
        stats: '500+ Connections',
        description: 'Professional network and career updates.'
    }
];

const Profiles = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Coding Profiles</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Connect with me on these platforms to see my activity and skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => {
                        const Icon = profile.icon;
                        return (
                            <motion.a
                                key={profile.name}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 ${profile.color}`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{profile.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{profile.stats}</p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {profile.description}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Profiles;
