import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import logo from "../../assets/image/logo.jpg";
interface Props {
  handleScroll: (i: number) => void;
}

const Navigation = ({ handleScroll }: Props) => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) setNavbar(true);
    else setNavbar(false);
  };

  const handleResize = () => {
    if(window.innerWidth > 992) setWindowSize(false);
    else setWindowSize(true);
  }

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "scrolled" : ""}>
      <nav className={`container-sm nav`}>
        <section>
          <img src={logo} alt="BLUE Diamond" style={{ width: "7rem" }} />
        </section>

        <section
          className={`nav-links-container ${toggle ? " toggle-nav" : ""}`}
        >
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setToggle(!toggle)}
            className="disply_on_sm cancel"
          />
          <button onClick={() => handleScroll(0)} className="nav_btn">
            Home
          </button>
          <button onClick={() => handleScroll(1)} className="nav_btn">
            About
          </button>
          <button onClick={() => handleScroll(2)} className="nav_btn">
            Services
          </button>
          <button onClick={() => handleScroll(3)} className="nav_btn">
            Room
          </button>
          <button onClick={() => handleScroll(4)} className="nav_btn">
            Testimonial
          </button>
          <button onClick={() => handleScroll(5)} className="nav_btn">
            Blog
          </button>
          <button onClick={() => handleScroll(6)} className="nav_btn">
            Contact
          </button>
        </section>
        {
          windowSize ? <div className="d-flex">
          {!navbar && <button className="hvr-btn">BOOK NOW</button>}
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setToggle(!toggle)}
            className="disply_on_sm bars mx-2"
          />
        </div> : 
        <button className={`hvr-btn ${ navbar ? "hide-book-btn" : "" }`}>BOOK NOW</button>
        }
      </nav>
    </header>
  );
};

export default Navigation;
