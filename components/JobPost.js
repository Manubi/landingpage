import React, { Component } from 'react';
import styled from 'styled-components';

    class JobPost extends Component {
        constructor () {
          super()
          this.state = {
            isHiddenDesigner: true,
            isHiddenDeveloper: true
          }
        }
        toggleHiddenDesigner () {
            this.setState({
              isHiddenDesigner: !this.state.isHiddenDesigner
            })
          }
        toggleHiddenDeveloper () {
          this.setState({
            isHiddenDeveloper: !this.state.isHiddenDeveloper
          })
        }
        render () {
          return (
            <Container>
              <Job color={mainColor} onClick={this.toggleHiddenDesigner.bind(this)} ><Span>>></Span>Hippster Designer</Job>
              {!this.state.isHiddenDesigner && <Designer />}
              <Job color={mainColor} onClick={this.toggleHiddenDeveloper.bind(this)} ><Span>>></Span>JavaScript Lover</Job>
              {!this.state.isHiddenDeveloper && <Developer />}
            </Container>
          )
        }
      }

const Designer = () => (
    <Container>
        <JopDescription>We are looking for someone who is breathing design.</JopDescription>
        <JopDescription>We don't really care about what tools you're using. You will do it all. Develop our Design Language. Implement it. Improve it. Hire our next designer. Repeat.</JopDescription>
        <JopDescription>Why us? We won't say... find out.</JopDescription>
        <JopDescription>say <A href="mailto: manuel@pomfrit.at" target="_top" >Hi!</A> to manuel at <A href="mailto: manuel@pomfrit.at" target="_top" >p</A>omfrit.at</JopDescription>
    </Container>
        )

const Developer = () => (
    <Container>
        <JopDescription>We are looking for a dev who can show us the latest shit. We are pretty much using everything that gets the job done. But mostly we are rolling with Node, Angular, React.</JopDescription>
        <JopDescription>Why us? We won't say... find out.</JopDescription>
        <JopDescription>say <A href="mailto: manuel@pomfrit.at" target="_top" >Hi!</A> to manuel at <A href="mailto: manuel@pomfrit.at" target="_top" >p</A>omfrit.at</JopDescription>
    </Container>
        )

export default JobPost;

const mainColor = 'black';

const Job = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    cursor: pointer;
    margin: 3vw;
    padding-bottom: 3vw;
    letter-spacing: 2px;
`;

const JopDescription = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    padding: 3vw;
`;

const Container = styled.div`
    margin-top: 10vw;
    text-align: center;
    align-items: center;
    justify-content: center;
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