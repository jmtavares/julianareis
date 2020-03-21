import React from "react";
import ConnectedLine from "../connected-line/connected-line";
import "./about.less";
import educationIcon from "../../images/education.svg";
import experienceIcon from "../../images/experience.svg";
import locationIcon from "../../images/location.svg";
import emailIcon from "../../images/email.svg";
import phoneIcon from "../../images/phone.svg";
import linkedInIcon from "../../images/linkedin.svg";
import photo from "../../images/photo.png";

const educationOptions = [
  {
    date: "2019",
    title: "UDEMY",
    subtitle: "UX & DESIGN THINKING",
  },
  {
    date: "2019",
    title: "EDIT",
    subtitle: "UX & UI DESIGN",
  },
  {
    date: "2019 - 2020",
    title: "WALL STREET ENGLISH",
    subtitle: "ENGLISH COURSE",
  },
  {
    date: "2018 - 2019",
    title: "CHIEF OF DESIGN",
    subtitle: "INTRODUCTION TO WEB DESIGN",
  },
  {
    date: "2018",
    title: "UDEMY - SKETCH",
    subtitle: "DESIGN OF SKETCH APPLICATIONS",
  },
  {
    date: "2010 - 2012",
    title: "COLÉGIO INTERNATO DOS CARVALHOS",
    subtitle: "GRAPHIC ARTS",
  },
].reverse();

const experienceOptions = [
  {
    date: "2013 - 2020",
    title: "MOLDIFLEX-INDUSTRIA DE MOLDES E FLEXOGRÁFICOS, LDA.",
    subtitle: "GRAPHIC DESIGNER",
  },
];

const AboutPage = () => (
  <div className="about">
    <div className="left-panel">
      <div className="left-panel-header">
        <img className="photo" src={photo} alt="photography" />
        <h1>Juliana Reis</h1>
        <h4>Graphic Designer</h4>
      </div>

      <div className="row lower">
        <img src={locationIcon} alt="location" className="icon small" />

        <span className="row-description">Vila Nova de Gaia</span>
      </div>
      <div className="row lower">
        <img src={emailIcon} alt="email" className="icon small" />
        <a className="row-description" href="mailto:juliana.ju_@live.com.pt">
          juliana.ju_@live.com.pt
        </a>
      </div>
      <div className="row lower">
        <img src={phoneIcon} alt="email" className="icon small" />
        <span className="row-description">
          <a href="tel:351934200771">+351 934 200 771</a>
        </span>
      </div>
      <div className="row lower">
        <img src={linkedInIcon} alt="email" className="icon small" />
        <a
          className="row-description"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/julianafreis"
          target="_blank"
        >
          www.linkedin.com/in/julianafreis
        </a>
      </div>
      <div className="row">
        <h2>Skills</h2>
        <ul>
          <li>Communication / Logo Design</li>
          <li>Vector Illustration</li>
          <li>Digital / Web / UI & UX</li>
          <li>Flexography / Packaging</li>
          <li>Photography</li>
        </ul>
      </div>
      <div className="row">
        <h2>Tools</h2>
        <ul>
          <li>Illustrator / Photoshop / InDesign</li>
          <li>Sketch / Invision</li>
          <li>CorelDraw</li>
        </ul>
      </div>
    </div>
    <div className="right-panel">
      <div>
        <h2 className="with-icon">
          <img src={educationIcon} className="icon" alt="Education" />
          Education
        </h2>
        <ConnectedLine options={educationOptions} />
      </div>
      <div>
        <h2 className="with-icon">
          <img src={experienceIcon} className="icon" alt="Experience" />
          Experience
        </h2>
        <ConnectedLine options={experienceOptions} />
      </div>
    </div>
  </div>
);

export default AboutPage;
