import { useEffect, useState } from "react";
import { CharacterCard, CharacterCardProps } from "./CharacterCard";
import { getCharacters } from "../../api/rickAndMortyCalls";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
`;

export default function Characters() {
  const [characters, setCharacters] = useState<
    CharacterCardProps[] | undefined
  >();

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getCharacters();
        setCharacters(data.results as CharacterCardProps[]);
      } catch (e: any) {}
    }
    fetchCharacters();
  }, []);
  return (
    <div data-testid="rm-characters">
      <Container>
        {characters &&
          characters.map((character) => {
            return <CharacterCard key={character.id} {...character} />;
          })}
      </Container>
    </div>
  );
}
