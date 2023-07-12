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
                1 years experience and always keep learning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Attractive User Interface Design: Creating visually appealing and intuitive designs to enhance the user experience.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Interactive Prototype Development: Building interactive prototypes to test and validate design concepts before implementation.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    In-depth User Research: Conducting comprehensive user research to understand user needs and preferences.
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
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
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
                3 years experience and always keep learning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Responsive Interface Development: Building responsive website interfaces, ensuring users can access them comfortably on various devices.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Website Performance Optimization: Ensuring fast and efficient website performance, allowing users to access content quickly.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Integration of Engaging Interfaces: Integrating attractive design with functional and interactive website interfaces.
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
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
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
                1 years experience and always keep learning.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Scalable System Development: Building a backend system that can scale and grow with the business.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Secure Data Protection: Ensuring data security by implementing best practices in development and information protection.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Seamless API Integration: Integrating various services and APIs smoothly to enhance system functionality and performance.
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
