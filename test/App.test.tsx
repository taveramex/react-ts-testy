import { describe, expect,test } from "vitest"
import { screen, render } from "@testing-library/react"
import App from "../src/App";

describe("App", ()=>{
    test("data-testid field", ()=>{
        render(<App />);
        const dataTest = screen.getByTestId("testingTest");
        expect(dataTest.innerHTML).toContain('giberish');
    });
    test('match whole component Snapshot',()=>{
        const {container} = render(<App />);
        expect(container.innerHTML).toMatchSnapshot();
    });
    test('match dataTestid Snapshot',()=>{
        render(<App />);
        expect(screen.getByTestId("testingTest")).toMatchSnapshot();
    });
});