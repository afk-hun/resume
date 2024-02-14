import styled from "styled-components";
import { LocationType } from "./Locations";
import { useDefaultIfUnknown } from "../../../utils/utilityFunctions";
import skeletonImg from "../../../asset/skeleton.jpeg";
import { useState, MouseEvent } from "react";
import { CharacterType } from "../Characters/CharacterCard";
import { getDataByLink, getDatasByLinks } from "../../../api/rickAndMortyCalls";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff4bd;
  color: #887bb0;
  border-radius: 4px;
`;

const EpisodeContainer = styled.div`
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
const More = styled.a`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  max-height: 24px;
  color: #fff4bd;
  background: #887bb0;
  border-radius: 4px;
  cursor: pointer;
`;
const ResidentsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid #887bb0;
  border-radius: 4px;
`;

const ResidentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Resident = styled.div<{ $background: string }>`
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: url(${(props) =>
    props.$background ? props.$background : skeletonImg});
  background-size: cover;
`;

const ResidentName = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 10px;
`;

type LocationCard = { onClick: () => void } & LocationType;

export function LocationCard(props: LocationCard) {
  const { name, type, dimension, onClick, residents } = props;

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
      <EpisodeContainer>
        <Name>{name}</Name>
        <Type>{useDefaultIfUnknown(type, "Undefined")}</Type>
        <Dimension>{useDefaultIfUnknown(dimension, "Undefined")}</Dimension>
        <More onClick={residentClickHandler}>Residents</More>
      </EpisodeContainer>

      {expand && (
        <ResidentsContainer>
          {residentsState?.map((resident) => {
            return (
              <ResidentBox key={resident.id}>
                <Resident $background={resident.image}></Resident>
                <ResidentName>{resident.name}</ResidentName>
              </ResidentBox>
            );
          })}
        </ResidentsContainer>
      )}
    </Container>
  );
}
