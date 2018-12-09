import React from 'react';
import styled from 'styled-components';
import Emoji from '../components/Emoji.js';


const SnackBar =  () => (
  <Wrapper>
    <Text><Emoji symbol="🙏" label="Thanks" />Thanks and see you soon! <Emoji symbol="🤘" label="rock" /></Text>
  </Wrapper>

);

export default SnackBar;

const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 1vw;
    margin-bottom: 10vw;
`;

const Text = styled.p`
    color: red;
`;