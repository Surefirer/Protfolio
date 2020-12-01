import React from 'react';
//Import Icons
import css3 from '../img/css3.png';
import express from '../img/express.png';
import html5 from '../img/html5.png';
import javascript from '../img/javascript.png';
import mysql from '../img/mysql.png';
import nodejs from '../img/nodejs.png';
import react from '../img/react.png';
import sass from '../img/sass.png';
//import home2 from "../img/home2.png";
//Styles
import { About, Description } from '../styles';
import styled from 'styled-components';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services>
      <Description
        variants={fade}
        animate={controls}
        initial='hidden'
        ref={element}
      >
        <h2>
          My <span>skills</span>
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={javascript} alt='javascript' />
              <h3>Java Script</h3>
            </div>
            <p>
              JavaScript, often abbreviated as JS, is a programming language
              that conforms to the ECMAScript specification.
            </p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={react} alt='react' />
              <h3>React</h3>
            </div>
            <p>
              React is an open-source, front end, JavaScript library for
              building user interfaces or UI components..
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={nodejs} alt='nodejs' />
              <h3>Node JS</h3>
            </div>
            <p>
              Node.js is an open-source, cross-platform, back-end, JavaScript
              runtime environment that executes JavaScript c.
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={html5} alt='html5' />
              <h3>HTML</h3>
            </div>
            <p>
              Hypertext Markup Language (HTML) is the standard markup language
              for documents designed to be displayed in a web browser.
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={css3} alt='css3' />
              <h3>CSS</h3>
            </div>
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML.
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={sass} alt='sass' />
              <h3>SASS</h3>
            </div>
            <p>
              Sass is a preprocessor scripting language that is interpreted or
              compiled into Cascading Style Sheets.
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  background-color: #f1f0f0;
  h2 {
    padding-bottom: 5rem;
    color: black;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 490px) {
    padding: 5rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 950px;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  .icon {
    display: flex;
    align-items: center;
    padding: 1rem;
    img {
      width: 50px;
      border-radius: 50%;
    }
    h3 {
      margin-left: 1rem;
      color: black;
      padding: 0.5rem;
    }
  }
  p {
    font-size: 0.8rem;
    color: black;
    padding: 0rem 0rem 1.5rem 0rem;
  }
  @media (max-width: 490px) {
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 30%;
        border-radius: 50%;
      }
    }
  }
`;

export default ServicesSection;
