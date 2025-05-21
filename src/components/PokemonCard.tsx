import React from "react";
import { PokemonTypeBadge } from "./PokemonTypeBadge";

interface PokemonCardProps {
  name: string;
  image: string;
  number: number;
  types: string[];
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, number, types }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700">
      <img src={image} alt={name} className="w-24 h-24 object-contain mb-2 drop-shadow-lg" loading="lazy" />
      <span className="text-xs text-gray-400">#{number.toString().padStart(3, "0")}</span>
      <h3 className="font-bold text-lg capitalize text-gray-900 dark:text-white mb-1">{name}</h3>
      <div className="flex gap-2 mt-1">
        {types.map((type) => (
          <PokemonTypeBadge key={type} type={type} />
        ))}
      </div>
    </div>
  );
};
