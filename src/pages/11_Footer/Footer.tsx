import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faArrowUp,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import img from "../../assets/image/logo.jpg";

interface Props {
  handleScroll: (i: number) => void;
}

const Footer = ({ handleScroll }: Props) => {
  return (
    <div className="container-fluid footer text-light ">
      <div className="container-md">
        <div className="row py-5">
          <div className="col-12 col-md-4 my-3">
            <img src={img} alt="LOGO" className="w-25" />
            <p className="fs-7 my-5">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat.
            </p>
            <span className="my-4 my-md-0">
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="footer-icon aspect-squer mx-2 fs-5"
                />
              </a>
            </span>
          </div>

          <div className="col-12 col-md-2">
            <h6 className="larg-font-sm my-4">Services Links</h6>
            <section className="d-flex flex-column justify-content-start ">
              <button onClick={() => handleScroll(0)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                Home
              </button>
              <button onClick={() => handleScroll(1)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                About
              </button>
              <button onClick={() => handleScroll(2)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                Services
              </button>
              <button onClick={() => handleScroll(3)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                Room
              </button>
              <button onClick={() => handleScroll(4)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                Testimonial
              </button>
              <button onClick={() => handleScroll(5)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                Blog
              </button>
              <button onClick={() => handleScroll(6)} className="footer-link my-1">
                <FontAwesomeIcon
                  icon={faLink}
                  className="footer-link-icon mx-2"
                />
                Contact
              </button>
            </section>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="larg-font-sm my-4">Information</h6>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faPhone}
                className="footer-icon info-icon me-3"
              />
              <section className="color">
                <p>1800-121-3637</p>
                <p>+91-7052-101-786</p>
              </section>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="footer-icon info-icon me-3"
              />
              <section className="color">
                <p>info@example.com</p>
              </section>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faMapMarker}
                className="footer-icon info-icon me-3"
              />
              <section className="color">
                <p>1247/Plot No. 39, 15th Phase, United States of America</p>
              </section>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="larg-font-sm my-4">Newsletter</h6>
            <p className="color">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              expedita.
            </p>
            <div className="w-100">
              <input
                type="email"
                placeholder="Email Address"
                className="sub-email w-100 p-2"
              />
              <button className="sub-btn w-100">Subscribe</button>
            </div>
            <p className="color">I agree to all terms and policies</p>
          </div>
        </div>

        <div className="d-flex justify-content-between footer-bottom-section py-3 px-2">
          <span className="my-3 my-md-0">
            ©Copyrights 2023 Hoexr All rights reserved.
          </span>
          <FontAwesomeIcon
            onClick={() => handleScroll(0)}
            icon={faArrowUp}
            className="footer-icon info-icon me-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
