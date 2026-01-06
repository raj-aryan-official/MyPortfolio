import { motion } from 'framer-motion';

export const StartupSkills = () => {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Startup Experience</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Founder of 3 startups, helping B2B and B2C businesses grow by transforming ideas into real-world solutions. Experienced in working with multiple startups, supporting strategy, execution, and growth across different industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Founder & Leadership */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <span className="font-bold text-lg">Fo</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Founder & Leadership</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Founder & Co-Founder', 'Business Strategy', 'Product Vision', 'Early-Stage Decision Making', 'Team Collaboration'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Business Models */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                <span className="font-bold text-lg">Bm</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Business Models</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['B2B', 'B2C', 'D2C', 'SaaS', 'Service-Based Startups'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Startup Collaboration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                                <span className="font-bold text-lg">Sc</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Startup Collaboration</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Early-Stage Startups', 'Growth-Stage Startups', 'Founder Consulting', 'Business Support', 'Long-Term Partnerships'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Value & Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                                <span className="font-bold text-lg">Vi</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Value & Impact</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Idea Validation', 'MVP Launch', 'Business Growth Support', 'Process Optimization', 'Customer-Centric Solutions'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Industries & Reach */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-2 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400">
                                <span className="font-bold text-lg">Ir</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Industries & Reach</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Technology', 'Services', 'Digital Products', 'Local & Global Businesses'].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
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
