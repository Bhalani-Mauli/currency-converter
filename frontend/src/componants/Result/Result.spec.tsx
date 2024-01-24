import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Result from "./Result";

describe("Result", async () => {
  it("Should render the Result correctly", async () => {
    render(
      <Result
        amount={12}
        fromCurrency="RRR"
        toCurrency="INR"
        convertedValue={1233}
      ></Result>
    );

    const result = screen.getByText("1233");
    expect(result).not.toBeNull();
  });
});
