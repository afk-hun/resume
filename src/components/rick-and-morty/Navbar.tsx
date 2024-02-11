import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
`;
const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Navbar() {
  return (
    <Section>
      <NavDiv>
        <Link to="characters">Characters</Link>
        <Link to="locations">Locations</Link>
        <Link to="episodes">Episodes</Link>
      </NavDiv>
      <div>
        <Outlet />
      </div>
    </Section>
  );
}
