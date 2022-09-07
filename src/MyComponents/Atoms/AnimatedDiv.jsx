import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const AnimatedDiv = (props) => {
    const {
        animProgress,
        opacityProgress,
        scaleProgress,
        xPosProgress,
        yPosProgress,
        img,
        text,
        myStyle,
    } = props;
    const { scrollYProgress } = useViewportScroll();

    const opacityAnim = useTransform(
        scrollYProgress,
        animProgress,
        opacityProgress
    );
    const scaleAnim = useTransform(
        scrollYProgress,
        animProgress,
        scaleProgress
    );
    const xPosAnim = useTransform(scrollYProgress, animProgress, xPosProgress);
    const yPosAnim = useTransform(scrollYProgress, animProgress, yPosProgress);

    return (
        <motion.div
            style={{
                ...myStyle,
                scale: scaleAnim,
                x: xPosAnim,
                y: yPosAnim,
                opacity: opacityAnim,
            }}
        >
            {text ? text : <img src={img} alt='ipad' />}
        </motion.div>
    );
};

export default AnimatedDiv;
