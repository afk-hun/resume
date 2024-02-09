import styled from "styled-components";
import RickAndMortyPage from "./pages/RickAndMortyPage";

const Div = styled.div`
  display: flex;
  border: 2px solid white;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
  height: 2rem;
`;

function App() {
  return (
    <>
      <Div> Hej och trevligt att träffas! </Div>
      <RickAndMortyPage />
    </>
  );
}

export default App;
