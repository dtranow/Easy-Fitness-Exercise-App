import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if(scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 500,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if(scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 500,
        behavior: 'smooth'
      })
    }
  }

  return(
    <Box position="relative" overflow="visible" width='100%'>
      <Typography
        onClick={scrollLeft}
        sx={{
          cursor: 'pointer', position: 'absolute', top: '100%', left: '0px'
        }}>
        <img src={LeftArrowIcon} alt="Left arrow" />
      </Typography>
      
      <Box ref={scrollContainerRef} sx={{ display: 'flex', overflowX: 'scroll', scrollBehavior: 'smooth' }}>
        {data.map((part) => (
          <Box
            key={part.id || part}
            title={part.id || part}
            partId={part.id || part}
            m="0 36px">
              {isBodyPart ? (
                <BodyPart part={part} bodyPart={bodyPart} setBodyPart={setBodyPart} />
              ) : (
                <ExerciseCard exercise={part} />
              )}
          </Box>
        ))}
      </Box>

      <Typography
        className="right-arrow"
        onClick={scrollRight}
        sx={{
          cursor: 'pointer', position: 'absolute', top: '102%', right: '0px'
        }}>
        <img src={RightArrowIcon} alt="Right arrow" />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;
