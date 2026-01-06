
import { motion } from 'framer-motion';

import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-10 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left flex-1"
                >


                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">experiences</span> that
                        <br /> matter.
                    </h1>

                    <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
                        Hi, I’m Raj Aryan. A CS student, Full Stack Developer, and startup founder, passionate about clean code, scalable systems, and building products that create real business impact. I transform complex problems into elegant solutions through technology and leadership.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
                        <Link to="/about">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-900 dark:hover:text-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    About Me
                                </Button>
                            </motion.div>
                        </Link>
                        <Link to="/projects">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-900 dark:hover:text-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    View Projects
                                </Button>
                            </motion.div>
                        </Link>
                        <Link to="/experience">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-900 dark:hover:text-purple-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    Experience
                                </Button>
                            </motion.div>
                        </Link>
                        <Link to="/contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-900 dark:hover:text-teal-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    Contact Me
                                </Button>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Stats */}
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">50+</h3>
                            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Projects Built</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">2 Years</h3>
                            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Coding Exp</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">6+</h3>
                            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Startups Working</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">5 Years</h3>
                            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Startup Journey</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-full max-w-md aspect-square rounded-full md:rounded-3xl overflow-hidden border-4 border-slate-800/50 shadow-2xl shrink-0 bg-slate-900"
                >
                    <img
                        src="/raj.jpg"
                        alt="Raj Aryan"
                        className="w-full h-full object-cover opacity-90 mix-blend-normal hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </motion.div>
            </div>
        </section>
    );
}
