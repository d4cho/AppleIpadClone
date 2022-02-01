import './App.css';
import ImageAnim from './Components/Atoms/ImageAnim';
import TextAnim from './Components/Atoms/TextAnim';
import EvenMoreReasons from './Components/Views/EvenMoreReasons';
import ipadSideImg from './Assets/Images/ipad-side.jpeg';
import AnimatedDiv from './Components/Atoms/AnimatedDiv';
import AnimFiveG from './Components/Atoms/AnimFiveG';
import { animStyles } from './Utils/Styles';
import bg5g from './Assets/Images/5g-background.png';

function App() {
    return (
        <div className='App'>
            <main className='Main'>
                <section className='Supercharged-Animation-Section'>
                    <AnimatedDiv
                        animProgress={[0, 0.05, 0.1]}
                        opacityProgress={[1, 0.8, 0]}
                        scaleProgress={[0.5, 1.8, 1.8]}
                        xPosProgress={[100, 1200, 1200]}
                        yPosProgress={[100, -850, -850]}
                        img={ipadSideImg}
                        myStyle={animStyles.ipadSide}
                    />
                    <AnimatedDiv
                        animProgress={[0, 0.05, 0.1]}
                        opacityProgress={[1, 0.8, 0]}
                        scaleProgress={[1, 0.8, 0.6]}
                        xPosProgress={[0, 0, 0]}
                        yPosProgress={[0, 0, 0]}
                        text={'iPad Pro'}
                        myStyle={animStyles.ipadPro}
                    />
                    <AnimatedDiv
                        animProgress={[0, 0.05, 0.1, 0.15]}
                        opacityProgress={[1, 1, 0.5, 0]}
                        scaleProgress={[1, 0.9, 0.8, 0.8]}
                        xPosProgress={[0, 0, 0, 0]}
                        yPosProgress={[0, 0, 0, 0]}
                        text={
                            <div style={animStyles.superchargedText}>
                                Supercharged by the Apple M1 chip.
                            </div>
                        }
                        myStyle={animStyles.superchargedGradient}
                    />
                </section>

                <section className='FiveG-Animation-Section'>
                    <AnimFiveG
                        animProgress={[0.15, 0.2, 0.25]}
                        opacityProgress={[0, 1, 0]}
                        img={bg5g}
                        myStyle={animStyles.bg5g}
                    />
                    <AnimatedDiv
                        animProgress={[0.2, 0.25, 0.3, 0.35]}
                        opacityProgress={[0, 1, 1, 0]}
                        scaleProgress={[5, 3, 1, 1]}
                        xPosProgress={[-800, -400, 0, 0]}
                        yPosProgress={[0, 0, 0, 0]}
                        text={<div style={animStyles.fiveG}>5G</div>}
                        myStyle={animStyles.fiveGGradient}
                    />
                    <AnimatedDiv
                        animProgress={[0.2, 0.25, 0.3, 0.35, 0.4]}
                        opacityProgress={[0, 1, 1, 1, 0]}
                        scaleProgress={[5, 3, 1, 1, 1]}
                        xPosProgress={[0, 0, 0, 0, 0]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        text={'Superfast cellular speeds.'}
                        myStyle={animStyles.superfastText}
                    />
                    <TextAnim
                        text={'M1'}
                        animProgress={[0.4, 0.425, 0.45, 0.59, 0.6]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[-500, -200, 0, 0, 0]}
                        top={420}
                    />
                    <TextAnim
                        text={'XDR'}
                        animProgress={[0.45, 0.475, 0.5, 0.595, 0.605]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        top={510}
                    />
                    <TextAnim
                        text={'5G'}
                        animProgress={[0.5, 0.525, 0.55, 0.6, 0.61]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        top={600}
                    />
                    <TextAnim
                        text={'OMG.'}
                        animProgress={[0.55, 0.575, 0.6, 0.615, 0.62]}
                        opacityProgress={[0, 1, 1, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[500, 200, 0, 0, 0]}
                        top={690}
                    />
                    <ImageAnim
                        animProgress={[0.61, 0.63, 0.65, 0.67, 0.69]}
                        opacityProgress={[0, 1, 1, 1, 1]}
                        scaleProgress={[1, 0.85, 0.7, 0.7, 0.7]}
                        yPosProgress={[300, 0, 0, 0, 0]}
                        zRotProgress={[-20, -5, 0, 0, 0]}
                        textAnimProgress={[0.64, 0.65, 0.66]}
                        textOpacityProgress={[0, 0.5, 1]}
                        top={3900}
                    />
                </section>
                <section>
                    <EvenMoreReasons />
                </section>
            </main>
        </div>
    );
}

export default App;
