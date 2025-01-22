import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import "./style.css";

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

const PromotionBanner = () => {
  return (
    <div className="promo-banner">
      <div className="container-md">
        <div className="promo d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.1}
              className="align-self-end my-5"
            >
              <div>
                <h5 className="promo-title">PROMOTIONAL VIDEO</h5>
                <h1 className="larg-font my-5">
                  Book Hotal Rooms <br /> et Deals & Book Flights Online.
                </h1>
              </div>
            </Reveal>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-st justify-content-md-center align-items-center">
            <FontAwesomeIcon icon={faPlay} className="promo-play mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
