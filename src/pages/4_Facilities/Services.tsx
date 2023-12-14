import { forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBed, faCar, faTaxi, faWifi, faUtensils, faWaterLadder } from "@fortawesome/free-solid-svg-icons";


import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import './style.css'
interface CardProps{
  icon: IconProp,
  title: string,
  body: string
}

const customAnimation = keyframes`
from {
  opacity: 0;
  transform: translateY(3rem);
  }
  
  to {
    opacity: 1;
    transform: translateY();
  }
  `;
  
const ServiceCard = ({icon, title, body}: CardProps) => {
  return(
    <div className="service-card d-flex flex-column align-items-center justify-content-md-center px-3 py-5">
      <FontAwesomeIcon icon={icon} className="service-icon service-title-color"/>
      <h2 className="larg-font my-4 service-txt-color service-title-color">{ title }</h2>
      <p className="text-center service-txt-color">{ body }</p>
    </div>
  )
}

interface Props {}

const Services = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className=" container-md service">
      <h6 className="text-center mb-3">HOEXR SERVICES</h6>
      <h1 className="larg-font text-center">Hotel Facilities</h1>

      <div className="devider"></div>

      {/* <Reveal
          keyframes={customAnimation}
          triggerOnce
          duration={1000}
          cascade
          damping={0.1}
          className="service-grid"
        >
        <ServiceCard title="Room Service" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faBed} />
        <ServiceCard title="Pick Up & Drop" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faTaxi} />
        <ServiceCard title="Fibre Internet" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faWifi} />
        <ServiceCard title="Breakfast" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faUtensils} />
        <ServiceCard title="Swimming Pool" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faWaterLadder} />
        <ServiceCard title="Parking Space" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faCar} />
      </Reveal> */}

      <div className="service-grid">
        <ServiceCard title="Room Service" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faBed} />
        <ServiceCard title="Pick Up & Drop" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faTaxi} />
        <ServiceCard title="Fibre Internet" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faWifi} />
        <ServiceCard title="Breakfast" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faUtensils} />
        <ServiceCard title="Swimming Pool" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faWaterLadder} />
        <ServiceCard title="Parking Space" body="Orci varius natoque penatibus magnis ders disney parturient ridiculus" icon={faCar} />
      </div>
    </div>
  );
});

export default Services
