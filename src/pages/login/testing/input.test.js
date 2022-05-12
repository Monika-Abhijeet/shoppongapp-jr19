import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./input";
import { act } from "react-dom/test-utils";

describe("Input component", () => {
  it("rendered input", () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId("searchbar");
    expect(input).toBeTruthy();
  });
  it("render sensitive data", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId("sensitiveData");
    expect(div).toBeTruthy();
  });
  it("render sensitive data", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId("sensitiveData");
    expect(div).toBeFalsy();
  });
  it("rendered input", async () => {
    await act(() => {
      render(<Input />);
    });
  });
});
