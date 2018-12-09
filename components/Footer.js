import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Footer =  () =>
  <Wrapper>
    <Link href="/about">
        <A>About us</A>
    </Link><br />
    <Link href="/jobs">
        <A>Work with us</A>
    </Link><br />
    <Link href="/contact">
        <A>Contact us</A>
    </Link><br /><br /><br />
    <Link href="/">
        <B>POMFRIT</B>
    </Link>
  </Wrapper>

export default Footer;

const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 1vw;
    margin-bottom: 10vw;
`;

const A = styled.a`
    font-size: 15vw;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    border-bottom: 2.5vw solid #FEE140;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-image: linear-gradient(90deg, #FEE140 30%, #FA709A 100%);
    border-image-slice: 20;
`;

const B = styled.a`
  cursor: pointer;
  color: 'black';
  font-size:4vw;
  text-align: center;
  font-family: 'Alfa Slab One', cursive;
  letter-spacing: 2.5vw;
  margin-left: 30px;
  margin-right: 30px;
`;