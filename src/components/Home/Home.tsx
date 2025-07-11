import React from 'react';
import { Hero } from '../Hero/Hero';
import { WhatIsDavida } from '../About/WhatIsDavida';
import { Community } from '../Community/Community';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhatIsDavida />
      <Community />
    </>
  );
}; 