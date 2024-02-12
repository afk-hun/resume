import { useEffect, useState, MouseEvent } from "react";
import { getDataByLink, getLocations } from "../../../api/rickAndMortyCalls";
import {
  Navigation,
  NavigationButton,
  Section,
} from "../Common/StyledElements";
import styled from "styled-components";
import { LocationCard } from "./LocationCard";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #887bb0;
  width: 1000px;
  border-radius: 4px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const LocationTable = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  width: 800px;
  gap: 0.5rem;
  border: 2px solid #887bb0;
  padding: 0.5rem 2rem 1.5rem 2rem;
`;

const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const TableHeaderTitle = styled.h1`
  margin: 0;
  width: 100%;
  font-weight: 600;
`;
const TableHeaderType = styled.h1`
  margin: 0;
  min-width: 150px;
  font-weight: 600;
  min-width: 200px;
`;
const TableHeaderDimension = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-width: 80px;
  font-weight: 600;
  min-width: 250px;
`;

const TableHeaderEmpty = styled.h1`
  min-width: 50px;
`;

export type LocationType = {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export default function Locations() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [locations, setLocations] = useState<LocationType[] | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getLocations();
        setLocations(data.results as LocationType[]);
        setNextPage(data.info.next);
        setPreviousPage(data.info.prev);
      } catch (e: any) {}
    }
    fetchCharacters();
  }, []);
  async function previousPageHandler(_event: MouseEvent<HTMLButtonElement>) {
    try {
      const data = await getDataByLink(previousPage!);
      setLocations(data.results as LocationType[]);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
    } catch (e: any) {}
  }

  async function nextPageHandler(_event: MouseEvent<HTMLButtonElement>) {
    try {
      const data = await getDataByLink(nextPage!);
      setLocations(data.results as LocationType[]);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
    } catch (e: any) {}
  }

  function locationDetailsHandler(): void {}

  return (
    <Section data-testid="rm-locations">
      <Container>
        <LocationTable>
          <TableHeaderContainer>
            <TableHeaderTitle>Name</TableHeaderTitle>
            <TableHeaderType>Type</TableHeaderType>
            <TableHeaderDimension>Dimension</TableHeaderDimension>
            <TableHeaderEmpty />
          </TableHeaderContainer>
          {locations &&
            locations.map((location) => {
              return (
                <LocationCard
                  key={location.id}
                  {...location}
                  onClick={locationDetailsHandler}
                />
              );
            })}
        </LocationTable>
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
    </Section>
  );
}
