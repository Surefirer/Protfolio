import React from 'react';
import styled from 'styled-components';
import Project from './Project';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, slider, sliderContainer } from '../animation';
import ScrollTop from '../components/ScrollTop';

const MyWork = ({ projects }) => {
  const sortedProjects = projects.sort((a, b) => b.postDate - a.postDate);

  return (
    <Work
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: '#fff' }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Projects>
        {sortedProjects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            mainImg={project.mainImg}
            liveDemoUrl={project.liveDemoUrl}
            gitHubUrl={project.gitHubUrl}
            postDate={project.postDate}
          />
        ))}
      </Projects>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1100px) {
    padding: 2rem 2rem;
  }
`;

const Projects = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: 8effa0;
`;

export default MyWork;
