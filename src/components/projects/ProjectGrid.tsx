import { useState } from 'react';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectGrid = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projects.filter(
        (project) => filter === 'all' || project.category === filter
    );

    return (
        <div className="space-y-8">
            <ProjectFilter activeCategory={filter} onCategoryChange={setFilter} />

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-slate-500 dark:text-slate-400">
                    No projects found in this category.
                </div>
            )}
        </div>
    );
};
