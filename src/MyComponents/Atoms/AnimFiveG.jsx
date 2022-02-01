import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const AnimFiveG = (props) => {
    const { animProgress, opacityProgress, img, myStyle } = props;
    const { scrollYProgress } = useViewportScroll();

    const opacityAnim = useTransform(scrollYProgress, animProgress, opacityProgress);

    return (
        <motion.div
            style={{
                ...myStyle,
                opacity: opacityAnim,
            }}
        >
            <img src={img} alt='ipad' style={{ height: '100vh' }} />
        </motion.div>
    );
};

export default AnimFiveG;
