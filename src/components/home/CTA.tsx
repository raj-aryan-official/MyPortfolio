
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 -skew-y-3 transform origin-bottom-right scale-110" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Have an idea worth building?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    I collaborate with startups, founders, and growing teams to build real products that create impact.
                    Open to freelance work, startup partnerships, and long-term collaboration.
                </p>
                <Link to="/contact">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-lg">
                        Get In Touch
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </section>
    );
};
