import React from "react";

interface PokemonFiltersProps {
  types: string[];
  selectedType: string;
  onTypeChange: (type: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export const PokemonFilters: React.FC<PokemonFiltersProps> = ({ types, selectedType, onTypeChange, search, onSearchChange }) => (
  <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={search}
      onChange={e => onSearchChange(e.target.value)}
      className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <select
      value={selectedType}
      onChange={e => onTypeChange(e.target.value)}
      className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Todos los tipos</option>
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  </div>
);
