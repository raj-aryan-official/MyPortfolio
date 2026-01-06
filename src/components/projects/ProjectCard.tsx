
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project, priority = false }: { project: Project; priority?: boolean }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full"
        >
            <div className="h-48 overflow-hidden relative">
                <img
                    src={project.image}
                    alt={project.title}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                            title="View Code"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                            title="View Live"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <Link to={`/projects/${project.id}`} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1">{project.title}</h3>
                    </Link>
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 text-sm flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-md font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
