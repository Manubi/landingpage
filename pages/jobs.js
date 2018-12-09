import React from 'react';
import styled from 'styled-components';
import Ribbon from '../components/Ribbon';
import JobPost from '../components/JobPost';
import Footer from'../components/Footer';

const Jobs = () => (

  <Container>
        <Ribbon />
        <Paragraph>We used to be sex addicts, drug abusers and party animals. These experiences changed us for the better. I guess. If you're a dropout and don't fit into the 9 to 5 hell we might be your best choice. We cherish the fuck ups and enjoy the struggle.</Paragraph>
        <Paragraph>Generally speaking we are interested in everyone who is fun to work with, has her/his fuckin ego in control and is into learning and growing. We don't give a shit about credentials.</Paragraph>
        <Paragraph>We have experience in working together with people from different backgrounds such as incubators, universities (research projects), support of bachelor/master/phd thesis and of course internships.</Paragraph>
        <Paragraph>Get shit done and sometimes don't give a shit.</Paragraph>
        <JobPost />
        <Footer />

  </Container>
);

export default Jobs;

const Container = styled.div`
    margin-top: 10vw;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Paragraph = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    padding: 3vw;
`;
