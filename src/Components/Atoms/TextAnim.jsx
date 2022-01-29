import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const TextAnim = (props) => {
    const { text, animProgress, opacityProgress, scaleProgress, yPosProgress, top } = props;
    const { scrollYProgress } = useViewportScroll();
    const opacityAnim = useTransform(scrollYProgress, animProgress, opacityProgress);
    const scaleAnim = useTransform(scrollYProgress, animProgress, scaleProgress);
    const yPosAnim = useTransform(scrollYProgress, animProgress, yPosProgress);

    React.useEffect(() => {
        console.log(scrollYProgress);
    }, [scrollYProgress]);

    const divStyle = {
        width: '100%',
        scale: 1,
        position: 'fixed',
        top: top,
        display: 'flex',
        justifyContent: 'center',
    };

    const textStyle = {
        textAlign: 'center',
        color: '#fff',
        fontSize: '80px',
        fontWeight: 600,
    };

    return (
        <motion.div
            style={{
                ...divStyle,
                scale: scaleAnim,
                y: yPosAnim,
                opacity: opacityAnim,
            }}
        >
            <div style={textStyle}>{text}</div>
        </motion.div>
    );
};

export default TextAnim;
