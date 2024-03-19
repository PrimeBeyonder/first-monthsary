import React, { useState } from 'react';
import "../Css/HowWeMeet.css";
import img1 from "../assets/hwm1.jpg";
import img2 from "../assets/hwm2.jpg";
import img3 from "../assets/hwm3.jpg";
import img4 from "../assets/hwm4.jpg";
import sry from "../assets/peach-cat-cute.gif";


const HowWeMeet = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="hwe section" id='hwm'>
      <h2 className="section__title">How We Meet</h2>
      <span className="section__subtitle">Our Convos</span>
      <div className="hwm__container container grid">
        <div className="hwm__content">
          <div>
            <i class="uil uil-envelope-heart hwm__icon"></i>
            <h3 className="hwm__title">Our <br />First Convo</h3>
          </div>
          <span className="hwm__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right hwm__button-icon"></i></span>
          <div className={toggleState === 1 ? "hwm__modal active-modal" : "hwm__modal"}>
            <div className="hwm__modal-content">
              <i className="uil uil-times hwm__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="hwm__modal-title">First Connection <i class="uil uil-heart-alt"></i></h3>
              <div className='hwm__img-container'>
                <img src={img1} className='hwm__img' />
                <img src={img2} className='hwm__img' />
              </div>
              <p className="hwm__modal-description">Since our first conversation on December 31, 2023, we have formed a unique connection that has been a lifelong journey. Our initial casual conversations quickly turned into a strong emotional bond</p>
            </div>
          </div>
        </div>


        <div className="hwm__content">
          <div>
            <i class="uil uil-envelope-heart hwm__icon"></i>
            <h3 className="hwm__title">How It<br /> Went</h3>
          </div>
          <span className="hwm__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right hwm__button-icon"></i></span>
          <div className={toggleState === 2 ? "hwm__modal active-modal" : "hwm__modal"}>
            <div className="hwm__modal-content">
              <i className="uil uil-times hwm__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="hwm__modal-title">How It Went <i class="uil uil-heart-alt"></i></h3>
              <div className='hwm__img-container'>
                <img src={img3} className='hwm__img' />
                <img src={img4} className='hwm__img' />
              </div>
              <p className="hwm__modal-description">mid-February, we both confessed our love. The moment we shared our feelings, leading to your sweet "yes" on February 20th, was one of the best moments of my life.</p>

            </div>
          </div>
        </div>


        <div className="hwm__content">
          <div>
            <i class="uil uil-envelope-heart hwm__icon"></i>
            <h3 className="hwm__title">How Its <br /> Going</h3>
          </div>
          <span className="hwm__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right hwm__button-icon"></i></span>
          <div className={toggleState === 3 ? "hwm__modal active-modal" : "hwm__modal"}>
            <div className="hwm__modal-content">
              <i className="uil uil-times hwm__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="hwm__modal-title">How Its Going <i class="uil uil-heart-alt"></i></h3>
              <div className='hwm__img-container'>
                <img src={sry} className='hwm__img' />

              </div>
              <p className="hwm__modal-description">I cannot take the thought of losing you. My love for you, like the universe itself, began at a certain point in time but has since expanded into something immensely profound and beautiful</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeMeet;