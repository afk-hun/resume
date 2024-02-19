import styled from "styled-components";
import skeletonImg from "../../../asset/skeleton.jpeg";

export const Modal = styled.div`
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navigation = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  gap: 1rem;
`;

export const NavigationButton = styled.button`
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff4bd;
  color: #887bb0;
  border-radius: 4px;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid #887bb0;
  border-radius: 4px;
`;

export const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Character = styled.div<{ $background: string }>`
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

export const CharacterName = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 10px;
`;

export const More = styled.a`
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
