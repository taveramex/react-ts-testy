import { describe, test, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ShopChop from '../../src/components/ShopChop';

const mockItemCounter = vi.fn((props: unknown) => (<div data-testid="ItemCounter" />));

vi.mock('../../src/shopping-cart/ItemCounter', (props: unknown) => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("ShopChop", () => {
    afterEach(()=>{
        vi.clearAllMocks();
    });
    test("should Match screenshot", () => {
        const { container } = render(<ShopChop />);
        expect(container).toMatchSnapshot();
    });
    test("should render the correct number of ItemCounter components", () => {
        render(<ShopChop />);
        const items = screen.getAllByTestId("ItemCounter");
        expect(items.length).toBe(6);
    });
    test("shoud render itemCounter with correct props", ()=>{
        render(<ShopChop />);

        expect(mockItemCounter).toHaveBeenCalledTimes(6);
        expect(mockItemCounter).toHaveBeenCalledWith(
            {productName:'Gato Gordo generico', quantity:1,}
        );

    });
});