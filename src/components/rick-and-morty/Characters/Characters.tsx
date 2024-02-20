import { MouseEvent, useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { getDataByLink, getCharacters } from "../../../api/rickAndMortyCalls";
import styled from "styled-components";

import CharacterDetails from "./CharacterDetails";
import {
  Modal,
  Navigation,
  NavigationButton,
  Section,
} from "../Common/StyledElements";
import { CharacterType } from "../Common/types";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
`;

export default function Characters() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [characterData, setCharacterData] = useState<CharacterType | null>(
    null
  );

  const [characters, setCharacters] = useState<CharacterType[] | undefined>();

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getCharacters();
        setCharacters(data.results as CharacterType[]);
        setNextPage(data.info.next);
        setPreviousPage(data.info.prev);
      } catch (e: any) {}
    }
    fetchCharacters();
  }, []);

  async function nextPageHandler(_event: MouseEvent<HTMLButtonElement>) {
    try {
      const data = await getDataByLink(nextPage!);
      setCharacters(data.results as CharacterType[]);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
    } catch (e: any) {}
  }

  async function previousPageHandler(_event: MouseEvent<HTMLButtonElement>) {
    try {
      const data = await getDataByLink(previousPage!);
      setCharacters(data.results as CharacterType[]);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
    } catch (e: any) {}
  }

  function characterClickHandler(characterData: CharacterType): void {
    setCharacterData(characterData);
    setShowModal(true);
  }

  function closeEventHandler(event: MouseEvent<HTMLAnchorElement>) {
    setShowModal(false);
    setCharacterData(null);
  }

  return (
    <Section data-testid="rm-characters">
      <Container>
        {characters &&
          characters.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                character={character}
                onCLick={characterClickHandler}
              />
            );
          })}
      </Container>
      <Navigation>
        {previousPage !== null && (
          <NavigationButton onClick={previousPageHandler} type="button">
            &lt; previous
          </NavigationButton>
        )}
        {nextPage !== null && (
          <NavigationButton onClick={nextPageHandler} type="button">
            next &gt;
          </NavigationButton>
        )}
      </Navigation>

      {showModal && (
        <Modal>
          <CharacterDetails onClick={closeEventHandler} {...characterData!} />
        </Modal>
      )}
    </Section>
  );
}
