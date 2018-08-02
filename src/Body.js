import React from 'react';
import styled from 'styled-components';

const Body = () => {
  return(
    <Wrapper>
      <div className='title'>TOM</div>
      <div className='title'>DEFEO</div>
      <div className='sub-title'>Web Developer</div>

    </Wrapper>
  );
}

export default Body;

const Wrapper = styled.div`
  grid-column: 3 / span 4;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: 'source sans Pro';

  .title {
    letter-spacing: 5px;
    font-size: 7rem;
    color: #7496D2;
    color: black;
    font-weight: bold;
  }
  .sub-title{
    letter-spacing: 5px;
    margin-top: 1.5rem;
    font-size: 4rem;
    color:white;

  }
`;
