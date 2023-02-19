import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Calculator from "../../pages/calculator/Calculator";
import "@testing-library/jest-dom";
import React from "react";
import Watchlist from "../../pages/watchlist";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "",
    };
  },
}));

jest.mock("../../hooks/useCurrencies", () => ({
  useCurrencies: () => [
    {
      name: "Bitcoin",
      symbol: "BTC",
      circulatingSupply: 10000,
      values: {
        USD: {
          price: 50000,
        },
      },
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      circulatingSupply: 20000,
      values: {
        USD: {
          price: 2000,
        },
      },
    },
  ],
}));

describe("Watchlist", () => {
  test("renders table with data after currencies are fetched", () => {
    render(<Watchlist />);
    const selectElement = screen.getByRole("combobox");
    const bitcoinRow = screen.getByText(/Bitcoin/i);
    const ethereumRow = screen.getByText(/Ethereum/i);

    expect(selectElement).toBeInTheDocument();
    expect(bitcoinRow).toBeInTheDocument();
    expect(ethereumRow).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: "2000" } });
    expect(screen.getByText("$ 50.00K")).toBeInTheDocument();
    expect(screen.getByText("10.00K")).toBeInTheDocument();
  });
});
