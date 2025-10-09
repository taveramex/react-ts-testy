import { describe, expect,test } from "vitest"
import { screen, render } from "@testing-library/react"
import App from "../src/App";

describe("App", ()=>{
    test("data-testid field", ()=>{
        render(<App />);
        const dataTest = screen.getByTestId("testingTest");
        expect(dataTest.innerHTML).toContain('giberish');
    });
});