import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import App from "./App";

const fetchCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data.results;
};

function Characters() {
  /**
   * Query to get a list of characters
   */
  const {
    data = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  return (
    <App
      characters={data}
      isPendingCharacters={isPending}
      isCharactersError={isError}
    />
  );
}

export default Characters;
