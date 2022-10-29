import React from "react";
import {
  AddToCart,
  ImageContainer,
  NameAndPrice,
  ProductItemContainer,
} from "./style";
import Image from "next/image";
import { formatNumberToBRL } from "helpers/helpers";

type ProductItemType = {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
};

export const ProductItem = ({
  image,
  name,
  price,
  onClick,
}: ProductItemType) => {
  return (
    <ProductItemContainer onClick={onClick}>
      <ImageContainer>
        <Image
          src={`/${image}`}
          alt={`${name} image`}
          width={180}
          height={180}
        />
      </ImageContainer>
      <NameAndPrice>
        {name}
        <span>{formatNumberToBRL(price)}</span>
      </NameAndPrice>
      <AddToCart>adicionar ao carrinho</AddToCart>
    </ProductItemContainer>
  );
};
