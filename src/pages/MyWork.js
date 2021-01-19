import React, { useState } from 'react';
import styled from 'styled-components';
import { ProjectState } from '../projectState';
//Images
//import athlete from "../img/athlete-small.png";
// import gamingWebsite from "../img/a-gaming-website.jpg";
// import theracer from "../img/theracer-small.png";
// import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
  const [projects, setProjects] = useState(ProjectState);

  const sortedProjects = projects.sort((a, b) => b.postDate - a.postDate);

  console.log(sortedProjects);

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
    /* height: 70vh; */
    object-fit: cover;
  }
  /* a {
    font-size: 0.8rem;
    display: inline-block;
    border: 1px solid black;
    margin-bottom: 15px;
    text-decoration: none;
    padding: 4px 12px;
    border-radius: 15px;
  } */
`;

const LiveDemo = styled(motion.a)`
  font-size: 0.8rem;
  display: inline-block;
  border: 1px solid #acacac;
  margin-bottom: 15px;
  margin-right: 15px;
  text-decoration: none;
  padding: 4px 12px;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover {
    background: #23d997;
    border: 1px solid #23d997;
    color: white;
  }
`;

const PostDate = styled(motion.div)`
  p {
    padding: 0 0 1rem 0;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const ProjectStyle = styled(motion.div)`
  padding-bottom: 10rem;
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

//Project Component
const Project = ({ title, mainImg, liveDemoUrl, gitHubUrl, postDate }) => {
  const [element, control] = useScroll();

  const timeFormatHandler = (time) => {
    const milliseconds = time * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;
  };

  return (
    <ProjectStyle
      ref={element}
      variants={fade}
      animate={control}
      initial='hidden'
    >
      <motion.h2 variants={fade}>{title}</motion.h2>
      <LiveDemo
        variants={fade}
        rel='noopener noreferrer'
        target='_blank'
        href={liveDemoUrl}
      >
        Live Demo
      </LiveDemo>
      <LiveDemo
        variants={fade}
        rel='noopener noreferrer'
        target='_blank'
        href={gitHubUrl}
      >
        Github
      </LiveDemo>
      <PostDate>
        {postDate ? <p>Posted on: {timeFormatHandler(postDate)}</p> : ''}
      </PostDate>
      <motion.div variants={lineAnim} className='line'></motion.div>
      <motion.a
        variants={fade}
        rel='noopener noreferrer'
        target='_blank'
        href={liveDemoUrl}
      >
        <Hide>
          <motion.img variants={photoAnim} src={mainImg} alt='athlete' />
        </Hide>
      </motion.a>
    </ProjectStyle>
  );
};

export default MyWork;
