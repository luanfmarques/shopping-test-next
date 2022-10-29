import { fireEvent, render } from "helpers/test-utils";
import Home from "../pages";
import data from "public/products.json";

describe("Home tests", () => {
  it("Must render Home and click in a item two times", () => {
    const dataStringfied = JSON.stringify(data);
    const parsedData = JSON.parse(dataStringfied);

    const { container, getByText } = render(<Home data={parsedData} />);

    expect(container).toBeInTheDocument;
    fireEvent.click(getByText("FIFA 18"));
    fireEvent.click(getByText("FIFA 18"));
  });

  it("Must click in select and click in 'Menor preço' to order by price", () => {
    const dataStringfied = JSON.stringify(data);
    const parsedData = JSON.parse(dataStringfied);

    const { container, getByText } = render(<Home data={parsedData} />);

    expect(container).toBeInTheDocument;
    fireEvent.click(getByText("Mais populares"));
    fireEvent.click(getByText("Menor preço"));
  });

  it("Must click in select and click in 'Ordem alfabética' to order alphabetically", () => {
    const dataStringfied = JSON.stringify(data);
    const parsedData = JSON.parse(dataStringfied);

    const { container, getByText } = render(<Home data={parsedData} />);

    expect(container).toBeInTheDocument;
    fireEvent.click(getByText("Mais populares"));
    fireEvent.click(getByText("Ordem alfabética"));
  });
});
