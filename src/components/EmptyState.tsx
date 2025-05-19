"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "Nada configurado actualmente" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 flex items-center justify-center"
    >
      <p className="text-gray-500 dark:text-gray-400 text-center font-medium">{message}</p>
    </motion.div>
  );
};

export default EmptyState;