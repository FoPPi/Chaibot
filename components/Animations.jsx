"use client"
import { motion, AnimatePresence } from "framer-motion";

export const ShowUp = ({ delay, children }) => (
    <AnimatePresence>
        <motion.div initial={{opacity: 0, y: 15 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{delay: delay}}
                    viewport={{once: false, amount: 0.25}}>
            {children}
        </motion.div>
    </AnimatePresence>
);

export const ShowArrWithDelay = ({ delay, children }) => {
    return (
        <AnimatePresence>
            {children.map((child, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * delay }}
                    viewport={{once: false, amount: 0.25}}
                >
                    {child}
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export const ShowWithDelay = ({delay, children }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: delay }}
                viewport={{once: false, amount: 0.25}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export const ButtonAnim = ({className, children }) => {
    return (
        <AnimatePresence>
            <motion.button
                className={className}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.button>
        </AnimatePresence>
    );
};