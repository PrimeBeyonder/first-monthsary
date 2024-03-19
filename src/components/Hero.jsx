import React, { useState, useEffect } from 'react';
import "../Css/Hero.css";
import TrackVisibility from "react-on-screen";
import git from "../assets/kiss.gif"

const Hero = () => {


    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(30 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Pookie Bear", "Cutie Pie", "Wookie Pookie"];
    const period = 700;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updateText === fulltext) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="home section" id='home'>
            <div className='home__container container grid'>
                <div className="home__img">
                    <img src={git} />
                </div>
                <div className='home__subtitle'>
                    <TrackVisibility>
                        <h3><span className="txt-rotate" dataPeriod="600"><span className="wrap">I Love You My  {text}</span></span></h3>
                    </TrackVisibility>
                </div>

            </div>


        </section>
    )
}

export default Hero