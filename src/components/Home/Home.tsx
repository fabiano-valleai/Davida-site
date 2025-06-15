import React from 'react';
import { Hero } from '../Hero/Hero';
import { WhatIsDavida } from '../About/WhatIsDavida';
import { ForWomen } from '../ForWomen/ForWomen';
import { Community } from '../Community/Community';
import { AppFeatures } from '../Features/AppFeatures';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhatIsDavida />
      <ForWomen />
      <AppFeatures />
      <Community />
    </>
  );
}; 