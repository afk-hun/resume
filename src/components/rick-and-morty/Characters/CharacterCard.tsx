import styled from "styled-components";
import { MouseEvent } from "react";
import skeletonImg from "../../../asset/skeleton.jpeg";
import { useDefaultIfUnknown } from "../../../utils/utilityFunctions";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 1rem;
  width: 22rem;
  height: 12rem;
  border-radius: 4px;
  position: relative;
  background-color: #fff4bd;
  color: #887bb0;
`;

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

type ProfileImageProps = {
  $path?: string;
  $isDead?: boolean;
};

const ProfileImage = styled.img<ProfileImageProps>`
  content: url(${(props) => (props.$path ? props.$path : skeletonImg)});
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50% 0 0 0;
  width: 130px;
  height: 130px;
  filter: ${(props) => {
    if (props.$isDead) {
      return "grayscale(100%);";
    }
  }};
`;

const Name = styled.h1`
  padding: 0;
  margin: 0 0 0.3rem 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`;

const Extracts = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: calc(100% - 100px);
  justify-content: end;
`;

const Locations = styled.div`
  display: flex;
  flex-direction: column;
`;

const Identity = styled.p`
  padding: 0;
  margin: 0 0 0.3rem 0;
  color: #887bb0;
  font-weight: 300;
  font-size: 14px;
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  color: #887bb0;
  font-weight: 500;
  font-size: 14px;
`;

const Location = styled.p`
  margin: 0;
  text-decoration: none;
  padding-left: 1rem;
  color: #887bb0;
  font-style: italic;
  font-weight: 300;
`;

const More = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  text-decoration: none;
  color: #887bb0;
  font-weight: 500;
  cursor: pointer;
  border: #887bb0 1px solid;
  border-radius: 4px;
  width: 3rem;
  height: 1.3rem;
  background-color: #fff4bd;
  opacity: 50%;

  &:hover {
    border: #fff4bd 1px solid;
    background-color: #887bb0;
    color: #fff4bd;
    opacity: 1;
  }
`;

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
};

export type CharacterCardProps = {
  character: CharacterType;
  onCLick: (characterData: CharacterType) => void;
};

export function CharacterCard(props: CharacterCardProps) {
  const { name, status, species, gender, origin, location, image } =
    props.character;

  function onClickHandler(_event: MouseEvent<HTMLAnchorElement>): void {
    props.onCLick(props.character);
  }
  return (
    <Container>
      <Content>
        <Name>{name}</Name>
        <Extracts>
          <Identity>
            {species} - {useDefaultIfUnknown(gender, "Uncategorised")}
          </Identity>
          <Locations>
            <Paragraph>Last known</Paragraph>
            <Location>{useDefaultIfUnknown(location.name, "-")}</Location>
            <Paragraph>Origin</Paragraph>
            <Location>{useDefaultIfUnknown(origin.name, "-")}</Location>
          </Locations>
        </Extracts>
      </Content>
      <ProfileImage
        $path={image}
        $isDead={status === "Dead"}
        alt="Character image from Rick and Morty"
      ></ProfileImage>
      <More onClick={onClickHandler}>More</More>
    </Container>
  );
}
