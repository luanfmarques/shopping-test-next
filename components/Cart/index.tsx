import { useCartContext } from "contexts/Cart-provider";
import { formatNumberToBRL } from "helpers/helpers";
import { IProduct } from "interfaces/IProduct";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CartButton } from "./CartButton";
import { CartItem } from "./CartItem";
import { CloseCart } from "./CloseCart";
import {
  CartContainer,
  CartValues,
  CheckoutButton,
  EmptyCartContainer,
} from "./style";

export type CartProps = {
  data: IProduct[];
};

export default function Cart({ data }: CartProps) {
  const { cartQuantity, cartProducts, isOpen } = useCartContext();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const subtotalValue = () => {
    const value = cartProducts.reduce((total, cartItem) => {
      const item: IProduct | undefined = data.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return value;
  };

  const shipping = () => {
    const value = cartQuantity * 10;
    if (subtotalValue() >= 250) {
      return 0;
    }
    return value;
  };

  const total = subtotalValue() + shipping();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen && windowSize.innerWidth < 850) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, windowSize]);

  const cartTotalQuantity = () => {
    if (cartQuantity === 0) return "";
    if (cartQuantity < 2) return `(${cartQuantity} item)`;
    if (cartQuantity >= 2) return `(${cartQuantity} itens)`;
  };

  return (
    <>
      <CartContainer isOpen={isOpen}>
        <header>
          <h3>Carrinho</h3>
          <span>{cartTotalQuantity()}</span>
          <CloseCart />
        </header>
        {cartProducts?.map((item, position) => (
          <CartItem
            listProducts={data}
            key={item.id}
            id={item.id}
            position={position}
          />
        ))}
        {cartQuantity > 0 ? (
          <>
            <CartValues>
              <p>
                subtotal<span>{formatNumberToBRL(subtotalValue())}</span>
              </p>
              <p>
                frete<span>{formatNumberToBRL(shipping())}</span>
              </p>
              <p>
                total<span>{formatNumberToBRL(total)}</span>
              </p>
            </CartValues>
            <CheckoutButton>finalizar compra</CheckoutButton>
          </>
        ) : (
          <EmptyCartContainer>
            <Image
              alt="cart icon"
              src={"/cart-icon.svg"}
              width={90}
              height={72}
            />
            <p>
              Até o momento,
              <br />o seu carrinho está vazio
            </p>
          </EmptyCartContainer>
        )}
      </CartContainer>
      <CartButton />
    </>
  );
}
