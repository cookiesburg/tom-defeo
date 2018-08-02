import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div></div>
        <div>
          <p>home</p>
        </div>
        <div>
          <p>home</p>
        </div>
        <div>
          <p>home</p>
        </div>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 10% 10% 10%;
  height: 150px;
    div {
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      p {
        color: pink;
        padding: 10px;
        border: 5px solid pink;
      }
    }
`;
