import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Converter from "./Converter";
//TODO: add more test to the component
describe("Converter", () => {
  it("Should render the Converter component correctly", async () => {
    const { getByPlaceholderText } = render(<Converter />);

    expect(getByPlaceholderText("Amount")).not.toBeNull();
  });
});
