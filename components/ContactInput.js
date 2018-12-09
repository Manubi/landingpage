import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        hasSubmitted: false,
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      const userValue = (this.state.value).includes('@') ? { email: (this.state.value) } : { phone: (this.state.value) };
      console.log(userValue)
      axios.post('https://whooop.now.sh/contactDetails', userValue)
        .then(response => { console.log(response) })
        .catch(error =>  { console.log(error) });

      this.setState({hasSubmitted: true });
      setTimeout(
        function() {
            this.setState({hasSubmitted: false})
        }.bind(this), 3500);

      event.preventDefault();
    }
  
    render() {
      const hasSubmitted = this.state.hasSubmitted;
      return (
        <form onSubmit={this.handleSubmit} noValidate>
          <label>
            <Input value={this.state.value} onChange={this.handleChange} placeholder='phone or email please' required />
          </label>
          {hasSubmitted === true &&
              <Submit>if you've been honest, we will contact you ;D</Submit>
          }
          <Button type="submit" value='Join'>Join our wait list</Button>
        </form>
      );
    }
  }

  const Input = styled.input`
    padding: 0.5em;
    margin: 5vw;
    color: palevioletred;
    background: lightgrey;
    border: none;
    border-radius: 7px;
    padding: 15px 32px;
    font-size: 22px;
        &:focus {
            outline: none;
            border:3px solid #FA709A;
            box-shadow: 0 0 1px #FA709A;
        };
        &:active {
            outline: none;
            border: none;
        }
    `;

const Button = styled.button`
    margin: 3vw;
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    border: 3px solid black;
    border-radius: 7px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    cursor: pointer;
    `;

const Submit = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 4vw;
    padding: 3vw;
`;
export default ContactForm;
