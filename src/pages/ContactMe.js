import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim, photoAnim } from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

//import icons
import envelope from '../assets/icons/envelope.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import paperPlane from '../assets/icons/paper-plane.svg';
import timber from '../img/timber.png';

const ContactMe = () => {
  return (
    <ContactStyle
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: '#fff' }}
    >
      <ContactContainer>
        <div>
          <Title>
            <Hide>
              <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
            </Hide>
          </Title>
          <div>
            <Hide>
              <a href='sms:1-778-682-5676'>
                <Social variants={titleAnim}>
                  <img src={envelope} alt='message' />
                  <h2>778-682-5676</h2>
                </Social>
              </a>
            </Hide>
            <Hide>
              <a href='mailto:liangwz11@hotmail.com'>
                <Social variants={titleAnim}>
                  <img src={paperPlane} alt='email' />
                  <h2>liangwz11@hotmail.com</h2>
                </Social>
              </a>
            </Hide>
            <Hide>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://www.linkedin.com/in/weizhen-liang/'
              >
                <Social variants={titleAnim}>
                  <img src={linkedin} alt='linkedin' />
                  <h2>Linkedin</h2>
                </Social>
              </a>
            </Hide>
            <Hide>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/Surefirer'
              >
                <Social variants={titleAnim}>
                  <img src={github} alt='github' />
                  <h2>Github</h2>
                </Social>
              </a>
            </Hide>
          </div>
        </div>
        <Timber
          variants={photoAnim}
          initial='hidden'
          animate='show'
          src={timber}
          alt='timber'
        />
      </ContactContainer>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1100px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1100px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  img {
    width: 8%;
  }
  h2 {
    margin: 2rem;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #23d997;
      font-weight: bold;
    }
  }
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Timber = styled(motion.img)`
  width: 400px;
  height: 400px;
  // border-radius: 150px 20px 150px;
  border-radius: 50%;
  @media (max-width: 1100px) {
    width: 150px;
    height: 150px;
    // border-radius: 20px 70px 20px;
  }
`;

export default ContactMe;
