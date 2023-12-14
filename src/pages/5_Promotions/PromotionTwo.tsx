import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import feature_img from "../../assets/image/features/feature-2.jpg";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(6rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PromotionTwo = () => {
  return (
    <Reveal
      keyframes={customAnimation}
      triggerOnce
      fraction={0.4}
      duration={2000}
    >
      <div className="container-fluid bg-light-s my-5">
        <div className="container-md my-5 my-5">
          <div className="promotion-container">
            <div className="story-img feature-img-container-right w-100 img-hover">
              <img src={feature_img} alt="GYM" className="promo-img" />
            </div>

            <div className="w-100 d-flex flex-column justify-content-center align-items-cente service-description-right">
              <h6 className="">DISCOVER</h6>
              <h1 className="larg-font my-4">The Restaurant</h1>
              <p className="mb-3">
                Restaurant inilla duiman at elit finibus viverra nec a lacus
                themo the nesudea seneoice misuscipit non sagie the fermen
                ziverra tristiue duru the ivite dianne onen nivami acsestion
                augue artine.
              </p>
              <button className="promo-btn">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default PromotionTwo;
