import { useCartContext } from "contexts/Cart-provider";
import React from "react";
import { CloseCartContainer } from "./styled";

export const CloseCart = () => {
  const { closeCart } = useCartContext();
  return (
    <CloseCartContainer onClick={closeCart}>
      <span />
      <span />
    </CloseCartContainer>
  );
};
