import React from "react";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";

const TeamCard = ({ member }) => {
  return (
    <div className="t-card">
      <img src={member.img} alt={member.name} className="t-icon"/>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <div className="social-icons">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="instagram" className="social-icon" />
        </a>
        <a href={member.github} target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkdein" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
