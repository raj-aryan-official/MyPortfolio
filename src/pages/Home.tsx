
import { Hero } from '../components/home/Hero';
import { StartupSkills } from '../components/home/StartupSkills';
import { Skills } from '../components/home/Skills';
import { CTA } from '../components/home/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <StartupSkills />
            <Skills />
            <CTA />
        </>
    );
};

export default Home;
