import React from "react";
import styled from "@emotion/styled";

const HelloContainer = styled.div`
    display: flex;
    width: 1024px;
    margin: 0 auto;
    padding: 50px 0;
    box-sizing: border-box;

    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
        padding: 20px;
        margin: 20px 0;
    }
`;

const Title = styled.h1`
    margin: 0;

    @media screen and (max-width: 320px) {
        margin: 0;
        font-size: 26px;
    }
`;

const Subtitle = styled.div`
    font-size: 20px;
    color: hsla(0, 0%, 0%, 0.55);
    max-width: 600px;
    margin-top: 50px;
    line-height: 30px;

    @media screen and (max-width: 320px) {
        font-size: 18px;
    }
`;

const Hello = () => (
    <HelloContainer>
        <Title>Hello, I&apos;m Juliana Reis</Title>
        <Subtitle>
            I&apos;m an experienced graphic designer that loves prototyping,
            being creative and solving design problems. I&apos;m passionate
            about design in general, but my focus right now is around the UI and
            UX area. At the beginning of 2018, I&apos;ve started this journey to
            learn more and more about Web Design. I&apos;ve taken a couple of
            courses/workshops and went to a lot of meetups where I am gaining
            skills within the area as I am always eager to learn.
        </Subtitle>
    </HelloContainer>
);

export default Hello;
