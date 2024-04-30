import React from 'react';

import { Logo__Link } from './__Link';

export const Logo: React.FC = () => {
  return (
    <h1 className="logo">
      <Logo__Link>
        Coffeebara

        <svg
          className="logo__image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width='24'
          height='24'
        >
          <title>
            Coffee and accessories
          </title>

          <path
            d="m19.628,19.628c-2.874,2.874-6.532,4.362-9.931,4.362-2.397,0-4.664-.744-6.438-2.26.119-.861,1.174-6.318,9.039-8.776,6.907-2.157,9.26-6.463,10.053-8.881,2.925,4.339,1.881,10.951-2.723,15.554Zm-7.926-8.582c7.864-2.457,8.919-7.914,9.039-8.776C16.451-1.397,9.272-.53,4.372,4.372-.232,8.976-1.276,15.588,1.649,19.926c.793-2.417,3.146-6.723,10.053-8.881Z"/>
        </svg>
      </Logo__Link>
    </h1>
  );
};
