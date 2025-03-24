import React from "react";
import TeamCard from "./TeamCard";

import ag from '../assets/ag.png'
import as from '../assets/as.png'
import ps from '../assets/ps.png'
import mb from '../assets/mb.png'

const teamMembers = [
  { name: "Aditi Gupta", role: "Founder & Coordinator", img: ag, linkedin: "#", github: "#" },
  { name: "Aditi Srivastava", role: "Co-Coordinator", img: as, linkedin: "#", github: "#" },
  { name: "Prachi Saurabh", role: "AI/ML Lead", img: ps, linkedin: "#", github: "#" },
  { name: "Mahika Batra", role: "R&D Lead", img: mb, linkedin: "#", github: "#" },
  { name: "Aditi Gupta", role: "Founder & Coordinator", img: ag, linkedin: "#", github: "#" },
  { name: "Aditi Gupta", role: "Founder & Coordinator", img: ag, linkedin: "#", github: "#" },
  { name: "Aditi Gupta", role: "Founder & Coordinator", img: ag, linkedin: "#", github: "#" },
  { name: "Aditi Gupta", role: "Founder & Coordinator", img: ag, linkedin: "#", github: "#" },
  { name: "Aditi Gupta", role: "Founder & Coordinator", img: ag, linkedin: "#", github: "#" },
];

const TeamSection = () => {
  return (
    <>
    
    <div className="t-section">
      <h2 className="title">MEET OUR TEAM</h2>
      <div className="t-card-grid">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default TeamSection;
