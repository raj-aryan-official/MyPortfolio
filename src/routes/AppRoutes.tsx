import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/common/PageTransition';
import { Layout } from '../components/common/Layout';
import { Loading } from '../components/common/Loading';

// Lazy load pages for code splitting
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const Experience = lazy(() => import('../pages/Experience'));
const Contact = lazy(() => import('../pages/Contact'));
const Profiles = lazy(() => import('../pages/Profiles'));

const AppRoutes = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<PageTransition><Home /></PageTransition>} />
                        <Route path="about" element={<PageTransition><About /></PageTransition>} />
                        <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
                        <Route path="projects/:id" element={<PageTransition><ProjectDetails /></PageTransition>} />
                        <Route path="experience" element={<PageTransition><Experience /></PageTransition>} />
                        <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
                        <Route path="profiles" element={<PageTransition><Profiles /></PageTransition>} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </Suspense>
    );
};

export default AppRoutes;
