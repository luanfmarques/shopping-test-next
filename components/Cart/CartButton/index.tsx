import { useCartContext } from "contexts/Cart-provider";
import Image from "next/image";
import React from "react";
import { BadgeContainer, CartButtonContainer } from "./style";

export const CartButton = () => {
  const { cartQuantity, openCart } = useCartContext();
  return (
    <CartButtonContainer onClick={openCart}>
      <Image alt="cart icon" src="/cart-icon.svg" width={30} height={30} />
      <BadgeContainer>
        <span>{cartQuantity}</span>
      </BadgeContainer>
    </CartButtonContainer>
  );
};
