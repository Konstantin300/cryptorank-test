import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../../pages/calculator/Calculator";
import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "",
    };
  },
}));

describe("Calculator", () => {
  it("renders input element", () => {
    const { getByPlaceholderText } = render(<Calculator />);
    const inputElement = getByPlaceholderText("Enter amount");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders amount text", () => {
    const { getByText } = render(<Calculator />);
    const amountText = getByText("Amount");
    expect(amountText).toBeInTheDocument();
  });
});
