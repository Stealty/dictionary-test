'use client';

import React from 'react';
import { NextPage } from 'next';
import Webcam from '../../src/components/Molecules/Webcam';
import Sidebar from 'src/components/Molecules/Sidebar';

interface Props {}

const Page: NextPage<Props> = () => {
  const cosmetics = [
    'Lipstick',
    'Lip Gloss',
    'Mascara',
    'Eyeliner',
    'Foundation',
    'Concealer',
    'Blush',
    'Highlighter',
    'Bronzer',
    'Eyeshadow Palette',
    'Brow Pencils',
    'Lash Primer',
    'Eyebrow Gel',
    'Setting Spray',
    'Contour Kit',
    'Cleanser ',
    'Toner ',
    'Moisturizer ',
    'Face Mask ',
    'Eye Cream ',
    'Serum ',
    'Exfoliator ',
  ];

  return (
    <div>
      <Webcam />
      <Sidebar cosmetics={cosmetics} />
    </div>
  );
};

export default Page;

// create one array of strings with 40 cosmetic names
