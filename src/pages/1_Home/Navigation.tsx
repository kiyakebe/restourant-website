import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";

import logo from "../../assets/image/logo.jpg";

const NavIcons = () => {
  return (
    <div className="d-flex social-icon w-100">
      <a
        href="#"
        className="nav-social-icons col-3 text-light d-flex justify-content-center"
      >
        <FontAwesomeIcon icon={faFacebookF} className="" />
      </a>
      <a
        href="#"
        className="nav-social-icons col-3 text-light d-flex justify-content-center"
      >
        <FontAwesomeIcon icon={faTwitter} className="" />
      </a>
      <a
        href="#"
        className="nav-social-icons col-3 text-light d-flex justify-content-center"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="" />
      </a>
      <a
        href="#"
        className="nav-social-icons col-3 text-light d-flex justify-content-center"
      >
        <FontAwesomeIcon icon={faYoutube} className="" />
      </a>
    </div>
  );
};

interface Props {
  handleScroll: (i: number) => void;
}

const Navigation = ({ handleScroll }: Props) => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    if (window.outerWidth > 992) setWindowSize(false);
    else setWindowSize(true);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 100) setNavbar(true);
    else setNavbar(false);
  };

  const handleResize = () => {
    if (window.outerWidth > 992) setWindowSize(false);
    else setWindowSize(true);
    console.log(window.outerWidth);
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "scrolled" : ""}>
      <nav className={`container-md nav px-2`}>
        <section>
          <img src={logo} alt="BLUE Diamond" style={{ width: "7rem" }} />
        </section>

        <section
          className={`nav-links-container ${toggle ? " toggle-nav" : ""}`}
        >
          <div className="my-2 disply_on_sm">
            <img src={logo} alt="" style={{ width: "7rem" }} />
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setToggle(!toggle)}
              className="disply_on_sm cancel"
            />
          </div>
          <button
            onClick={() => {
              handleScroll(0);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            Home
          </button>
          <button
            onClick={() => {
              handleScroll(1);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            About
          </button>
          <button
            onClick={() => {
              handleScroll(2);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            Services
          </button>
          <button
            onClick={() => {
              handleScroll(3);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            Room
          </button>
          <button
            onClick={() => {
              handleScroll(4);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            Testimonial
          </button>
          <button
            onClick={() => {
              handleScroll(5);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            Blog
          </button>
          <button
            onClick={() => {
              handleScroll(6);
              setToggle(!toggle);
            }}
            className="nav_btn"
          >
            Contact
          </button>

          {/* mobile mode contact */}
          {windowSize && (
            <div className="mt-3 px-3">
              <div className="d-flex my-2 ">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="nav-contact-icon me-3"
                />
                <section className="text-light">
                  <p>1800-121-3637</p>
                  <p>+91-7052-101-786</p>
                </section>
              </div>
              <div className="d-flex my-2 ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="nav-contact-icon me-3"
                />
                <section className="text-light">
                  <p>info@example.com</p>
                </section>
              </div>
              <div className="d-flex my-2 ">
                <FontAwesomeIcon
                  icon={faMapMarker}
                  className="nav-contact-icon me-3"
                />
                <section className="text-light">
                  <p>1247/Plot No. 39, 15th Phase, United States of America</p>
                </section>
              </div>
              <NavIcons />
            </div>
          )}
        </section>
        {windowSize ? (
          <div className="d-flex">
            {!navbar && <button className="hvr-btn">BOOK NOW</button>}
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setToggle(!toggle)}
              className="disply_on_sm bars mx-2"
            />
          </div>
        ) : (
          <button className={`hvr-btn ${navbar ? "hide-book-btn" : ""}`}>
            BOOK NOW
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
