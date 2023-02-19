import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/ui/Header";

const mockedRouter = {
  push: jest.fn(),
  prefetch: () => Promise.resolve(),
} as any;

jest.mock("next/router", () => ({
  useRouter: () => mockedRouter,
}));

describe("Header component", () => {
  it("renders three buttons", () => {
    const { getAllByRole } = render(<Header />);
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  it("navigates to the correct pages when buttons are clicked", () => {
    const { getByText } = render(<Header />);
    const homeButton = getByText("Home");
    const calculatorButton = getByText("Calculator");
    const watchlistButton = getByText("Watchlist");

    fireEvent.click(homeButton);
    expect(useRouter().push).toHaveBeenCalledWith("/");

    fireEvent.click(calculatorButton);
    expect(useRouter().push).toHaveBeenCalledWith("/calculator");

    fireEvent.click(watchlistButton);
    expect(useRouter().push).toHaveBeenCalledWith("/watchlist");
  });
});
