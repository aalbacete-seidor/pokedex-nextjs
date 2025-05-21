import React from "react";

interface PokemonTypeBadgeProps {
  type: string;
}

const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  ice: "bg-cyan-300",
  fighting: "bg-orange-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300",
  psychic: "bg-pink-400",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-700",
  dark: "bg-gray-800",
  dragon: "bg-indigo-900",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

export const PokemonTypeBadge: React.FC<PokemonTypeBadgeProps> = ({ type }) => (
  <span className={`px-2 py-0.5 rounded text-xs font-semibold text-white capitalize ${typeColors[type] || "bg-gray-300"}`}>
    {type}
  </span>
);
