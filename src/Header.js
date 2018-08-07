import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <About className='link'>
          <Link to='/about'>About</Link>
        </About>
        <Work className='link'>
          <Link to='/work'>Work</Link>
        </Work>
        <Contact className='link'>
          <Link to='/'>Home</Link>
        </Contact>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
grid-row: 2 /span 1;
grid-column: 6 / span 3;
display: flex;
justify-content: around;

  .link {
    :hover {
      box-shadow: 1px 2px 1px black;
      cursor: pointer;
    }
    a{
      text-shadow: 1px 1px #7c7d7e;
      text-decoration: none;
      color:white;
      :visited{
        color: white;
        text-decoration: none;
      }
    }
  }
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
  font-size: 21px;
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
  font-size: 21px;
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
  font-size: 21px;
  letter-spacing: 4px;
`;
