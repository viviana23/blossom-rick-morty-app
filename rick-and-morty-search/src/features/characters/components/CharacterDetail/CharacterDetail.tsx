import type { Character } from "@interface/character.types";
import React from "react";

interface CharacterDetailProps {
  character: Character;
  onBack?: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
  onBack,
}) => {
  return (
    <div className="p-6 w-full h-full">
      {/* Back button only visible on mobile*/}
      {onBack && (
        <button onClick={onBack} className="mb-4 text-purple-600 md:hidden">
          ← Back
        </button>
      )}

      <div className="flex flex-col">
        <img
          src={character.image}
          alt={character.name}
          className="w-24 h-24 rounded-full object-cover shadow mb-4"
        />
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {character.name}
        </h2>

        <div className="space-y-4 mt-4 text-left w-full max-w-sm">
          <div>
            <h3 className="text-sm text-gray-500">Specie</h3>
            <p className="text-base text-gray-800">{character.species}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">Status</h3>
            <p className="text-base text-gray-800">{character.status}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">Origin</h3>
            <p className="text-base text-gray-800">
              {character.origin?.name || "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
