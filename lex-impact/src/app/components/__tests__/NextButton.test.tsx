import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavbarButton from "../NavbarButton";
import { AiOutlineUser } from "react-icons/ai";
import { vi } from "vitest";

describe("NavbarButton", () => {
  it("renders children text correctly", () => {
    render(<NavbarButton>Click Me</NavbarButton>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<NavbarButton onClick={handleClick}>Click Me</NavbarButton>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with custom background and text color", () => {
    render(
      <NavbarButton bgColor="bg-red-500" textColor="text-white">
        Styled Button
      </NavbarButton>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-red-500");
    expect(button).toHaveClass("text-white");
  });

  it("renders icon if provided", () => {
    render(
      <NavbarButton icon={<AiOutlineUser data-testid="user-icon" />}>
        With Icon
      </NavbarButton>
    );

    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

  it("does not render icon container if no icon is passed", () => {
    render(<NavbarButton>No Icon</NavbarButton>);
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).not.toBeInTheDocument();
  });
});
