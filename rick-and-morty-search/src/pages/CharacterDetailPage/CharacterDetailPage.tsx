import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "@api/character-queries";
import CharacterDetail from "@components/CharacterDetail/CharacterDetail";

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <div className="p-4 text-gray-500">Loading...</div>;
  if (error || !data?.character)
    return <div className="p-4 text-red-500">Character not found</div>;

  return (
    <div className="p-4">
      <CharacterDetail character={data.character} />
    </div>
  );
};

export default CharacterDetailPage;
