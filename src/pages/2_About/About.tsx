import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import "./style.css";

import ceil from "../../assets/image/icons/ceil.png";
import pool from "../../assets/image/icons/pool.png";

import decoration_1 from "../../assets/image/about/icon-1.png";
import decoration_6 from "../../assets/image/about/icon-6.png";

import about_1 from "../../assets/image/about/about1-1.jpg";
import about_2 from "../../assets/image/about/about1-2.jpg";

interface Props {}

const customAnimation_r = keyframes`
  from {
    opacity: 0;
    transform: translateX(3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);;
  }
`;
const customAnimation_l = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);;
  }
`;

const About = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="container-md">
      <div className="d-flex flex-column flex-md-row  align-items-center justify-content-center">
        <Reveal
          keyframes={customAnimation_l}
          triggerOnce
          duration={1000}
          fraction={0.3}
          className="col-12 col-md-6 h-100 p-5"
        >
          <div className="about-images w-100 h-100 hide-on-sm">
            <div>
              <img src={decoration_1} alt="" className="decor decor_1" />
              <img src={decoration_6} alt="" className="decor decor_2" />
            </div>

            <div className="img-1 img-hover">
              <img src={about_1} alt="" className="about-img" />
            </div>
            <div className="img-2 img-hover">
              <img src={about_2} alt="" className="about-img" />
            </div>
          </div>
        </Reveal>

        <Reveal
          keyframes={customAnimation_r}
          triggerOnce
          duration={1000}
          fraction={0.3}
          className="col-12 col-md-6 pe-5"
        >
          <div>
            <p className="fs-5">HOEXR LUXURY HOTEL</p>
            <h1 className="larg-font">
              Most Safe & Rated <br /> Hotel in London.
            </h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo maecenas accumsan
              lacus vel facilisis.
            </p>
            <section className="d-flex">
              <div className="col d-flex">
                <img src={ceil} alt="" width={"70"} />
                <p>
                  The Best <br />
                  Lighting
                </p>
              </div>
              <div className=" flex-grow-1 "></div>
              <div className="col d-flex">
                <img src={pool} alt="" width={"70"} />
                <p>
                  The Best <br />
                  Lighting
                </p>
              </div>
            </section>
            <section className="d-flex my-5">
              <button className="hvr-btn">DISCOVER MORE</button>
              <div className="d-flex align-items-center mx-4">
                <FontAwesomeIcon icon={faPhoneVolume} className="fs-1 mx-4" />
                <p>
                  BOOKING NOW <br /> <span>956 220 6666</span>
                </p>
              </div>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
});

export default About;
