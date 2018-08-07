import React from 'react';
import styled from 'styled-components';

const About = () => {
  return(
    <Wrapper>
      <div className='title'>about</div>
      <div className='body'>
        <div className='me'>
          <p>
            Before discovering web development my professional career spanned multiple
            continents across the fields of travel, international education and hospitality.
            I like to believe my varied roles allow me to draw upon many unique experiences in
            in my work. When I'm not building things for the web you might find me floating down
            a river, foraging for mushrooms, out on the links or cooking a big meal for family
            and friends.
          </p>
        </div>
        <div className='tech'>
          <p>
            I build full stack web applications utilizing custom made API's as
            well as incorporating third party API's. I create resusable and user-centric
            components with React. I love a nice clean design that utilizes interesting
            blends of interesting shapes and colors.
          </p>
          <div><strong>Technologies: </strong>JavaScript, Ruby on Rails, React, Redux, SQL, PostgreSQL, HTML5, CSS3, Git, OOP</div>
        </div>
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
    text-shadow: 1px 1px #7c7d7e;
    font-weight: bold;
  }
  .body{
    letter-spacing: 1px;
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
      padding-right: 15px;
    }
    .tech {
      letter-spacing: 1px;
      flex: 2;
      div{
        margin-bottom: 10px;
      }
    }
  }
`;
