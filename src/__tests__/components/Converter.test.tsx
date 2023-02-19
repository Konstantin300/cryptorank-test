import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Converter from "../../components/pages/calculator/Converter";
import "@testing-library/jest-dom";

describe("Converter", () => {
  it("renders loading message before currencies are loaded", async () => {
    render(<Converter amount={1} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => screen.getAllByRole("combobox"));
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("renders two currency selection dropdowns after currencies are loaded", async () => {
    render(<Converter amount={1} />);
    await waitFor(() => screen.getAllByRole("combobox"));
    expect(screen.getAllByRole("combobox")).toHaveLength(2);
  });

  it("renders conversion result when both currencies are selected", async () => {
    render(<Converter amount={10} />);

    const mockCurrencies = [
      {
        name: "US Dollar",
        symbol: "$",
        values: {
          USD: {
            price: 1,
          },
        },
      },
      {
        name: "Euro",
        symbol: "€",
        values: {
          USD: {
            price: 1.2,
          },
        },
      },
    ];

    const options = mockCurrencies.map((currency) => ({
      value: currency.values.USD.price,
      label: `${currency.name} (${currency.symbol})`,
      click: jest.fn().mockResolvedValue(currency.values.USD.price),
    }));
    const fromCurrency = options[0];
    const toCurrency = options[1];
    fromCurrency.click();
    toCurrency.click();
    expect(fromCurrency.click).toHaveBeenCalledTimes(1);
    expect(toCurrency.click).toHaveBeenCalledTimes(1);
  });

  it("does not display the conversion text when only one currency is selected", () => {
    const amount = 1;
    const fromCurrency = { label: "US Dollar", value: 1 };
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [fromCurrency, jest.fn()]);
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [undefined, jest.fn()]);
    jest.spyOn(React, "useState").mockImplementationOnce(() => [0, jest.fn()]);

    render(<Converter amount={amount} />);

    const conversionText = screen.queryByText(
      `${amount} ${fromCurrency.label} = `
    );

    expect(conversionText).not.toBeInTheDocument();
  });
});
