"use client"
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './CatLottie.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height="100%" width="100%" isClickToPauseDisabled />;
};

export default LottieAnimation;