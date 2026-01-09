import { motion, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';

type AnimatedGroupProps = {
    children: ReactNode;
    className?: string;
    variants?: {
        container?: Variants;
        item?: Variants;
    };
    preset?: 'fade' | 'slide' | 'scale' | 'blur' | 'blur-slide';
};

export const AnimatedGroup = ({
    children,
    className,
    variants,
    preset = 'blur-slide',
}: AnimatedGroupProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        ...variants?.container,
    };

    const presets = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        slide: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        blur: {
            hidden: { opacity: 0, filter: 'blur(4px)' },
            visible: { opacity: 1, filter: 'blur(0px)' },
        },
        'blur-slide': {
            hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        },
    };

    const itemVariants = {
        ...presets[preset],
        ...variants?.item,
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={itemVariants}>{child}</motion.div>
            ))}
        </motion.div>
    );
};
