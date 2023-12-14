import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faBed,
  faBath,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import img_1 from "../../assets/image/rooms/room-1.jpg";
import img_2 from "../../assets/image/rooms/room-2.jpg";
import img_3 from "../../assets/image/rooms/room-3.jpg";
import img_4 from "../../assets/image/rooms/room-4.jpg";
import img_5 from "../../assets/image/rooms/room-5.jpg";

interface CardProps {
  img_url: string;
}

const RoomCarL = ({ img_url }: CardProps) => {
  return (
    <div className="room-card room-card-large d-flex">
      <img src={img_url} alt="" />
      <div className="w-100 align-self-end my-3">
        <section>
          <h2 className="text-end text-light mx-3 larg-font-sm">Junior Suite</h2>
          <p className="text-end text-light mx-3">150$ / NIGHT</p>
        </section>
        <section className="d-flex justify-content-between mx-3 align-items-center room-link">
          <button className="book-btn">BOOK NOW</button>
          <section className="d-flex">
            <a href="#">
              <FontAwesomeIcon icon={faWifi} className="fs-6 text-light mx-2" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBed} className="fs-6 text-light mx-2" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBath} className="fs-6 text-light mx-2" />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faShower}
                className="fs-6 text-light mx-2"
              />
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};

const RoomCarS = ({ img_url }: CardProps) => {
  return (
    <div className="room-card room-card-small d-flex">
      <img src={img_url} alt="" />
      <div className="w-100 align-self-end my-3">
        <section>
          <h2 className="text-end text-light mx-3 larg-font-sm">Junior Suite</h2>
          <p className="text-end text-light mx-3">150$ / NIGHT</p>
        </section>
        <section className="d-flex justify-content-between mx-3 align-items-center room-link">
          <button className="book-btn">BOOK NOW</button>
          <section className="d-flex">
            <a href="#">
              <FontAwesomeIcon icon={faWifi} className="fs-6 text-light mx-2" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBed} className="fs-6 text-light mx-2" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBath} className="fs-6 text-light mx-2" />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faShower}
                className="fs-6 text-light mx-2"
              />
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};

interface Props {}

const Room = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div className="rooms">
      <div ref={ref} className="container-md">
        <div className="devider"></div>
        <p className="text-center">HOEXR LUXURY ROOMS</p>
        <h1 className="larg-font text-center">Luxury Rooms & Suites</h1>
        <div className="devider"></div>
        <div className="rooms-grid">
          <RoomCarL img_url={img_1}/>
          <RoomCarL img_url={img_2}/>
          <RoomCarS img_url={img_3}/>
          <RoomCarL img_url={img_4}/>
          <RoomCarS img_url={img_5}/>
        </div>

        <div className="devider"></div>
      </div>
    </div>
  );
});

export default Room;
