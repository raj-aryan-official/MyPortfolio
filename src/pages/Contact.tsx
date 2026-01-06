import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '../components/common/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `New message from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:rajaryan620666@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                                        <a href="mailto:rajaryan620666@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">rajaryan620666@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Bangalore, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/raj-aryan-official" className="p-2 bg-white dark:bg-slate-700 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rajaryanofficial/" className="p-2 bg-white dark:bg-slate-700 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://leetcode.com/u/raj_aryan_official/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-700 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                                <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
