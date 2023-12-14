import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import logo from '../../assets/image/logo.jpg'
interface Props {
  handleScroll: (i: number) => void;
}

const Navigation = ({ handleScroll }: Props) => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY > 100) setNavbar(true)
    else setNavbar(false)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={navbar ? "scrolled" : ""}>
      <nav className= {`container-sm nav`}>
      <section>
        <FontAwesomeIcon icon={faXmark} className="disply_on_sm" />
        <img src={logo} alt="BLUE Diamond" style={{width: '7rem'}}/>
      </section>
      <section>
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
      <button className="hvr-btn">BOOK NOW</button>
      <FontAwesomeIcon icon={faBars} className="disply_on_sm" />
    </nav>
    </header>
  );
};

export default Navigation;
