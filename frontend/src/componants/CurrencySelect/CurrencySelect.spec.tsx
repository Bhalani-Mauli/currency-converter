import { describe, it, expect, vitest } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CurrencySelect from "./CurrencySelect";

describe("CurrencySelect", async () => {
  it("Should render the CurrencySelect correctly", async () => {
    const mockChangeHandler = vitest.fn();
    const { getByLabelText } = render(
      <CurrencySelect
        label="From"
        value="INR"
        onChange={mockChangeHandler}
        currencies={["INR", "EUR", "USD"]}
        testId="test-select"
      ></CurrencySelect>
    );

    const label = screen.getByText("From");
    expect(label).not.toBeNull();

    const selectElement = screen.findAllByTestId("test-select");
    expect(selectElement).not.toBeNull();
  });
});
