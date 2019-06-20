import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ConnectedLine from "../components/connected-line/connected-line";
import "./index.less";
import educationIcon from "../images/education.svg";
import experienceIcon from "../images/experience.svg";
import locationIcon from "../images/location.svg";
import emailIcon from "../images/email.svg";
import phoneIcon from "../images/phone.svg";
import linkedInIcon from "../images/linkedin.svg";
import photo from "../images/photo.png";

const educationOptions = [
    {
        date: "2019",
        title: "UDEMY",
        subtitle: "UX & DESIGN THINKING"
    },
    {
        date: "2019",
        title: "EDIT",
        subtitle: "UX & UI DESIGN"
    },
    {
        date: "2018 - 2019",
        title: "CHIEF OF DESIGN",
        subtitle: "INTRODUCTION TO WEB DESIGN"
    },
    {
        date: "2018",
        title: "UDEMY - SKETCH",
        subtitle: "DESIGN OF SKETCH APPLICATIONS"
    },
    {
        date: "2017 - 2020",
        title: "WALL STREET ENGLISH",
        subtitle: "ENGLISH COURSE"
    },
    {
        date: "2010 - 2012",
        title: "COLÉGIO INTERNATO DOS CARVALHOS",
        subtitle: "GRAPHIC ARTS"
    }
].reverse()

const experienceOptions = [{
    date: '2013 - 2019',
    title: 'MOLDIFLEX-INDUSTRIA DE MOLDES E FLEXOGRÁFICOS, LDA.',
    subtitle: 'GRAPHIC DESIGNER'
}]

const IndexPage = () => (
    <Layout>
        <SEO
            title="Juliana Reis"
            keywords={[
                "design",
                "sketch",
                "cv",
                "designer",
                "photography",
                "education",
                "experience",
                "web",
                "react"
            ]}
        />
        <div className="container">
            <div className="left-panel">
                <div className="left-panel-header">
                    <img className="photo" src={photo} alt="photography" />
                    <h1>Juliana Reis</h1>
                    <h4>Graphic Designer</h4>
                </div>

                <div className="row lower">
                    <img
                        src={locationIcon}
                        alt="location"
                        className="icon small"
                    />

                    <span className="row-description">Vila Nova de Gaia</span>
                </div>
                <div className="row lower">
                    <img src={emailIcon} alt="email" className="icon small" />
                    <a
                        className="row-description"
                        href="mailto:juliana.ju_@live.com.pt"
                    >
                        juliana.ju_@live.com.pt
                    </a>
                </div>
                <div className="row lower">
                    <img src={phoneIcon} alt="email" className="icon small" />
                    <span className="row-description">+351 934 200 771</span>
                </div>
                <div className="row lower">
                    <img
                        src={linkedInIcon}
                        alt="email"
                        className="icon small"
                    />
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
                        <li>Flexography</li>
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
                    <div className="description">
                        I&apos;m an experienced graphic designer that loves
                        prototyping, being creative and solving design problems.
                        I’m passionate about design in general, but my focus
                        right now is around the UI and UX area. At the beginning
                        of 2018, I&apos;ve started this journey to learn more and
                        more about Web Design. I’ve taken a couple of
                        courses/workshops and went to a lot of meetups where I
                        am gaining skills within the area as I am always eager
                        to learn.
                    </div>
                </div>
                <div>
                    <h2 className="with-icon">
                        <img
                            src={educationIcon}
                            className="icon"
                            alt="Education"
                        />
                        Education
                    </h2>
                    <ConnectedLine options={educationOptions} />
                </div>
                <div>
                    <h2 className="with-icon">
                        <img
                            src={experienceIcon}
                            className="icon"
                            alt="Experience"
                        />
                        Experience
                    </h2>
                    <ConnectedLine options={experienceOptions} />
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
