import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "/src/App";

// describe('something truthy and falsey', () => {
//   it('true to be tru', () => {
//     expect(true).toBe(true);
//   });
//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

describe("App component", () => {
  it("renders maginificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });
    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
