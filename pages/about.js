import React from 'react';
import styled from 'styled-components';
import Ribbon from '../components/Ribbon';
import ImageGrid from '../components/ImageGrid';
import Footer from'../components/Footer';

const About = () => (

  <Container>
          <Ribbon />
          <Values color={mainColor}>We are lazy.</Values>
          <Values color={mainColor}>We are grumpy.</Values>
          <Values color={mainColor}>We are inflexible.</Values>
          <Values color={mainColor}>We are boring.</Values>
          <Values color={mainColor}>We are messy.</Values>
          <Values color={mainColor}>We are shy...</Values>
          <Values color={mainColor}>& Bible, we stink.</Values>

          <ImageGrid />
          <Paragraph>We started our group laziness two years ago. We are three dreamers who play remotely and meet from time to time in a mountain lodge, on a sailing yacht or in a messy stinking shithole.</Paragraph>
          <Paragraph>We believe in trust, conflict, commitment, accountability and results. Do your shit and sometimes don't give a shit.</Paragraph>
          <Paragraph>If you are sometimes a little bit like us, say <A href="mailto: manuel@pomfrit.at" target="_top" >Hi!</A> and we can be lazy together.</Paragraph>
        <Footer />

  </Container>
);

export default About;

const mainColor = 'black'

const Container = styled.div`
    margin-top: 10vw;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Values = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    margin: 1vw;
    padding-bottom: 1vw;
    letter-spacing: 2px;
`;

const Paragraph = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    padding: 3vw;
`;

const A = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    background: linear-gradient(90deg, #FEE140 30%, #FA709A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 1vw;
    padding-bottom: 1vw;
    letter-spacing: 2px;
    margin: 0px;
    cursor: pointer;
`;