import { useCartContext } from "contexts/Cart-provider";
import { formatNumberToBRL } from "helpers/helpers";
import { IProduct } from "interfaces/IProduct";
import Image from "next/image";
import React from "react";
import { RemoveCartIcon } from "./RemoveCartIcon/RemoveCartIcon";
import {
  CartItemContainer,
  ImageHolder,
  ItemNameAndPriceContainer,
  Quantity,
} from "./style";

type CartItemProps = {
  id: number;
  position: number;
  listProducts: IProduct[];
};

export const CartItem = ({ id, position, listProducts }: CartItemProps) => {
  const { getItemQuantity, removeFromCart } = useCartContext();
  const item = listProducts.find((i) => i.id === id);

  if (item === null) return null;

  const showItemQuantity = () => {
    if (item?.id && getItemQuantity(item?.id) > 1) {
      return `x${getItemQuantity(item?.id)} unidades`;
    }
    return "";
  };

  return (
    <CartItemContainer
      onClick={() => removeFromCart(position)}
      data-testid={`${item?.name} cart item`}
    >
      <ImageHolder>
        <Image
          src={`/${item?.image}`}
          alt={`${item?.name} image`}
          width={41}
          height={41}
        />
      </ImageHolder>
      <ItemNameAndPriceContainer>
        {`${item?.name}`}
        <Quantity>{showItemQuantity()}</Quantity>
        <span>{formatNumberToBRL(item?.price)}</span>
      </ItemNameAndPriceContainer>
      <RemoveCartIcon />
    </CartItemContainer>
  );
};
