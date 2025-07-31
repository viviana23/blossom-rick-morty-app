import type {
  CharacterTypeFilter,
  FilterProps,
  SpeciesFilter,
} from "@interface/filter.type";
import React from "react";

const CharacterFilters: React.FC<FilterProps> = ({
  selectedCharacterType,
  setSelectedCharacterType,
  selectedSpecies,
  setSelectedSpecies,
  onClose,
}) => {
  const characterTypes: CharacterTypeFilter[] = ["all", "starred", "others"];
  const speciesOptions: SpeciesFilter[] = ["all", "human", "alien"];

  return (
    <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-600 mb-1">Character</p>
        <div className="flex gap-2">
          {characterTypes.map((type: CharacterTypeFilter) => (
            <button
              key={type}
              onClick={() => setSelectedCharacterType(type)}
              className={`flex-1 px-3 py-1 text-sm rounded-lg ${
                selectedCharacterType === type
                  ? "bg-primary-100 text-primary-700 font-medium"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-600 mb-1">Specie</p>
        <div className="flex gap-2">
          {speciesOptions.map((specie: SpeciesFilter) => (
            <button
              key={specie}
              onClick={() => setSelectedSpecies(specie)}
              className={`flex-1 px-3 py-1 text-sm rounded-lg ${
                selectedSpecies === specie
                  ? "bg-primary-100 text-primary-700 font-medium"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {specie.charAt(0).toUpperCase() + specie.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-full mt-2 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold"
      >
        Filter
      </button>
    </div>
  );
};

export default CharacterFilters;
