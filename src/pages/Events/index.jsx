import React from 'react';
import { homeObj1 } from './Data';
import { InfoSection } from '../../components';

function HomePage() {
  return (
    <>
      <InfoSection {...homeObj1} />
    </>
  );
}

export default HomePage;
