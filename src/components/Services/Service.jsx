import { useState } from "react";
import "./Services.css";

const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon">
              <h3 className="services__title">UI/UX Designer</h3>
            </i>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">UI/UX</h3>
              <p className="services__modal-description">
                2 years experience and always keep learning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web Design</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    UX Element Interactions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon">
              <h3 className="services__title">Front-end Developer</h3>
            </i>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Front-end</h3>
              <p className="services__modal-description">
                2 years experience and always keep learning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web Design</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    UX Element Interactions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon">
              <h3 className="services__title">Back-end Developer</h3>
            </i>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Back-end</h3>
              <p className="services__modal-description">
                2 years experience and always keep learning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web Design</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    UX Element Interactions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
