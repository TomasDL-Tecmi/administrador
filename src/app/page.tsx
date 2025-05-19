"use client";

import { useState } from 'react';
import EmptyState from "@/components/EmptyState";
import CustomButton from "@/components/CustomButton";
import { motion } from 'framer-motion';
import { ColumnOption } from '@/types/columnTypes';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<ColumnOption | null>(null);

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)] relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10"
      >
        <CustomButton 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
            </svg>
          }
          ariaLabel="Personalizar"
          onOptionSelect={setSelectedOption}
        />
      </motion.div>
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-16"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <h2 className="text-xl font-semibold mb-4">Panel Principal</h2>
          {selectedOption ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    {selectedOption.columns.map((column) => (
                      <th
                        key={column.id}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        {column.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {/* Aquí se agregarán las filas de datos más adelante */}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState />
          )}
        </motion.div>
      </motion.main>
    </div>
  );
}
