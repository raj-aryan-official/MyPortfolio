
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/common/PageTransition';
import { Layout } from '../components/common/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import Profiles from '../pages/Profiles';

const AppRoutes = () => {
    const location = useLocation();

    return (
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
    );
};

export default AppRoutes;
