import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import "./style.css";

import team_1 from "../../assets/image/team/team-1.jpg";
import team_2 from "../../assets/image/team/team-2.jpg";
import team_3 from "../../assets/image/team/team-3.jpg";
import team_4 from "../../assets/image/team/team-4.jpg";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface TeamProps {
  url: string;
  name: string;
  role: string;
}

const TeamCard = ({ url, name, role }: TeamProps) => {
  return (
    <div className="team-card"> 
      <div className="img-hover team-img-container">
        <img src={url} className="team-img" />
        <div className="social-icons-container px-2 d-flex flex-column ">
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icons text-light my-2"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social-icons text-light my-2"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="social-icons text-light my-2"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faYoutube}
              className="social-icons text-light my-2"
            />
          </a>
        </div>
      </div>
      <div className="team-discription mt-3">
        <p className="my-0 team-role">{role}</p>
        <a href="#" className="team-link my-0">
          <h3 className="my-0">{name}</h3>
        </a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="container-md">
      <h6 className="text-center mb-3">HOEXR HOTEL TEAM</h6>
      <h1 className="larg-font text-center">Expert Team Persons</h1>

      <div className="devider-md"></div>
      <div className="team-grid">
        <Reveal
          keyframes={customAnimation}
          duration={1000}
          cascade
          damping={0.1}
          className="team-card"
        >
          <TeamCard url={team_1} name="Michael Dean" role="Event Platnner" />
          <TeamCard url={team_2} name="Michael Dean" role="Event Platnner" />
          <TeamCard url={team_3} name="Michael Dean" role="Event Platnner" />
          <TeamCard url={team_4} name="Michael Dean" role="Event Platnner" />
        </Reveal>
      </div>
    </div>
  );
};

export default Team;
