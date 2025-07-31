import React from "react";
import { useNavigate } from "react-router-dom";
import HeartFilled from "@assets/icon-heart-green.svg";
import HeartOutline from "@assets/icon-heart.svg";
import type { CharacterItemProps } from "@interface/character.types";

const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  name,
  image,
  species,
  isStarred,
  isSelected,
  onToggleStar,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
      style={
        isSelected ? { backgroundColor: "var(--color-primary-1)" } : undefined
      }
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="truncate">
          <h3 className="font-medium text-sm text-gray-900 truncate">{name}</h3>
          <p className="text-xs text-gray-500 truncate">{species}</p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleStar();
        }}
        aria-label="Toggle favorite"
        className="w-6 h-6 bg-transparent border-none p-0"
      >
        <img
          src={isStarred ? HeartFilled : HeartOutline}
          alt={isStarred ? "Unfavorite" : "Favorite"}
          className="w-full h-full object-contain"
        />
      </button>
    </div>
  );
};

export default CharacterItem;
