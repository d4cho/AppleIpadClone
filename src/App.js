import './App.css';
import ImageAnim from './Components/Atoms/ImageAnim';
import TextAnim from './Components/Atoms/TextAnim';
import EvenMoreReasons from './Components/Views/EvenMoreReasons';
import ipadSideImg from './Assets/Images/ipad-side.jpeg';
import AnimatedDiv from './Components/Atoms/AnimatedDiv';
import { animStyles } from './Utils/Styles';

function App() {
    return (
        <div className='App'>
            <main className='Main'>
                <section className='AnimationSection1'>
                    <AnimatedDiv
                        animProgress={[0, 0.05, 0.1]}
                        opacityProgress={[1, 0.8, 0]}
                        scaleProgress={[0.5, 1.8, 1.8]}
                        xPosProgress={[-200, 100, 100]}
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
                <section className='AnimationSection2'>
                    <TextAnim
                        text={'M1'}
                        animProgress={[0.15, 0.175, 0.2, 0.34, 0.35]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[-500, -200, 0, 0, 0]}
                        top={420}
                    />
                    <TextAnim
                        text={'XDR'}
                        animProgress={[0.2, 0.225, 0.25, 0.345, 0.355]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        top={510}
                    />
                    <TextAnim
                        text={'5G'}
                        animProgress={[0.25, 0.275, 0.3, 0.35, 0.36]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        top={600}
                    />
                    <TextAnim
                        text={'OMG.'}
                        animProgress={[0.3, 0.325, 0.35, 0.365, 0.37]}
                        opacityProgress={[0, 1, 1, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[500, 200, 0, 0, 0]}
                        top={690}
                    />
                    <ImageAnim
                        animProgress={[0.36, 0.38, 0.4, 0.42, 0.44]}
                        opacityProgress={[0, 1, 1, 1, 1]}
                        scaleProgress={[1, 0.7, 0.5, 0.5, 0.5]}
                        yPosProgress={[300, 0, 0, 0, 0]}
                        zRotProgress={[-20, -5, 0, 0, 0]}
                        textAnimProgress={[0.39, 0.4, 0.41]}
                        textOpacityProgress={[0, 0.5, 1]}
                        top={700}
                    />
                </section>
                <section>
                    <EvenMoreReasons />
                </section>
                <section>bottom</section>
            </main>
        </div>
    );
}

export default App;
