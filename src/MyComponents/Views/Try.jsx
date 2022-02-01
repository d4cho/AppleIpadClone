import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import bg5G from '../../Assets/Images/5g-background.png';

const Try = () => {
    const { scrollYProgress } = useViewportScroll();

    // const opacityAnim = useTransform(scrollYProgress, [0,0,0], opacityProgress);
    // const scaleAnim = useTransform(scrollYProgress, [0,0,0], scaleProgress);
    // const xPosAnim = useTransform(scrollYProgress, [0,0,0], xPosProgress);
    // const yPosAnim = useTransform(scrollYProgress, [0,0,0], yPosProgress);

    React.useEffect(() => {
        console.log(scrollYProgress.current);
    }, [scrollYProgress]);

    const bgStyle = {
        backgroundImage: `url(${bg5G})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // background: 'radial-gradient(circle, transparent, black 1%)',
        height: '100%',
        // position: 'fixed',
        // top: 100,
    };

    return <div style={bgStyle}>test</div>;
};

export default Try;
