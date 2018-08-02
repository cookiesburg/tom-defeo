import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <About>about</About>
        <Work>work</Work>
        <Contact>contact</Contact>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
grid-row: 2 /span 1;
grid-column: 5 / span 3;
display: flex;
justify-content: around;
`;

const About = styled.div`
  width: 28%;
  border-radius: 50%;
  background: #C7CEF6;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size: 25px;
  letter-spacing: 4px;
`;
const Work = styled.div`
  margin: 10px;
  width: 28%;
  border-radius: 50%;
  background: #B62A3D;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size: 25px;
  letter-spacing: 4px;
`;
const Contact = styled.div`
  margin: 10px;
  width: 28%;
  border-radius: 50%;
  background: #EDCB64;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size: 25px;
  letter-spacing: 4px;
`;
