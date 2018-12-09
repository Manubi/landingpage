import React from 'react';
import styled from 'styled-components';

const ImageGrid = () => (
    <Grid>
        <Img src='/static/img/sheep.jpg' />
        <Img src='/static/img/reading.jpg' />
        <Img src='/static/img/desk.jpg' />
        <Img src='/static/img/pony.jpg' />
        <Img src='/static/img/me.jpg' />
    </Grid>
  );

export default ImageGrid;


const Grid = styled.div`
    margin-top: 5vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Img = styled.img`
    height: 410px;
    padding: 10px;
    border-radius: 25px;
    
`;

