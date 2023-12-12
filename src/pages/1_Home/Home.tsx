import { forwardRef } from "react";
import Slider from "react-slick";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import "slick-carousel/slick/slick.css";
import "./style.css";

import Check from "./Check";

import logo from "../../assets/image/logo.jpg";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);;
  }
`;

interface Props {}

const SliderCard = () => {
  return (
    <div className="home-slide-container">
      <div className="home-slide d-flex flex-column align-items-center ">
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          duration={1000}
          cascade
          damping={0.1}
        >
          <img src={logo} alt="BLUE DIAMOND" style={{ width: "10rem" }} />

          <h6 className="text-light fw-semibold my-4">
            UNIQUE PLACE AND LUXURY HOTEL
          </h6>
          <h1 className="text-light larg-font h1-2x text-center">
            LIFE ENJOY WITH <br /> THE GREATEST MOMENTS
          </h1>
          <button className="home-btn my-3">ROOMS & SUITS</button>
        </Reveal>
      </div>
    </div>
  );
};

const Home = forwardRef<HTMLDivElement, Props>(({}, ref) => {
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
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Slider>
      <Check />
    </div>
  );
});

export default Home;
