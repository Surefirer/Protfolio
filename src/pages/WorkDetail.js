import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const WorkDetail = ({ projects }) => {
  const params = useParams();
  const [projectDetail, setProjectDetail] = useState('');

  useEffect(() => {
    const currentProject = projects.filter(
      (project) => project.id === params.id
    );
    setProjectDetail(currentProject[0]);
  }, [params.id, projects]);
  return (
    <WorkDetailStyled
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: '#fff' }}
    >
      <h1>{projectDetail.title}</h1>
    </WorkDetailStyled>
  );
};

const WorkDetailStyled = styled(motion.div)``;

export default WorkDetail;
