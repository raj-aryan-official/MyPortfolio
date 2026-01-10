
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { Suspense } from 'react';
import { Loading } from './Loading';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <ScrollProgress />
            <Navbar />
            <main className="pt-16 min-h-[calc(100vh-4rem)]">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};
