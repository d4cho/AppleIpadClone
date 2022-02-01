import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const AnimRadialBlur = (props) => {
    const { animProgress, opacityProgress, myStyle } = props;
    const { scrollYProgress } = useViewportScroll();

    const testAnim = useTransform(scrollYProgress, animProgress, [0, 10, 100]);

    const radialBlurStyle = {
        background: 'radial-gradient(circle, transparent, black 20%)',
        height: '100vh',
        // position: 'fixed',
        // top: 100,
        // zIndex: 100,
    };

    return (
        <motion.div
            style={{
                ...radialBlurStyle,
                background: `radial-gradient(circle, transparent, black ${testAnim}%)`,
            }}
        ></motion.div>
    );
};

export default AnimRadialBlur;
