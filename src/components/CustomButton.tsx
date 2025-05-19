"use client";

import React, { ReactNode, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomizationForm from './CustomizationForm';
import { ColumnOption } from '@/types/columnTypes';

interface CustomButtonProps {
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  onOptionSelect?: (option: ColumnOption) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  icon, 
  className = "",
  ariaLabel = "Botón de acción",
  onOptionSelect
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleApply = (option: ColumnOption) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setShowForm(false);
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        aria-label={ariaLabel}
        className={`rounded-full bg-[#5ECFCA] hover:bg-[#4DBDC8] text-white p-3 
        transition-all duration-200 ease-in-out
        hover:shadow-lg hover:-translate-y-1
        active:translate-y-0 active:shadow-md
        flex items-center justify-center shadow-md ${className}`}
      >
        {icon}
      </button>
      
      <AnimatePresence>
        {showForm && <CustomizationForm onClose={() => setShowForm(false)} onApply={handleApply} />}
      </AnimatePresence>
    </>
  );
};

export default CustomButton;