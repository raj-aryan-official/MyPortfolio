import { motion } from 'framer-motion';
import { experienceSections } from '../data/experience';
import { Briefcase, ExternalLink, ChevronRight } from 'lucide-react';

const Experience = () => {
    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Experience</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        My journey across hackathons, product development, freelancing, and startups.
                    </p>
                </div>

                <div className="space-y-16">
                    {experienceSections.map((section, sectionIndex) => (
                        <div key={section.id}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3"
                            >
                                <span className="w-2 h-8 bg-blue-600 rounded-full" />
                                {section.title}
                            </motion.h2>

                            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-4 space-y-8">
                                {section.items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: sectionIndex * 0.1 + index * 0.1 }}
                                        className="relative pl-8 md:pl-10"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />

                                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex flex-col md:flex-row justify-between mb-2">
                                                <div>
                                                    {item.title && (
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
                                                            {item.title}
                                                            {item.link && (
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                                                                    title="Visit Link"
                                                                >
                                                                    <ExternalLink className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                        </h3>
                                                    )}
                                                    {item.role && (
                                                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium mb-1">
                                                            <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                            {item.role}
                                                        </div>
                                                    )}
                                                </div>
                                                {item.duration && (
                                                    <span className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-1 md:mt-0 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full h-fit">
                                                        {item.duration}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                                                <p>{item.description}</p>

                                                {item.listItems && (
                                                    <ul className="space-y-2 mt-3">
                                                        {item.listItems.map((listItem, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                                                <span>{listItem}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                            {item.technologies && (
                                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                                    {item.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs px-3 py-1 bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Experience;
