import React from "react";
import ds from "../assets/ds.png";
import wd from "../assets/webd.png";
import gd from "../assets/gd.png";
import rnd from "../assets/rnd.png";
import ml from "../assets/ml.png";
import cw from "../assets/cw.png";

const domains = [
  {
    title: "Data Structures and Algorithms",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    image : ds,
  },
  {
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    image: wd,
  },
  {
    title: "Graphics Designing",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    image: gd,
  },
  {
    title: "Research and Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    image: rnd,
  },
  {
    title: "Machine Learning",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    image: ml,
  },
  {
    title: "Content Writing",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    image: cw,
  },
];

const DomainsSection = () => {
  return (
    <div className="section">
      <h2 className="title">OUR DOMAINS</h2>
      <div className="d-card-grid">
        {domains.map((domain, index) => (
          <div key={index} className="d-card">
            <img src={domain.image} alt={domain.title} className="d-icon" />
            <h3>{domain.title}</h3>
            <p>{domain.desc}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainsSection;
