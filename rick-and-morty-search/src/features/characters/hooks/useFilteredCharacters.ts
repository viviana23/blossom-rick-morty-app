import type { Character } from "@interface/character.types";
import type { UseFilteredCharactersParams } from "@interface/filter.type";

const useFilteredCharacters = ({
  characters,
  searchQuery,
  sortOrder,
  selectedCharacterType,
  selectedSpecies,
  favorites,
}: UseFilteredCharactersParams): Character[] => {
  let filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedCharacterType === "starred") {
    filtered = filtered.filter((char) => favorites.includes(char.id));
  } else if (selectedCharacterType === "others") {
    filtered = filtered.filter((char) => !favorites.includes(char.id));
  }

  if (selectedSpecies !== "all") {
    filtered = filtered.filter(
      (char) => char.species.toLowerCase() === selectedSpecies
    );
  }

  return filtered.sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
};

export default useFilteredCharacters;
