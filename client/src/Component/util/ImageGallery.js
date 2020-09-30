import React from 'react';
import { useStep } from 'react-hooks-helper';

import ImageNav from './ImageNav';
import Progress from './Progress';

const ImageGallery = ({ initialStep, images }) => {
  const { step, navigation, index, isPaused, autoAdvanceDuration } = useStep({
    initialStep,
    autoAdvanceDuration: 5000,
    steps: images,
  });
  const { src, alt = '' } = step;

  return (
    <div className="imageGallery">
      <img alt={alt} src={src} />
      <ImageNav
        isPaused={isPaused}
        index={index}
        count={images.length}
        {...navigation}
      />
      {!isPaused && <Progress step={index} duration={autoAdvanceDuration} />}
    </div>
  );
};

export default ImageGallery;
