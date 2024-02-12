import styled from "styled-components";

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
