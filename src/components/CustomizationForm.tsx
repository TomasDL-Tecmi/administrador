"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Column, ColumnOption } from '@/types/columnTypes';

interface CustomizationFormProps {
  onClose: () => void;
  onApply: (option: ColumnOption) => void;
}

const CustomizationForm: React.FC<CustomizationFormProps> = ({ onClose, onApply }) => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [currentColumn, setCurrentColumn] = useState<{
    header: string;
    type: 'nombre' | 'descripcion' | 'imagen';
  }>({
    header: '',
    type: 'nombre'
  });

  const handleAddColumn = () => {
    if (currentColumn.header.trim()) {
      const newColumn: Column = {
        id: `col-${Date.now()}`,
        header: currentColumn.header,
        type: currentColumn.type
      };
      setColumns([...columns, newColumn]);
      setCurrentColumn({ header: '', type: 'nombre' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (columns.length > 0) {
      const option: ColumnOption = {
        id: `table-${Date.now()}`,
        label: 'Tabla Personalizada',
        columns: columns
      };
      onApply(option);
      onClose();
    }
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 }
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Personalizar Columnas</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {columns.map((column, index) => (
              <motion.div 
                key={column.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center space-x-2 p-3 bg-black-50 dark:bg-black-700 rounded-lg"
              >
                <span className="text-sm font-medium text-black-900 dark:text-white">{column.header}</span>
                <span className="text-xs px-2 py-1 bg-[#5ECFCA] bg-opacity-20 rounded-full text-[#5ECFCA] dark:text-black">
                  {column.type}
                </span>
                <button
                  type="button"
                  onClick={() => setColumns(columns.filter((_, i) => i !== index))}
                  className="ml-auto p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded-full text-red-500 dark:text-red-400"
                >
                  ×
                </button>
              </motion.div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                  Título de la columna
                </label>
                <input
                  type="text"
                  value={currentColumn.header}
                  onChange={(e) => setCurrentColumn({...currentColumn, header: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 
                  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5ECFCA] focus:border-transparent
                  transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Ingresa el título"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                  Tipo de columna
                </label>
                <div className="relative">
                  <select
                    value={currentColumn.type}
                    onChange={(e) => setCurrentColumn({
                      ...currentColumn,
                      type: e.target.value as 'nombre' | 'descripcion' | 'imagen'
                    })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 
                    dark:border-gray-600 rounded-lg appearance-none focus:ring-2 focus:ring-[#5ECFCA] 
                    focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                  >
                    <option value="nombre" className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700">Nombre</option>
                    <option value="descripcion" className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700">Descripción</option>
                    <option value="imagen" className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700">Imagen</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddColumn}
              className="w-full mt-4 px-4 py-2 bg-[#5ECFCA] bg-opacity-10 text-gray-900 dark:text-black
              rounded-lg hover:bg-opacity-20 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Agregar Columna
            </button>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
              shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300
              hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={columns.length === 0}
              className="px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-white 
              bg-[#5ECFCA] hover:bg-[#4DBDC8] disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200"
            >
              Aplicar
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CustomizationForm;