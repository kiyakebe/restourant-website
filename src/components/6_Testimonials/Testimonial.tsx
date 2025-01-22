import { forwardRef } from "react";

import Slider from "react-slick";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import test_img_1 from "../../assets/image/testimonial/testi-1.jpg";

const customAnimation_txt = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customAnimation_img = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface TestimonialProps {
  url: string;
  name: string;
  description: string;
  role: string;
}

const TestimonialCard = ({
  url,
  name,
  description,
  role,
}: TestimonialProps) => {
  return (
    <div className="testimonial-card d-flex">
      <div className="test-img me-3">
        <Reveal keyframes={customAnimation_img} duration={1000} delay={300}>
          <img src={url} alt="" className="test-profile" />
        </Reveal>
      </div>
      <div className="ms-3">
        <Reveal
          keyframes={customAnimation_txt}
          duration={1000}
          cascade
          damping={0.1}
          delay={300}
          className="ms-3"
        >
          <p className="text-light">
            <FontAwesomeIcon icon={faStar} className="mx-1" />
            <FontAwesomeIcon icon={faStar} className="mx-1" />
            <FontAwesomeIcon icon={faStar} className="mx-1" />
            <FontAwesomeIcon icon={faStar} className="mx-1" />
            <FontAwesomeIcon icon={faStar} className="mx-1" />
          </p>
          <p className="text-light">{description}</p>
          <h3 className="text-light larg-font-sm">{name}</h3>
          <p className="text-light">{role}</p>
          <p >.</p>
        </Reveal>
      </div>
    </div>
  );
};

interface Props {}

const Testimonial = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="testimonial">
      <div ref={ref} className="container-md">
        <div className="py-5">
          <div className="devider-md"></div>
          <div className="testimonial-slider">
            <h5 className="text-light">WHAT SAYS FOR CUSTOMER</h5>
            <h1 className="larg-font text-light ">What Client's Say?</h1>
            <div className="devider-md"></div>
            <Slider {...settings} className="p-0">
              <TestimonialCard
                url={test_img_1}
                name="Jackson Smith"
                role="Guest Review"
                description="Restaurant inilla duiman at elit finibus viverra nec a lacus themo
            the nesudea seneoice misuscipit non sagie the fermen ziverra
            tristiue duru the ivite dianne onen nivami acsestion augue artine."
              />
              <TestimonialCard
                url={test_img_1}
                name="Jackson Smith"
                role="Guest Review"
                description="Restaurant inilla duiman at elit finibus viverra nec a lacus themo
            the nesudea seneoice misuscipit non sagie the fermen ziverra
            tristiue duru the ivite dianne onen nivami acsestion augue artine."
              />
              <TestimonialCard
                url={test_img_1}
                name="Jackson Smith"
                role="Guest Review"
                description="Restaurant inilla duiman at elit finibus viverra nec a lacus themo
            the nesudea seneoice misuscipit non sagie the fermen ziverra
            tristiue duru the ivite dianne onen nivami acsestion augue artine."
              />
            </Slider>
          </div>
          <div className="devider-md"></div>
        </div>
      </div>
    </div>
  );
});

export default Testimonial;
