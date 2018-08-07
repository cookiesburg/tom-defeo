import React from 'react';
import styled from 'styled-components';

const Work = () => {
  return(
    <Wrapper>
      <div className='title'>
        work
      </div>

    </Wrapper>
  );
}

export default Work;

const Wrapper = styled.div`
  grid-column: 2 / span 6;
  grid-row: 3 / span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: 'source sans Pro';

  .title {
    letter-spacing: 5px;
    font-size: 7rem;
    color: white;
    text-shadow: 1px 1px #7c7d7e;
    font-weight: bold;
  }
  .body{
    letter-spacing: 2px;
    line-height: 24px;
    margin-top: 1.5rem;
    font-size: 1rem;
    color: black;
    display: block;
    text-align: left;
    padding-left: 5rem;
    display: flex;

    .me {
      flex: 3;
    }
    .tech {
      flex: 2;
      border: 1px solid black;
    }
  }
`;
