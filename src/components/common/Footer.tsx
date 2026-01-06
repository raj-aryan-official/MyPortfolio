

export const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
                <p>© {new Date().getFullYear()} Raj Aryan. All rights reserved.</p>
            </div>
        </footer>
    );
};
