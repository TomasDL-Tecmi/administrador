"use client";

import React from 'react';
import CustomButton from './CustomButton';

const CustomizeButtonWrapper = () => {
  const handleClick = () => {
    console.log('Personalizar');
    // Aquí puedes añadir la lógica de personalización
  };

  return (
    <CustomButton 
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
        </svg>
      }
      ariaLabel="Personalizar"
    />
  );
};

export default CustomizeButtonWrapper;