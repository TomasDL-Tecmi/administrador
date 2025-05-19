export interface ColumnOption {
  id: string;
  label: string;
  columns: Column[];
}

export interface Column {
  id: string;
  header: string;
  type: 'nombre' | 'descripcion' | 'imagen';
}

export const predefinedOptions: ColumnOption[] = [
  {
    id: 'basic',
    label: 'Tabla Básica',
    columns: [
      { id: 'name', header: 'Nombre', type: 'nombre' },
      { id: 'age', header: 'Edad', type: 'descripcion' },
      { id: 'date', header: 'Fecha', type: 'imagen' }
    ]
  }
];