import React from 'react';
import styled from 'styled-components';
import Ribbon from '../components/Ribbon';
import Footer from'../components/Footer';

const Contact = () => (

  <Container>
          <Ribbon />
          <Values color={mainColor}>manuel at <A href="mailto: manuel@pomfrit.at" target="_top" >p</A>omfrit.at</Values>
          <Values color={mainColor}>Coffee in Vienna, Innsbruck or somewhere between.</Values>

          <Paragraph>If you feel like, say <A href="mailto: manuel@pomfrit.at" target="_top" >Hi!</A> and dab me up.</Paragraph>
        <Footer />

  </Container>
);

export default Contact;

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

const Span = styled.span`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    background: linear-gradient(90deg, #FEE140 30%, #FA709A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 1vw;
    padding-bottom: 1vw;
    letter-spacing: 2px;
    margin: 0px;
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