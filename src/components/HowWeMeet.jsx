import React, { useState } from 'react';
import "../Css/HowWeMeet.css";

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
            <i className="uil uil-web-grid hwm__icon"></i>
            <h3 className="hwm__title">Product <br /> Designer</h3>
          </div>
          <span className="hwm__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right hwm__button-icon"></i></span>
          <div className={toggleState === 1 ? "hwm__modal active-modal" : "hwm__modal"}>
            <div className="hwm__modal-content">
              <i className="uil uil-times hwm__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="hwm__modal-title">Product Designer</h3>
              <p className="hwm__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt cupiditate similique nemo asperiores id!</p>
            </div>
          </div>
        </div>


        <div className="hwm__content">
          <div>
            <i className="uil uil-arrow hwm__icon"></i>
            <h3 className="hwm__title">Ui/Ux <br /> Designer</h3>
          </div>
          <span className="hwm__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right hwm__button-icon"></i></span>
          <div className={toggleState === 2 ? "hwm__modal active-modal" : "hwm__modal"}>
            <div className="hwm__modal-content">
              <i className="uil uil-times hwm__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="hwm__modal-title">Ui/Ux Designer</h3>
              <p className="hwm__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt cupiditate similique nemo asperiores id!</p>

            </div>
          </div>
        </div>


        <div className="hwm__content">
          <div>
            <i className="uil uil-edit hwm__icon"></i>
            <h3 className="hwm__title">Viusal <br /> Designer</h3>
          </div>
          <span className="hwm__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right hwm__button-icon"></i></span>
          <div className={toggleState === 3 ? "hwm__modal active-modal" : "hwm__modal"}>
            <div className="hwm__modal-content">
              <i className="uil uil-times hwm__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="hwm__modal-title">Viusal Designer</h3>
              <p className="hwm__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt cupiditate similique nemo asperiores id!</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeMeet;