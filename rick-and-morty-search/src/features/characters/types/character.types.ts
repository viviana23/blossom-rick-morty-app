export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: {
    name: string;
  };
}

export interface ExtendedCharacter extends Character {
  isStarred: boolean;
}

export interface CharacterItemProps {
  id: string;
  name: string;
  image: string;
  species: string;
  isStarred: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onToggleStar: () => void;
}

export interface FilterProps {
  selectedCharacterType: string;
  setSelectedCharacterType: (type: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (type: string) => void;
  onClose: () => void;
}
