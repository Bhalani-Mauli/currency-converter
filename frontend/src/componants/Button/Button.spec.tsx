import { describe, it, expect, vitest } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", async () => {
  it("Should render the button correctly", async () => {
    const mockClickHandler = vitest.fn();
    const { getByText } = render(
      <Button onClick={mockClickHandler}>Hello World</Button>
    );
    const button = getByText("Hello World");

    expect(button).not.toBeNull();

    fireEvent.click(button);
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
