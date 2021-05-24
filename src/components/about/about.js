import React from "react";
import styled from "@emotion/styled";
import ConnectedLine from "../connected-line/connected-line";
import educationIcon from "../../images/education.svg";
import experienceIcon from "../../images/experience.svg";
import locationIcon from "../../images/location.svg";
import emailIcon from "../../images/email.svg";
import phoneIcon from "../../images/phone.svg";
import linkedInIcon from "../../images/linkedin.svg";
import photo from "../../images/photo.jpeg";

const AboutContainer = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  padding: 50px;
  box-sizing: border-box;
  .left-panel {
    flex: 0 0 300px;
    border-right: 2px solid #0f7c79;
    ul {
      li {
        color: hsla(0, 0%, 0%, 0.8);
        line-height: 20px;
        font-size: 16px;
      }
    }
  }

  .right-panel {
    flex: 1;
  }

  .left-panel,
  .right-panel {
    display: flex;
    padding: 20px 50px;
    box-sizing: border-box;
    flex-direction: column;
  }

  .description {
    color: hsla(0, 0%, 0%, 0.55);
    line-height: 26px;
    border-bottom: 2px solid #0f7c79;
    padding-bottom: 40px;
    font-size: 16px;
  }

  .row {
    color: hsla(0, 0%, 0%, 0.55);
    margin-bottom: 10px;
    font-size: 14px;

    a {
      color: hsla(0, 0%, 0%, 0.55);
      text-decoration: none;
    }

    &.lower {
      display: flex;
      .row-description {
        padding-top: 10px;
      }
    }
  }

  .left-panel-header {
    margin-bottom: 20px;
    text-align: center;
  }

  .with-icon {
    margin-top: 40px;
    display: flex;
    align-items: center;
    &:first-type-of {
      margin-top: 60px;
    }
  }

  .icon {
    height: 25px;
    margin-right: 7px;
    &.small {
      width: 20px;
      height: 15px;
      margin-right: 5px;
    }
  }

  .photo {
    width: 175px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
    .left-panel,
    .right-panel {
      padding: 10px;
      flex: 1;
    }
    .left-panel {
      border: none;
      h2,
      ul {
        text-align: center;
      }
    }
    .right-panel {
      padding: 40px 10px 10px 10px;
      border-top: 2px solid #0f7c79;
    }
    .left-panel-header {
      margin-bottom: 10px;
    }

    .with-icon {
      justify-content: center;
    }

    .row.lower {
      flex-direction: column;
      align-items: center;
    }
  }
`;

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
    date: "2013 - 2021",
    title: "MOLDIFLEX-INDUSTRIA DE MOLDES E FLEXOGRÁFICOS, LDA.",
    subtitle: "GRAPHIC DESIGNER",
  },
];

const AboutPage = () => (
  <AboutContainer>
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
  </AboutContainer>
);

export default AboutPage;
