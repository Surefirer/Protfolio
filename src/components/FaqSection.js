import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { fade } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} ref={element} animate={controls} initial='hidden'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='Who are you?'>
          <div className='question'>
            <div className='answer'>
              <p>
                Hi! I am Weizhen Liang. A Vancouver-based web developer who
                loves building websites.
              </p>
              <p>
                I have a Bachelor of Business Administration from the University
                of Winnipeg. From starting a private game server to graduating
                from Brainstation's Web Development Diploma program, I never
                stop discovering new potential and possibilities of my career
                path. Besides these, I also have several years of franchising
                development, management experience, and customer service
                experience in the food and beverage industry. Learning is a
                lifelong journey and I have an inquisitive mind.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title='What is your hobby?'>
          <div className='answer'>
            <p>I love remote control(R/C) car/helicopter/boat!</p>
            <p>
              I also love flashlight and kinfe! I have a small collection of all
              kinds of flashlights and knives! If you love flashlight and knives
              as well, hook me up!
            </p>
          </div>
        </Toggle>
        <Toggle title='I love your work, can I ask you to make a website for me?'>
          <div className='answer'>
            <p>
              Of course. If you are small business owner and want to have a
              website or your protfolio, please contact me with the detail. I am
              happy to help you out.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    /* background: #cccccc; */
    background: grey;
    height: 0.1rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  @media (max-width: 430px) {
    padding: 5rem 5rem;
  }
`;

export default FaqSection;
