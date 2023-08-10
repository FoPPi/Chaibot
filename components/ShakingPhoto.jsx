import { motion } from 'framer-motion';
import cup from '../public/cup.svg';
import Image from "next/image";

export default function ShakingPhoto() {
    const photoVariants = {
        initial: {
            rotate: -15,
            x: -3,
            y: -4,
        },
        animate: {
            rotate: [-16, -13, -15, -12, -13, -15, -16],
            x: [-3, 3, -4, 4, -3, 3, -6, 6, -3],
            y: [-4, 1, -3, 8, 3, 5, -4, 3, -4],
            transition: {
                repeat: Infinity, // Бесконечная анимация
                duration: 25, // Длительность каждого кадра
            },
        },
    };

    return (
        <motion.div
            className="hidden xl:inline-block"
            initial="initial"
            animate="animate"
            variants={photoVariants}
        >
            <Image
                className="w-[650px]"
                src={cup}
                alt="Flying Photo"
                loading="eager"
            />
        </motion.div>
    );
}