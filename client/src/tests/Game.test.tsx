import { Game } from "@/components";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Game Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/game"]}>
        <Game />
      </MemoryRouter>
    );
  });
  test("text Game should be render", () => {
    expect(screen.getByText(/game/i)).toBeInTheDocument();
  });
  test("Card element should be present", async () => {
    await waitFor(() => {
      expect(screen.getByRole("cards")).toBeInTheDocument();
    });
  });
});

// `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`))
// expect el div de memory board q tenga al menos un hijo
