
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/common/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import Profiles from '../pages/Profiles';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
                <Route path="experience" element={<Experience />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profiles" element={<Profiles />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
