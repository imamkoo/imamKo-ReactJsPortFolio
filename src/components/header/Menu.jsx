import "./Menu.css";

const Menu = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          imam.ko
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
