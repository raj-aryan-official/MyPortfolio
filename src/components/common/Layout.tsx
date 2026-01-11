
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Suspense } from 'react';
import { Loading } from './Loading';


export const Layout = () => {
    return (
        <div className="min-h-screen transition-colors duration-300 relative">

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
