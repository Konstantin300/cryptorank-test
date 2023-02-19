import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../../components/pages/watchlist/Table";

const mockSelectedCurrency = {
  value: 1,
  label: "US Dollar ($)",
};

jest.mock("../../hooks/useCurrencies", () => ({
  useCurrencies: jest.fn().mockReturnValue([
    {
      name: "Bitcoin",
      symbol: "BTC",
      values: { USD: { price: 50000 } },
      circulatingSupply: 18739025,
      category: "Currency",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      values: { USD: { price: 2000 } },
      circulatingSupply: 115525846,
      category: "Blockchain infrastructure",
    },
  ]),
}));

describe("Table", () => {
  it("renders table header", () => {
    const { getByText } = render(
      <Table selectedCurrency={mockSelectedCurrency} />
    );
    const tableHeader = getByText("Name");
    expect(tableHeader).toBeInTheDocument();
  });

  it("renders table body", () => {
    const { getByText } = render(
      <Table selectedCurrency={mockSelectedCurrency} />
    );
    const tableBody = screen.getAllByRole("rowgroup");
    tableBody.forEach((row) => {
      expect(row).toBeInTheDocument();
    });
  });

  it("should render the table with data", () => {
    const selectedCurrency = { value: 1, label: "USD" };
    const { getByText } = render(<Table selectedCurrency={selectedCurrency} />);

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();
    expect(getByText("Circ. supply")).toBeInTheDocument();
    expect(getByText("Market cap")).toBeInTheDocument();
    expect(getByText("Category")).toBeInTheDocument();

    expect(getByText("Bitcoin (BTC)")).toBeInTheDocument();
    expect(getByText("USD 50.00K")).toBeInTheDocument();
    expect(getByText("18.74M")).toBeInTheDocument();
    expect(getByText("USD 936.95B")).toBeInTheDocument();
    expect(getByText("Currency")).toBeInTheDocument();

    expect(getByText("Ethereum (ETH)")).toBeInTheDocument();
    expect(getByText("USD 2.00K")).toBeInTheDocument();
    expect(getByText("115.53M")).toBeInTheDocument();
    expect(getByText("USD 231.05B")).toBeInTheDocument();
    expect(getByText("Blockchain infrastructure")).toBeInTheDocument();
  });
});
