import styled from "styled-components";
import { LocationType } from "./Locations";
import { useDefaultIfUnknown } from "../../../utils/utilityFunctions";
import { useState, MouseEvent } from "react";
import { CharacterType } from "../Characters/CharacterCard";
import { getDataByLink, getDatasByLinks } from "../../../api/rickAndMortyCalls";
import {
  Character,
  CharacterBox,
  CharacterContainer,
  CharacterName,
  Container,
  More,
} from "../Common/StyledElements";

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff4bd;
  color: #887bb0;
  border-radius: 4px;
  gap: 0.5px;
`;
const Name = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
  border-right: 1px solid #887bb0;
`;
const Type = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  min-width: 150px;
  border-right: 1px solid #887bb0;
`;
const Dimension = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  min-width: 200px;
`;

export function LocationCard(props: LocationType) {
  const { name, type, dimension, residents } = props;

  const [residentsState, setResidentsState] = useState<CharacterType[] | null>(
    null
  );
  const [expand, setExpand] = useState<boolean>(false);

  async function residentClickHandler(event: MouseEvent<HTMLAnchorElement>) {
    try {
      const response = await getDatasByLinks(residents, getDataByLink);
      setResidentsState(response as CharacterType[]);
      setExpand((prevState) => {
        return !prevState;
      });
    } catch {}
  }

  return (
    <Container>
      <LocationContainer>
        <Name>{name}</Name>
        <Type>{useDefaultIfUnknown(type, "Undefined")}</Type>
        <Dimension>{useDefaultIfUnknown(dimension, "Undefined")}</Dimension>
        <More onClick={residentClickHandler}>Residents</More>
      </LocationContainer>

      {expand && (
        <CharacterContainer>
          {residentsState?.map((resident) => {
            return (
              <CharacterBox key={resident.id}>
                <Character $background={resident.image}></Character>
                <CharacterName>{resident.name}</CharacterName>
              </CharacterBox>
            );
          })}
        </CharacterContainer>
      )}
    </Container>
  );
}
