import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import './index.less';

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
        <div className="index">
            <div>
                <h1>Hello, I&apos;m Juliana Reis</h1>
                <div className="subtitle">
                    I&apos;m an experienced graphic designer that loves prototyping,
                    being creative and solving design problems. I&apos;m passionate
                    about design in general, but my focus right now is around
                    the UI and UX area. At the beginning of 2018, I&apos;ve started
                    this journey to learn more and more about Web Design. I&apos;ve
                    taken a couple of courses/workshops and went to a lot of
                    meetups where I am gaining skills within the area as I am
                    always eager to learn.
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
