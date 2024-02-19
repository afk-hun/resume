import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getDataByLink,
  getDatasByLinks,
  getSeasons,
} from "../../../api/rickAndMortyCalls";
import {
  CharacterContainer,
  CharacterBox,
  Character,
  CharacterName,
  More,
  Container,
} from "../Common/StyledElements";
import { CharacterType } from "../Characters/CharacterCard";
import { EpisodeType } from "../Common/types";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const SeasonText = styled.div`
  display: flex;
  padding-right: 1rem;
  font-weight: 600;
`;

const SeasonListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
`;
const SeasonListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #887bb0;
  padding: 0.5rem;
  color: #fff4bd;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;

  &:focus {
    color: #887bb0;
    background: #fff4bd;
  }

  &:active {
    color: #887bb0;
    background: #fff4bd;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #887bb0;
  border-radius: 4px;
  border: 2px solid #887bb0;
  gap: 0.5rem;
  width: 800px;
  padding: 0 2rem 1.5rem 2rem;
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
const TableHeaderOnAir = styled.h1`
  margin: 0;
  min-width: 170px;
  font-weight: 600;
`;
const TableHeaderHashtag = styled.h1`
  display: flex;
  padding-right: 1rem;
  justify-content: flex-end;
  margin: 0;
  font-weight: 600;
  min-width: 80px;
`;

const TableHeaderEmpty = styled.h1`
  min-width: 80px;
`;

const EpisodeContainer = styled.div`
  display: flex;
  align-items: center;
`;
const EpisodeName = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  flex-wrap: wrap;
  width: 100%;
`;
const EpisodeOnAirDate = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  min-width: 170px;
  font-weight: 300;
`;
const EpisodeNumber = styled.h1`
  padding-right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 80px;
  margin: 0;
  font-weight: 500;
`;

const Episode = (props: EpisodeType) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [residentsState, setResidentsState] = useState<CharacterType[] | null>(
    null
  );
  const { name, air_date, episode, characters } = props;

  async function residentClickHandler() {
    try {
      const response = await getDatasByLinks(characters, getDataByLink);
      setResidentsState(response as CharacterType[]);
      setExpand((prevState) => {
        return !prevState;
      });
    } catch {}
  }

  return (
    <Container>
      <EpisodeContainer>
        <EpisodeName>{name}</EpisodeName>
        <EpisodeOnAirDate>{air_date}</EpisodeOnAirDate>
        <EpisodeNumber>
          #{episode.substring(episode.length - 2, episode.length)}
        </EpisodeNumber>
        <More
          onClick={() => {
            residentClickHandler();
          }}
        >
          Residents
        </More>
      </EpisodeContainer>

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
};

type SeasonType = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: EpisodeType[];
};

export default function Episodes() {
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  const [activeSeason, setActiveSeason] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        await getSeasons(async (data) => {
          const response = (await data) as SeasonType;
          setSeasons((prevState) => {
            const i = prevState.findIndex(
              (e) => e.results[0].name === response.results[0].name
            );
            if (i === -1) {
              return [...prevState, response];
            } else {
              return [...prevState];
            }
          });
        });
      } catch {}
    }
    fetchData();
  }, []);

  return (
    <MainContainer>
      <Content>
        <Navigation>
          <SeasonText>Season</SeasonText>
          {seasons.map((season, index) => {
            return (
              <SeasonListItem key={index}>
                <SeasonListButton
                  type="button"
                  onClick={() => {
                    setActiveSeason(index);
                  }}
                >
                  {index + 1}
                </SeasonListButton>
              </SeasonListItem>
            );
          })}
        </Navigation>
        <TableHeaderContainer>
          <TableHeaderTitle>Name</TableHeaderTitle>
          <TableHeaderOnAir>On Air</TableHeaderOnAir>
          <TableHeaderHashtag>#</TableHeaderHashtag>
          <TableHeaderEmpty />
        </TableHeaderContainer>
        {seasons[activeSeason] !== undefined &&
          seasons[activeSeason].results.map((episode) => {
            return <Episode key={episode.id} {...episode} />;
          })}
      </Content>
    </MainContainer>
  );
}
