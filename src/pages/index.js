import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.less";
import educationIcon from "../images/education.svg";
import experienceIcon from "../images/experience.svg";
import locationIcon from "../images/location.svg";
import emailIcon from "../images/email.svg";
import phoneIcon from "../images/phone.svg";
import linkedInIcon from "../images/linkedin.svg";

const IndexPage = () => (
    <Layout>
        <SEO title="Juliana Reis" keywords={[]} />
        <div className="container">
            <div className="left-panel">
                <div className="left-panel-header">
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
                        href="www.linkedin.com/in/julianafreis"
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
                        I'm an experienced graphic designer that love to
                        prototype, be creative and solve design problems. I’m
                        passionate about design in general, but my focus right
                        now is around the Web. At the beginning of 2018, I’ve
                        started this journey to learn more and more about Web
                        Design. I’ve taken a couple of courses/workshops and
                        went to a lot of meetups.
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
                    <div className="connected-line">
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2019</div>
                            <div className="title">UDEMY</div>
                            <div className="subtitle">UX & DESIGN THINKING</div>
                        </div>
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2019</div>
                            <div className="title">EDIT</div>
                            <div className="subtitle">
                                USER EXPERIENCE & USER INTERFACE DESIGN
                            </div>
                        </div>
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2019 - 2019</div>
                            <div className="title">CHIEF OF DESIGN</div>
                            <div className="subtitle">
                                INTRODUCTION TO WEB DESIGN
                            </div>
                        </div>
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2018</div>
                            <div className="title">UDEMY - SKETCH</div>
                            <div className="subtitle">
                                DESIGN OF SKETCH APPLICATIONS
                            </div>
                        </div>
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2017 - 2020</div>
                            <div className="title">WALL STREET ENGLISH</div>
                            <div className="subtitle">ENGLISH COURSE</div>
                        </div>
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2010 - 2012</div>
                            <div className="title">
                                COLÉGIO INTERNATO DOS CARVALHOS
                            </div>
                            <div className="subtitle">GRAPHIC ARTS</div>
                        </div>
                    </div>
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
                    <div className="connected-line">
                        <div className="line">
                            <div className="circle" />
                            <div className="dates">2013 - 2019</div>
                            <div className="title">
                                MOLDIFLEX-INDUSTRIA DE MOLDES E FLEXOGRÁFICOS,
                                LDA.
                            </div>
                            <div className="subtitle">GRAPHIC DESIGNER</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
