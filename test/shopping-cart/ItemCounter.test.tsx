import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import App from "../../src/App"

describe("ItemCounter", () => {
    test("renders correctly", () => {
        render(<App />)
        screen.debug();
    });
    test("Verify Title", () => {
        const { container } = render(<App />);
        const title = container.querySelector("h1");
        if (title) {
            expect(title.innerHTML).toContain("Test App");
        }
    })
}); 
