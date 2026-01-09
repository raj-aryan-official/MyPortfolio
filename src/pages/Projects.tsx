
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { RevealOnScroll } from '../components/common/RevealOnScroll';

const Projects = () => {
    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll width="100%">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Featured Projects
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A curated selection of my work across Full Stack Development, Mobile Apps, and System Design.
                        </p>
                    </div>
                </RevealOnScroll>

                <ProjectGrid />
            </div>
        </div>
    );
};

export default Projects;
