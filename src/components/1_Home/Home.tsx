import { forwardRef } from "react";
import Slider from "react-slick";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import "slick-carousel/slick/slick.css";
import "./style.css";


// import logo from "../../assets/image/logo.jpg";

import img_1 from "../../assets/image/hero/hero1.jpg"
import img_2 from "../../assets/image/hero/hero2.jpg"

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface CardProps {
  url: string
}

const SliderCard = ({url}: CardProps) => {
  return (
    <div className="home-slide-container">
      <img src={url} alt="" className="hero-bg-img"/>
      <div className="home-slide d-flex flex-column align-items-center">
        <Reveal
          keyframes={customAnimation}
          duration={1000}
          cascade
          damping={0.1}
        >
          {/* <img src={logo} alt="BLUE DIAMOND" style={{ width: "10rem" }} /> */}

          <h6 className="text-light fw-semibold my-4">
            UNIQUE PLACE AND LUXURY HOTEL
          </h6>
          <h1 className="text-light larg-font  text-center">
            LIFE ENJOY WITH <br /> THE GREATEST MOMENTS
          </h1>
          <button className="home-btn my-3">ROOMS & SUITS</button>
        </Reveal>
      </div>
    </div>
  );
};

const Home = forwardRef<HTMLDivElement>(({}, ref) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div ref={ref} className="full_vh home w-100 bg-blac aaaa">
      <Slider {...settings} className="p-0">
        <SliderCard url={img_1}/>
        <SliderCard url={img_2}/>
      </Slider>
      {/* <Check /> */}
    </div>
  );
});

export default Home;
