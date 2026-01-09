
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const RevealOnScroll = ({ children, width = "fit-content", delay = 0.25 }: RevealOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 75 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
