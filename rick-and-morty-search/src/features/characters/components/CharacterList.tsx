import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import CharacterItem from "@components/CharacterItem/CharacterItem";
import CharacterDetail from "@components/CharacterDetail/CharacterDetail";
import { GET_CHARACTERS } from "@api/character-queries";
import type { Character } from "@interface/character.types";
import FilterIcon from "@assets/icon-filter.svg";
import useFavorites from "@hooks/useFavorites";
import useFilteredCharacters from "@hooks/useFilteredCharacters";
import CharacterFilters from "./CharacterFilters/CharacterFilters";
import type {
  CharacterTypeFilter,
  SpeciesFilter,
} from "@interface/filter.type";

const CharacterList: React.FC = () => {
  const [selectedCharacterType, setSelectedCharacterType] =
    useState<CharacterTypeFilter>("all");
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesFilter>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(GET_CHARACTERS);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  useEffect(() => {
    if (data?.characters?.results?.length > 0) {
      const selected = data.characters.results.find(
        (char: Character) => char.id === id
      );
      setSelectedCharacter(selected || data.characters.results[0]);
    }
  }, [data, id]);

  const rawCharacters: Character[] = data?.characters?.results || [];
  const filteredCharacters = useFilteredCharacters({
    characters: rawCharacters,
    favorites,
    searchQuery,
    sortOrder,
    selectedCharacterType,
    selectedSpecies,
  });
  const starredFiltered = filteredCharacters.filter((char) =>
    favorites.includes(char.id)
  );
  const regularFiltered = filteredCharacters.filter(
    (char) => !favorites.includes(char.id)
  );
  const handleToggleFavorite = (id: string) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };
  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    navigate(`/character/${char.id}`);
  };

  return (
    <div className="flex h-screen">
      {/* Desktop List */}
      <div
        className="hidden md:flex flex-col overflow-y-auto p-4  min-w-[375px]"
        style={{ backgroundColor: "var(--color-div-gray)" }}
      >
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Rick and Morty List
        </h2>
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search or filter results"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-28"
          />

          {/* Button sort A-Z / Z-A */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-primary-1 px-1"
            aria-label="Toggle sort order"
          >
            {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>

          {/* Button filters */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-1"
            aria-label="Toggle filters"
          >
            <img
              src={FilterIcon}
              alt="Filter"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
        {showFilters && (
          <CharacterFilters
            selectedCharacterType={selectedCharacterType}
            setSelectedCharacterType={setSelectedCharacterType}
            selectedSpecies={selectedSpecies}
            setSelectedSpecies={setSelectedSpecies}
            onClose={() => setShowFilters(false)}
          />
        )}

        {starredFiltered.length > 0 && (
          <>
            <h2 className="text-sm text-gray-400 uppercase mb-2">
              Starred Characters ({starredFiltered.length})
            </h2>
            {starredFiltered.map((char: Character) => (
              <CharacterItem
                key={char.id}
                id={char.id}
                name={char.name}
                image={char.image}
                species={char.species}
                isStarred={favorites.includes(char.id)}
                isSelected={selectedCharacter?.id === char.id}
                onSelect={() => handleSelectCharacter(char)}
                onToggleStar={() => handleToggleFavorite(char.id)}
              />
            ))}
          </>
        )}
        <h2 className="text-sm text-gray-400 uppercase mt-6 mb-2">
          Characters ({regularFiltered.length})
        </h2>
        {regularFiltered.map((char: Character) => (
          <CharacterItem
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            species={char.species}
            isStarred={favorites.includes(char.id)}
            isSelected={selectedCharacter?.id === char.id}
            onSelect={() => handleSelectCharacter(char)}
            onToggleStar={() => handleToggleFavorite(char.id)}
          />
        ))}
      </div>

      {/* Desktop Detail */}
      <div className="hidden md:block w-1/2">
        {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        {!selectedCharacter ? (
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Rick and Morty</h1>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full mb-4 border border-gray-300 rounded-lg py-2 px-4"
            />
            {[...starredFiltered, ...regularFiltered].map((char: Character) => (
              <CharacterItem
                key={char.id}
                id={char.id}
                name={char.name}
                image={char.image}
                species={char.species}
                isStarred={favorites.includes(char.id)}
                isSelected={false}
                onSelect={() => handleSelectCharacter(char)}
                onToggleStar={() => handleToggleFavorite(char.id)}
              />
            ))}
          </div>
        ) : (
          <CharacterDetail
            character={selectedCharacter}
            onBack={() => setSelectedCharacter(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CharacterList;
