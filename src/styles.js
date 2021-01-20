import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1100px) {
    display: block;
    text-align: center;
  }
  @media (max-width: 490px) {
    padding: 5rem 2rem;
  }
`;

export const Description = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1100px) {
    padding-right: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  display: flex;
  justify-content: center;
  img {
    width: 70%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #23d997;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
