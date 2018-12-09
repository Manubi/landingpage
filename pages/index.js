import React from 'react';
import styled from 'styled-components';
import Ribbon from '../components/Ribbon';
import ContactInput from '../components/ContactInput';
import Footer from '../components/Footer';

const Index = () => (

    <
    Container >
    <
    Ribbon / >
    <
    Title color = {
        mainColor
    } > POMFRIT < /Title> <
    SubTitle color = {
        mainColor
    } > The Events Club < /SubTitle> <
    SubSubTitle > Stay tuned < /SubSubTitle> < /
    Container >
);

export default Index;

const mainColor = 'black'

const Container = styled.div `

margin: auto;
text-align: center;
align-items: center;
justify-content: center;
`;

const Title = styled.h1 `
  color: 'black';
  font-size:8vw;
  padding-bottom: 20px;
  text-align: center;
  font-family: 'Alfa Slab One', cursive;
  letter-spacing: 2.5vw;
  margin-left: 30px;
  margin-right: 30px;
`;

const SubTitle = styled.h3 `
  color: 'black';
  font-family: 'Open Sans', sans-serif;
  font-size: 4vw;
  margin: 20px;
  padding-bottom: 20px;
  letter-spacing: 7px;
`;

const SubSubTitle = styled.h3 `
    color: 'black';
    font-family: 'Open Sans', sans-serif;
    font-size: 3vw;
    margin: 20px;
    padding-bottom:20px;
    letter-spacing: 5px;
    font-style: italic;
`;