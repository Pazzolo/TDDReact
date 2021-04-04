import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color and text", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns Midnight Blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();

  // check the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox is checked & button should be disabled then enables in second click", () => {
  render(<App />);

  //click checkbox
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  fireEvent.click(checkbox);
  //check that checkbox is checked
  expect(checkbox).toBeChecked();
  //check that button is disabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeDisabled();

  //click and check is button is enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button has correct color when disabling and checking box", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  //disable button -> button color gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  //enable button ->button color MediumVioletRed
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  //click button
  fireEvent.click(colorButton);
  // disable button -> color Gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  //enable button  -> color Blue
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Work for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Work for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Work for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightVioletRed")).toBe(
      "Midnight Violet Red"
    );
  });
});
