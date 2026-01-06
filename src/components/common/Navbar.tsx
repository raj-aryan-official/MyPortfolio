import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { clsx } from 'clsx';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        return location.pathname === path ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400';
    };

    return (
        <nav className={clsx(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm" : "bg-transparent border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
                        RAJ ARYAN
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-8">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className={clsx(isActive(link.path), 'transition-colors duration-200')}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-700">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-5 fade-in duration-200 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    isActive(link.path),
                                    'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
