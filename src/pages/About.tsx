
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';


export const About = () => {
    return (
        <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Header */}
                        <section>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-4">
                                <span className="text-blue-600 dark:text-blue-400">⚡</span> whoami
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                Startup founder and Computer Science student driven by building impactful solutions and helping businesses turn ideas into reality.
                            </p>
                        </section>

                        {/* Story */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                The Backstory
                            </h2>
                            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 max-w-none">
                                <p className="mb-4">
                                    Hello! I’m Raj Aryan. My journey into the startup world began over five years ago with a simple curiosity about how businesses grow and ideas turn into reality. What started as helping a few founders quickly evolved into a long-term commitment to building and supporting startups.
                                </p>
                                <p className="mb-4">
                                    Over the past 5+ years, I’ve worked with more than 6 startups founding some, partnering in others, and closely supporting many along the way. During this journey, I’ve helped 20+ startups and businesses shape their ideas, make early decisions, and move from uncertainty to clarity.
                                </p>
                                <p className="mb-4">
                                    I enjoy working behind the scenes as much as leading from the front listening to founders, understanding business challenges, and finding practical ways to create impact. Every startup has a different story, and being part of so many has taught me the value of patience, adaptability, and long-term thinking.
                                </p>
                                <p>
                                    Today, I continue to work with startups across different stages, helping them grow with confidence and purpose. For me, it’s not just about building companies, it’s about building trust, relationships, and meaningful progress.
                                </p>
                            </div>
                        </section>

                        {/* Academic Journey */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                                Academic Journey
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                A journey shaped by strong academic foundations, science-driven thinking, and continuous learning across data science, computer science, and emerging technologies.
                            </p>

                            <div className="space-y-12 pl-4 border-l-2 border-slate-200 dark:border-slate-800">

                                {/* B.Tech CSE */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-900" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.Tech - Computer Science Engineering (AI & ML)</h3>
                                        <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded w-fit">2024 – Present</span>
                                    </div>
                                    <div className="mb-3">
                                        <a href="https://polariscampus.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline block">
                                            Polaris School of Technology, Bengaluru
                                        </a>
                                        <a href="https://www.msu.edu.in/" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mt-1">
                                            (Connected with Medhavi Skills University)
                                        </a>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Alongside my data science degree, I am pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning. This is where my technical journey truly takes shape covering computer science fundamentals, modern software development, AI/ML concepts, and real world applications. This program plays a central role in building my technical depth, problem-solving ability, and industry ready skill set.
                                    </p>
                                </div>

                                {/* BS Data Science */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-900" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.S. - Data Science & Applications</h3>
                                        <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded w-fit">2024 – Present</span>
                                    </div>
                                    <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline mb-2 block">
                                        Indian Institute of Technology Madras (IIT Madras)
                                    </a>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        I am currently pursuing a B.S. in Data Science and Applications from IIT Madras. This program is shaping my understanding of data driven decision making, statistics, analytical thinking, and real world applications of data science. It has strengthened my ability to approach problems with a research oriented and solution focused mindset.
                                    </p>
                                </div>

                                {/* Class 12 */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Senior Secondary Education (Class 12 – PCM)</h3>
                                        <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded w-fit">2021 – 2023</span>
                                    </div>
                                    <a href="https://www.aspcspatna.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline mb-2 block">
                                        A S S Patna Central School, Patna
                                    </a>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        I pursued my higher secondary education with Physics, Chemistry, and Mathematics (PCM) as my core subjects. This phase strengthened my analytical mindset and quantitative reasoning. I learned structured problem solving, critical thinking, and discipline skills that played a key role in preparing me for engineering and data driven fields.
                                    </p>
                                </div>

                                {/* Class 10 */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Secondary Education (Class 10)</h3>
                                        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded w-fit">2019 – 2021</span>
                                    </div>
                                    <a href="https://vidyajyotischool.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline mb-2 block">
                                        Vidya Jyoti School, Nalanda
                                    </a>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        My academic foundation began at Vidya Jyoti School, where I developed strong discipline, curiosity, and a habit of consistent learning. During these years, I built core problem solving skills and a deep interest in logical thinking, mathematics, and understanding how things work which later shaped my inclination toward science and technology.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Current Focus */}
                        <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                            <h2 className="text-2xl font-bold text-white mb-4">Current Focus & Aspirations</h2>
                            <div className="prose dark:prose-invert text-slate-300 max-w-none">
                                <p className="mb-4">
                                    I am currently focused on building meaningful solutions that make everyday life easier for normal people, especially aiming to support and uplift the lower and underserved sections of society through my startup initiatives. My goal is to create impact-driven products that help individuals upgrade their skills, opportunities, and quality of life.
                                </p>
                                <p className="mb-4">
                                    Alongside this, I actively aspire to contribute to open-source projects, collaborate with communities, and share knowledge to build tools that benefit everyone. I am equally passionate about helping new startups and founders, guiding them through early challenges, and supporting ideas that aim to create positive, long-term change.
                                </p>
                                <p>
                                    At the core, my aspiration is to build with purpose working on projects that matter, empowering people, and growing alongside communities and innovators who believe in making technology and entrepreneurship accessible to all.
                                </p>
                            </div>

                        </section>

                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="space-y-6">

                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center sticky top-24"
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                                className="relative w-32 h-32 mx-auto mb-4"
                            >
                                <img
                                    src="/raj2.jpg"
                                    alt="Raj Aryan"
                                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
                                />
                                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Raj Aryan</h2>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Founder & Developer</p>
                                <p className="text-slate-500 text-sm mb-6 flex items-center justify-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Bengaluru, Karnataka, India
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex justify-center gap-3 mb-8"
                            >
                                <a href="https://github.com/raj-aryan-official" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/rajaryanofficial/" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:rajaryan620666@gmail.com" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a href="https://leetcode.com/u/raj_aryan_official/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                    </svg>
                                </a>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { val: "50+", label: "Projects Shipped" },
                                    { val: "6+", label: "Startups Worked With" },
                                    { val: "2+ Years", label: "Coding Experience" },
                                    { val: "5+ Years", label: "Startup & Business Journey" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (index * 0.1), type: "spring", stiffness: 200, damping: 20 }}
                                        className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800"
                                    >
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{stat.val}</h3>
                                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
