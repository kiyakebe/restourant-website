import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import feature_img from '../../assets/image/features/feature-1.jpg'

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(4rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PromotionOne = () => {
  return (
    <div className="container-fluid bg-light-s my-5">
      <div className="container-md my-5 my-5">

        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-5 bg-primary">

            <div className="story-img feature-img-container w-100">
                <img src={feature_img} alt="GYM" className="promo-img" />
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-cente service-description">
              <p className="mb-3">
                Over the years, RoofMaster has grown into a leading provider of
                roofing solutions for homes and businesses in the [region]. Its
                team of certified technicians has a reputation for delivering
                the highest level of workmanship, using only the best materials
                and techniques. RoofMaster is also known for its exceptional
                customer service, with a commitment to responding quickly to
                client inquiries and working closely with each client to ensure
                their complete satisfaction.
              </p>
              <p className="mb-3">
                Today, RoofMaster is proud to be a trusted and respected name in
                the roofing industry, and looks forward to many more years of
                serving its valued clients.
              </p>
              <p className="fw-bold">The RoofMaster Team</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionOne;
