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
    box-shadow: 1px 1px 1px #7c7d7e;
    max-width:150px;
    min-width:150px;
    max-height:150px;
    min-height:150px;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
    a{
      text-shadow: 1px 1px #7c7d7e;
      text-decoration: none;
      color:white;
      font-size: 25px;
      letter-spacing: 4px;
      :visited{
        color: white;
        text-decoration: none;
      }
    }
  }
`;

const About = styled.div`
  background: #C7CEF6;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Work = styled.div`
  margin: 10px;
  background: #B62A3D;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contact = styled.div`
  margin: 10px;
  background: #EDCB64;
  display: flex;
  justify-content: center;
  align-items: center;
`;
