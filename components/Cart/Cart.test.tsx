import { render } from "helpers/test-utils";
import Cart from ".";
import data from "public/products.json";

describe("Cart tests", () => {
  it("Must render Cart", () => {
    const dataStringfied = JSON.stringify(data);
    const parsedData = JSON.parse(dataStringfied);

    const { container } = render(<Cart data={parsedData} />);

    expect(container).toBeInTheDocument;
  });
});
