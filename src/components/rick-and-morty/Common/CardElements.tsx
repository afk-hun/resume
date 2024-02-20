import styled from "styled-components";

export const ListContainer = styled.div`
  //@media (min-width: 375px)
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
  }
`;

export const LeftText = styled(ListContainer)`
  //@media (min-width: 375px)
  justify-content: space-between;
  flex-grow: 1;
  gap: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
  }
`;
