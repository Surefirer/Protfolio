import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Animations
import { motion } from 'framer-motion';
import { fade, photoAnim, lineAnim } from '../animation';
import { useScroll } from '../components/useScroll';

const Project = ({ id, title, mainImg, liveDemoUrl, gitHubUrl, postDate }) => {
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
      <motion.div
        variants={fade}
        rel='noopener noreferrer'
        target='_blank'
        href={liveDemoUrl}
      >
        <Hide>
          <Link to={`/work/${id}`}>
            <motion.img variants={photoAnim} src={mainImg} alt='athlete' />
          </Link>
        </Hide>
      </motion.div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled(motion.div)`
  padding-bottom: 10rem;
`;

const PostDate = styled(motion.div)`
  p {
    padding: 0 0 1rem 0;
  }
`;

const Hide = styled.div`
  overflow: hidden;
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

export default Project;
