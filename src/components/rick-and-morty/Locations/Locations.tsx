import { useEffect, useState, MouseEvent } from "react";
import { getDataByLink, getLocations } from "../../../api/rickAndMortyCalls";
import {
  Content,
  MainSection,
  Navigation,
  NavigationButton,
  TableHeaderContainer,
  TableHeaderEmpty,
  TableHeaderSubtitle,
  TableHeaderTitle,
} from "../Common/StyledElements";
import styled from "styled-components";
import { LocationCard } from "./LocationCard";
import { LeftText, ListContainer } from "../Common/CardElements";
import { LocationType } from "../Common/types";

const LocationContent = styled(Content)`
  padding-top: 1rem;
`;

const TableHeaderDimension = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  font-weight: 600;
  inline-size: 120px;
  overflow-wrap: break-word;
`;

export default function Locations() {
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

  return (
    <MainSection data-testid="rm-locations">
      <LocationContent>
        <TableHeaderContainer>
          <LeftText>
            <TableHeaderTitle>Name</TableHeaderTitle>
            <TableHeaderSubtitle>Type</TableHeaderSubtitle>
          </LeftText>
          <ListContainer>
            <TableHeaderDimension>Dimension</TableHeaderDimension>
            <TableHeaderEmpty />
          </ListContainer>
        </TableHeaderContainer>
        {locations &&
          locations.map((location) => {
            return <LocationCard key={location.id} {...location} />;
          })}

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
      </LocationContent>
    </MainSection>
  );
}
