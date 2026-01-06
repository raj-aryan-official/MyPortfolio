
import { clsx } from 'clsx';


const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI' },
    { id: 'game', label: 'Game' },
    { id: 'system-design', label: 'System Design' },
];

interface ProjectFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export const ProjectFilter = ({ activeCategory, onCategoryChange }: ProjectFilterProps) => {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={clsx(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
                        activeCategory === category.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
                    )}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
};
