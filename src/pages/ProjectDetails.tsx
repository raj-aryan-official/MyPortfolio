
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/common/Button';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/projects" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>

                {/* Hero Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg mb-10 aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-8">
                            <li>User Authentication & Authorization</li>
                            <li>Real-time Data Updates</li>
                            <li>Responsive Mobile-First Design</li>
                            <li>Secure Payment Processing</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Project Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400 block mb-1">Category</span>
                                    <span className="font-medium text-slate-900 dark:text-white capitalize">{project.category}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400 block mb-1">Tech Stack</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button variant="outline" className="w-full justify-center">
                                            <Github className="w-4 h-4 mr-2" />
                                            View Code
                                        </Button>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full justify-center">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;
