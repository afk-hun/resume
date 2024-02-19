import { useEffect, useState } from "react";
import styled from "styled-components";
import { EpisodeType } from "../Characters/CharacterDetails";
import { getSeasons } from "../../../api/rickAndMortyCalls";

const MainContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
`;

const Navigation = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background: #887bb0;
  border-radius: 4px 0 0 4px;
  height: 100%;
  overflow: hidden;
`;
const SeasonListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const SeasonListButton = styled.button`
  display: flex;
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
  padding: 1rem;
  background-color: #fff4bd;
  color: #887bb0;
  border-radius: 4px;
`;

const EpisodeContainer = styled.div`
  display: flex;
  height: 3rem;
  padding: 0.5rem;
`;
const EpisodeName = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  flex-wrap: wrap;
  width: 400px;
`;
const EpisodeOnAirDate = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  min-width: 150px;
  font-weight: 300;
`;
const EpisodeNumber = styled.h1`
  display: flex;
  justify-content: end;
  align-items: center;
  align-self: flex-end;
  min-width: 80px;
  margin: 0;
  font-weight: 500;
`;

const Episode = (props: EpisodeType) => {
  const { name, air_date, episode } = props;
  return (
    <EpisodeContainer>
      <EpisodeName>{name}</EpisodeName>
      <EpisodeOnAirDate>{air_date}</EpisodeOnAirDate>
      <EpisodeNumber>
        #{episode.substring(episode.length - 2, episode.length)}
      </EpisodeNumber>
    </EpisodeContainer>
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
      <Navigation>
        {seasons.map((season, index) => {
          return (
            <SeasonListItem key={index}>
              <SeasonListButton
                type="button"
                onClick={() => {
                  setActiveSeason(index);
                }}
              >
                Season {index + 1}
              </SeasonListButton>
            </SeasonListItem>
          );
        })}
      </Navigation>
      <Content>
        {seasons[activeSeason] !== undefined &&
          seasons[activeSeason].results.map((episode) => {
            return <Episode key={episode.id} {...episode} />;
          })}
      </Content>
    </MainContainer>
  );
}
