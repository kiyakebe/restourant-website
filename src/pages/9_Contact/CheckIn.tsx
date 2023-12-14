import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

interface Props {}

const CheckIn = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <>
      <div className="devider"></div>
      <div className="devider"></div>

      <div className="checkin-container">
        <div ref={ref} className="container-md checkIn text-light">
          <div className="grid-item d-flex justify-content-center py-5 py-md-2">
            <form className="checkin-form">
              <p className="form-lead m-0">ROOMS & SUITES</p>
              <h1 className="larg-font form-title mb-5">Hotel Booking</h1>

              <input
                type="date"
                className="checkin-select my-2 px-2 py-3 w-100"
              />
              <input
                type="date"
                id="sel"
                className="checkin-select my-2 px-2 py-3 w-100"
              />

              <select
                name=""
                id=""
                className="checkin-select my-2 px-2 py-3 w-100"
              >
                <option value="a">Adult</option>
                <option value="a">Adult</option>
                <option value="a">Adult</option>
              </select>
              <br />
              <select
                name=""
                id=""
                className="checkin-select my-2 px-2 py-3 w-100"
              >
                <option value="a">Childeren</option>
                <option value="a">Childeren</option>
                <option value="a">Childeren</option>
              </select>

              <button className="checkin-btn w-100">CHECK AVAILABILITY</button>
            </form>
          </div>
          <div className="grid-item d-flex justify-content-center align-items-center py-5 py-md-2 px-3 ">
            <div>
              <p className="dark-text">HOEXR HOTEL</p>
              <h6 className="larg-font py-3">Check Availability</h6>
              <p className="dark-text">
                Each of our guest rooms feature a private bath, wi-fi, cable
                television and include full breakfast.
              </p>
              <p className="dark-text py-3">
                Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea.
                Id placerat tacimates definitionem sea, prima quidam vim no. Duo
                nobis persecuti cu.
              </p>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="fs-1 me-4 phone-icon"
                />
                <p>
                  BOOKING NOW <br /> <span>956 220 6666</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default CheckIn;
