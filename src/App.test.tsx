import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

import { server } from "./mock/node";

describe("App Component", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    cleanup();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should render correctly", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
