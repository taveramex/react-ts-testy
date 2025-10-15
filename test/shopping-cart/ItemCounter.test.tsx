import { describe, test, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { ItemCounter } from "../../src/shopping-cart/ItemCounter"
import App from "../../src/App";

describe("ItemCounter", () => {
    test("render itemName", () => {
        const testName = "test";
        render(<ItemCounter productName={testName}/>);

        expect(screen.getByText(testName)).toBeDefined();
    });
    test('check default value of 1',()=>{
        render(<ItemCounter productName="test"/>);
        expect(screen.getByTestId('data-qty').innerHTML).toBe("1");
    });
    test('check assignes quantity of 20',()=>{
        render(<ItemCounter productName="test" quantity={20}/>);
        expect(screen.getByTestId('data-qty').innerHTML).toBe("20");
    });
    test("Should decrese when -1 is clicked",()=>{
        const testQty = 3;
        render(<ItemCounter productName="testing count" quantity={testQty}/>);
        const minusBtn = screen.getByText("-1");
        fireEvent.click(minusBtn);
        expect(screen.getByTestId('data-qty').innerHTML).toBe( ""+(testQty-1));
    });
    test("Should increae when 1 is clicked",()=>{
        const testQty = 3;
        render(<ItemCounter productName="testing count" quantity={testQty}/>);
        const [sumBtn,] = screen.getAllByRole('button');
        fireEvent.click(sumBtn);
        expect(screen.getByTestId('data-qty').innerHTML).toBe( ""+(testQty+1));
    });
    test("Should NOT decrese when -1 is clicked and its 0 qty",()=>{
        const testQty = 0;
        render(<ItemCounter productName="testing count" quantity={testQty}/>);
        const minusBtn = screen.getByText("-1");
        fireEvent.click(minusBtn);
        expect(screen.getByTestId('data-qty').innerHTML).toBe( ""+(testQty));
    });
    test("should change color when quantity is 0", () => {
        const testQty = 1;
        const productName='test tinga';
        render(<ItemCounter productName={productName} quantity={testQty}/>);
        const textBlack = screen.getByTestId('data-txt');
        expect(textBlack.style.color).toBe("black");
        const [,minusBtn] = screen.getAllByRole('button');
        fireEvent.click(minusBtn);
        expect(textBlack.style.color).toBe("red");
    });
    
}); 
