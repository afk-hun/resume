import { RouterProvider } from "react-router";
import Navbar from "../components/rick-and-morty/Navbar";
import { createBrowserRouter } from "react-router-dom";
import Characters from "../components/rick-and-morty/Characters/Characters";
import Locations from "../components/rick-and-morty/Locations";
import Episodes from "../components/rick-and-morty/Episodes";
import styled from "styled-components";

const Container = styled.div`
  background-color: #85d2d0;
`;

export const routerConfig = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/characters/", element: <Characters /> },
      { path: "/locations", element: <Locations /> },
      { path: "/episodes", element: <Episodes /> },
    ],
  },
];

export default function RickAndMortyPage() {
  const router = createBrowserRouter(routerConfig);
  return (
    <Container>
      <h1>Rick and Morty</h1>
      <RouterProvider router={router} />
    </Container>
  );
}
