import React from "react";
import { PokemonCard } from "./PokemonCard";

export interface PokemonGridItem {
  name: string;
  image: string;
  number: number;
  types: string[];
}

interface PokemonGridProps {
  pokemons: PokemonGridItem[];
}

export const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.number} {...pokemon} />
      ))}
    </div>
  );
};
