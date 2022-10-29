import { render } from "helpers/test-utils";
import { ProductItem } from ".";

describe("ProductItem tests", () => {
  it("must render ProductItem", () => {
    const { container } = render(
      <ProductItem image="" name="produto" onClick={jest.fn} price={100} />
    );

    expect(container).toBeInTheDocument;
  });
});
