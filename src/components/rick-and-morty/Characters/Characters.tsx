import { MouseEvent, useEffect, useState } from "react";
import { CharacterCard, CharacterType } from "./CharacterCard";
import {
  getCharactersByLink,
  getCharacters,
} from "../../../api/rickAndMortyCalls";
import styled from "styled-components";

import CharacterDetails from "./CharacterDetails";

const Modal = styled.div`
  display: flex;
  position: fixed;
  justify-items: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #85d2d087;
  width: 100wh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
`;

const Navigation = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  gap: 1rem;
`;

const NavigationButton = styled.button`
  box-sizing: border-box;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #887bb0;
  color: #fff4bd;
  width: 6rem;
  height: 2rem;
  align-self: flex-end;
  border-radius: 4px;

  &:hover {
    border: 1px solid #fff4bd;
    cursor: pointer;
  }

  &:active {
    background-color: #665c84;
  }
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
      const data = await getCharactersByLink(nextPage!);
      setCharacters(data.results as CharacterType[]);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
    } catch (e: any) {}
  }

  async function previousPageHandler(_event: MouseEvent<HTMLButtonElement>) {
    try {
      const data = await getCharactersByLink(previousPage!);
      setCharacters(data.results as CharacterType[]);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
    } catch (e: any) {}
  }

  function characterClickHandler(characterData: CharacterType): void {
    setCharacterData(characterData);
    setShowModal(true);
  }

  function modalClickHandler(event: MouseEvent<HTMLAnchorElement>) {
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
          <CharacterDetails onClick={modalClickHandler} {...characterData!} />
        </Modal>
      )}
    </Section>
  );
}
