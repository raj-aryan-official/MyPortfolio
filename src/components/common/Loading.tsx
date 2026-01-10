
import { motion } from 'framer-motion';

export const Loading = () => {
    return (
        <div className="w-full h-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white dark:bg-slate-950">
            <div className="flex items-center gap-1.5 h-12">
                {[0, 1, 2, 3, 4].map((index) => (
                    <motion.div
                        key={index}
                        className="w-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                        initial={{ height: "10%" }}
                        animate={{ height: ["10%", "100%", "10%"] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.15,
                            ease: [0.4, 0, 0.2, 1] // Smooth bezier curve
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
