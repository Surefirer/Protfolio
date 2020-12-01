import React from 'react';
import { Link } from 'react-router-dom';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi there!</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              My name is <span>Weizhen.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          A Vancouver-based web developer who loves flashlights and R/C.
        </motion.p>
        <Link to='/contact'>
          <motion.button variants={fade}>Contact me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial='hidden'
          animate='show'
          src={home1}
          alt='home1'
        />
      </Image>
      {/* <Wave /> */}
    </About>
  );
};

export default AboutSection;
