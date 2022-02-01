import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import ipadImg from '../../Assets/Images/ipad-anim.png';

const ImageAnim = (props) => {
    const {
        animProgress,
        opacityProgress,
        scaleProgress,
        yPosProgress,
        zRotProgress,
        textAnimProgress,
        textOpacityProgress,
        top,
    } = props;
    const { scrollYProgress } = useViewportScroll();
    const opacityAnim = useTransform(scrollYProgress, animProgress, opacityProgress);
    const scaleAnim = useTransform(scrollYProgress, animProgress, scaleProgress);
    const yPosAnim = useTransform(scrollYProgress, animProgress, yPosProgress);
    const zRotAnim = useTransform(scrollYProgress, animProgress, zRotProgress);

    const divStyle = {
        width: '100%',
        scale: 1,
        position: 'relative',
        top: top,
        display: 'flex',
        justifyContent: 'center',
        rotateZ: -10,
        left: 120,
    };

    const ipadDesc = {
        textAlign: 'center',
        color: '#fff',
        fontSize: '35px',
        fontWeight: 600,
        position: 'relative',
        top: top - 50,
        width: 800,
        margin: '0 auto',
    };

    const textOpacityAnim = useTransform(scrollYProgress, textAnimProgress, textOpacityProgress);

    return (
        <>
            <motion.div
                style={{
                    ...divStyle,
                    scale: scaleAnim,
                    y: yPosAnim,
                    opacity: opacityAnim,
                    rotateZ: zRotAnim,
                }}
            >
                <img src={ipadImg} alt='ipad' />
            </motion.div>
            <motion.div
                style={{
                    opacity: textOpacityAnim,
                }}
            >
                <div style={ipadDesc}>
                    The ultimate iPad experience. Now with breakthrough M1 Performance, a
                    breathtaking XDR display and blazing-fast 5G wireless. Buckle up.
                </div>
            </motion.div>
        </>
    );
};

export default ImageAnim;
