import { motion } from 'framer-motion';
import Image from "next/image";
import ellipse1 from '../public/ellipses/Ellipse 1.svg';
import ellipse2 from '../public/ellipses/Ellipse 2.svg';

const BackgroundWithLights = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: -1,
            }}
        >
            {/* Пучок света справа ниже середины */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-20%',
                }}
                animate={{
                    x: [-10, 20, 10, -20, -10],
                    y: [-10, -20, 10, 20, -10],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                }}
            >
                <Image src={ellipse1} alt="ellipse1"/>
            </motion.div>

            {/* Пучок света слева снизу */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: "-2%",
                    left: '5%',
                }}
                animate={{
                    x: [-10, -20, 10, 20, -10],
                    y: [-10, -20, 10, 20, -10],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                }}
            >
                <Image src={ellipse2} alt="ellipse2"/>
            </motion.div>
        </div>
    );
};

export default BackgroundWithLights;
