import styled from "styled-components";
import { LocationType } from "./Locations";
import { useDefaultIfUnknown } from "../../../utils/utilityFunctions";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #fff4bd;
  color: #887bb0;
  border-radius: 4px;
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Type = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  min-width: 200px;
`;
const Dimension = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  min-width: 250px;
`;
const More = styled.a`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
`;

type LocationCard = { onClick: () => void } & LocationType;

export function LocationCard(props: LocationCard) {
  const { name, type, dimension, onClick } = props;
  return (
    <Container>
      <Name>{name}</Name>
      <Type>{useDefaultIfUnknown(type, "Undefined")}</Type>
      <Dimension>{useDefaultIfUnknown(dimension, "Undefined")}</Dimension>
      <More onClick={onClick}>More</More>
    </Container>
  );
}
