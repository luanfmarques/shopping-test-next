import axios from "axios";
import { OrderProducts } from "components/OrderProducts";
import { ProductItem } from "components/ProductItem";
import { IProduct } from "interfaces/IProduct";
import Head from "next/head";
import {
  HomeContainer,
  HomeContentContainer,
  PrimaryContent,
} from "./styles/home";

import { server } from "config";
import { useState } from "react";
import { useCartContext } from "contexts/Cart-provider";
import { CartProps } from "components/Cart";
import dynamic from "next/dynamic";

type HomeProps = {
  data: IProduct[];
};

export default function Home({ data }: HomeProps) {
  const [order, setOrder] = useState("Mais populares");
  const { setItemToCart } = useCartContext();

  const sortByFilterProducts = (item: IProduct[]) => {
    if (order === "Menor preço") return item.sort((a, b) => a.price - b.price);
    if (order === "Ordem alfabética")
      return item.sort((a, b) => a.name.localeCompare(b.name));
    return item.sort((a, b) => b.score - a.score);
  };

  const DynamicCart = dynamic<CartProps>(import("../components/Cart"), {
    ssr: false,
  });

  return (
    <HomeContainer>
      <HomeContentContainer>
        <PrimaryContent>
          <Head>
            <title>Games</title>
            <meta name="description" content="Shoppping Games" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header>
            <h1>Games</h1>
            <OrderProducts order={order} setOrder={setOrder} />
          </header>

          <main>
            {sortByFilterProducts(data).map((product) => (
              <ProductItem
                key={product.id}
                image={product.image}
                price={product.price}
                name={product.name}
                onClick={() => setItemToCart(product.id)}
              />
            ))}
          </main>
        </PrimaryContent>
        <DynamicCart data={data} />
      </HomeContentContainer>
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const res = await axios.get<IProduct[]>(`${server}/products.json`);
  const data = res.data;

  return {
    props: {
      data: data,
    },
  };
}
