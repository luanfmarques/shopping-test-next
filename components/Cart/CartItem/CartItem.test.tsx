import { fireEvent, render } from "helpers/test-utils";
import { CartItem } from ".";
import data from "public/products.json";

describe("CartItem tests", () => {
  it("Must render CartItem and click in a item", () => {
    const dataStringfied = JSON.stringify(data);
    const parsedData = JSON.parse(dataStringfied);

    const { container, getByTestId } = render(
      <CartItem listProducts={parsedData} id={420} position={0} />
    );

    expect(container).toBeInTheDocument;
    expect(getByTestId("FIFA 18 cart item")).toBeInTheDocument;
    fireEvent.click(getByTestId("FIFA 18 cart item"));
    expect(getByTestId("FIFA 18 cart item")).not.toBeInTheDocument;
  });

  it("Must render CartItem with a id that doesn't exist in the listOfProducts", () => {
    const dataStringfied = JSON.stringify(data);
    const parsedData = JSON.parse(dataStringfied);

    const { container } = render(
      <CartItem listProducts={parsedData} id={999} position={0} />
    );

    expect(container).toBeInTheDocument;
  });
});
