import React from 'react';
import { homeObj1, homeObj2, homeObj3, homeObj4 } from './Data';
import { InfoSection, About } from '../../components';

function HomePage() {
  return (
    <>
      <InfoSection {...homeObj1} />
      <InfoSection {...homeObj2} />
      <InfoSection {...homeObj3} />
      <About />
      <InfoSection {...homeObj4} />
    </>
  );
}

export default HomePage;
