import './App.css';
import ImageAnim from './Components/Atoms/ImageAnim';
import TextAnim from './Components/Atoms/TextAnim';
import EvenMoreReasons from './Components/Views/EvenMoreReasons';

function App() {
    return (
        <div className='App'>
            <main className='Main'>
                <section style={{ backgroundColor: 'black', height: '100vh' }} />

                <section className='LetterScene'>
                    <TextAnim
                        text={'M1'}
                        animProgress={[0, 0.025, 0.05, 0.19, 0.2]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[-500, -200, 0, 0, 0]}
                        top={'150px'}
                    />
                    <TextAnim
                        text={'XDR'}
                        animProgress={[0.05, 0.075, 0.1, 0.195, 0.205]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        top={'240px'}
                    />
                    <TextAnim
                        text={'5G'}
                        animProgress={[0.1, 0.125, 0.15, 0.2, 0.21]}
                        opacityProgress={[0, 1, 0.7, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 0, 0]}
                        top={'330px'}
                    />
                    <TextAnim
                        text={'OMG.'}
                        animProgress={[0.15, 0.175, 0.2, 0.215, 0.22]}
                        opacityProgress={[0, 1, 1, 0.5, 0]}
                        scaleProgress={[20, 10, 1, 1, 1]}
                        yPosProgress={[500, 200, 0, 0, 0]}
                        top={'420px'}
                    />
                    <ImageAnim
                        animProgress={[0.21, 0.23, 0.25, 0.27, 0.29]}
                        opacityProgress={[0, 0.5, 1, 1, 1]}
                        scaleProgress={[1, 0.5, 0.3, 0.3, 0.3]}
                        yPosProgress={[300, 0, 0, 0, 0]}
                        zRotProgress={[-20, -5, 0, 0, 0]}
                        textAnimProgress={[0.24, 0.25, 0.26]}
                        textOpacityProgress={[0, 0.5, 1]}
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
