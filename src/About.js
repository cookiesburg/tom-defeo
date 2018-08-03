import React from 'react';
import styled from 'styled-components';

const About = () => {
  return(
    <Wrapper>
      <div className='title'>about</div>
      <div className='body'>
        <p className='me'>
          Before discovering web development my professional career spanned multiple
          continents across the fields of travel, international education and hospitality.
          I like to believe my varied roles allow me to draw upon many unique experiences in
          in my work. When I'm not building things for the web you might find me floating down
          a river, foraging for mushrooms, out on the links or cooking a big meal for family
          and friends.
        </p>
        <p className='tech'>
          my tech
        </p>
      </div>

    </Wrapper>
  );
}

export default About;

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
