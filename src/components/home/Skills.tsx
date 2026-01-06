import { motion } from 'framer-motion';

export const Skills = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Proficiency</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        A comprehensive overview of my technical skills, ranging from low-level system design to modern frontend frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <span className="font-mono font-bold text-lg">&lt;/&gt;</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Languages</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Java'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium flex items-center gap-2">
                                    {/* Placeholder icons could go here */}
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Frontend & Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <span className="font-bold text-lg">Fe</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend & Mobile</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Flutter', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Next.js'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <span className="font-bold text-lg">Be</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend & Architecture</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Express', 'Django', 'REST APIs', 'Microservices', 'HLD', 'LLD'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Databases */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <span className="font-bold text-lg">Db</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Databases</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Firebase'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                                <span className="font-bold text-lg">Tl</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tools & Platforms</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Git', 'GitHub', 'Docker', 'AWS', 'VS Code', 'Postman', 'Figma', 'Vercel'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
