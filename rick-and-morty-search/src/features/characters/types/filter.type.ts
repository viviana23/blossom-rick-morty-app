import type { Character } from "./character.types";

export type CharacterTypeFilter = "all" | "starred" | "others";
export type SpeciesFilter = "all" | "human" | "alien";

export interface UseFilteredCharactersParams {
  characters: Character[];
  favorites: string[];
  searchQuery: string;
  sortOrder: "asc" | "desc";
  selectedCharacterType: CharacterTypeFilter;
  selectedSpecies: SpeciesFilter;
}

export interface FilterProps {
  selectedCharacterType: CharacterTypeFilter;
  setSelectedCharacterType: (type: CharacterTypeFilter) => void;
  selectedSpecies: SpeciesFilter;
  setSelectedSpecies: (type: SpeciesFilter) => void;
  onClose: () => void;
}
