import { render, screen, fireEvent } from "@testing-library/react";
import CharacterDetail from "./CharacterDetail";
import type { Character } from "@interface/character.types";
import { describe, it, expect, vi } from "vitest";

describe("CharacterDetail", () => {
  const mockCharacter: Character = {
    id: "1",
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Human",
    status: "Alive",
    origin: {
      name: "Earth",
    },
  };

  it("renders character details correctly", () => {
    render(<CharacterDetail character={mockCharacter} />);

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByAltText("Rick Sanchez")).toBeInTheDocument();
  });

  it("calls onBack when back button is clicked", () => {
    const mockOnBack = vi.fn();
    render(<CharacterDetail character={mockCharacter} onBack={mockOnBack} />);

    const backButton = screen.getByRole("button", { name: /back/i });
    fireEvent.click(backButton);

    expect(mockOnBack).toHaveBeenCalled();
  });
});
