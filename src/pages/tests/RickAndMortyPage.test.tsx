import React from "react";
import { render, screen } from "@testing-library/react";
import RickAndMortyPage, { routerConfig } from "../RickAndMortyPage";
import { RouterProvider, createMemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

type Page = [page: string];
type PageWithId = [page: string, testId: string];
type LinkWithId = [link: string, testId: string];
type PageWithIdAndLink = [page: string, testId: string, link: string];

const setup = (path: string) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [path],
  });

  render(<RouterProvider router={router} />);
};
describe("Rick and Morty page", () => {
  test("renders header as Rick and Morty", () => {
    render(<RickAndMortyPage />);
    const header = screen.getByRole("heading", { name: "Rick and Morty" });
    expect(header).toBeInTheDocument();
  });

  it.each<Page>([["Characters"], ["Locations"], ["Episodes"]])(
    "renders %s subpage",
    (page) => {
      render(<RickAndMortyPage />);
      const characters = screen.getByText(page);
      expect(characters).toBeInTheDocument();
    }
  );

  it.each<PageWithIdAndLink>([
    ["Characters", "rm-characters", "/characters"],
    ["Locations", "rm-locations", "/locations"],
    ["Episodes", "rm-episodes", "/episodes"],
  ])("displays %s page with rm-episodes", (page, testId, link) => {
    setup(link);
    const dataTestId = screen.queryByTestId(testId!);
    expect(dataTestId).toBeInTheDocument();
  });

  it.each<PageWithId>([
    ["Characters", "rm-characters"],
    ["Locations", "rm-locations"],
    ["Episodes", "rm-episodes"],
  ])("clicks %s after display %s test id", (page, testId) => {
    setup("/");
    const link = screen.queryByRole("link", { name: page });
    act(() => {
      userEvent.click(link!);
    });
    const itemTestId = screen.queryByTestId(testId!);
    expect(itemTestId).toBeInTheDocument();
  });

  it("displays 'No character found' in case no network", () => {});
});
