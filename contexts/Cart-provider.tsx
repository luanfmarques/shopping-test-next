import { useLocalStorage } from "hooks/useLocalStorage";
import React, { createContext, ReactNode, useContext, useState } from "react";

type CartContextProviderProps = {
  children?: ReactNode;
};

type CartContextType = {
  getItemQuantity: (id: number) => number;
  setItemToCart: (id: number) => void;
  removeFromCart: (position: number) => void;
  cartProducts: Product[];
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

type Product = {
  id: number;
  quantity: number;
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useLocalStorage<Product[]>(
    "cart",
    []
  );

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartProducts?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartProducts?.find((item) => item.id === id)?.quantity || 0;
  }

  function setItemToCart(id: number) {
    setCartProducts((currItems) => {
      if (currItems && currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems?.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(position: number) {
    setCartProducts((currItems) => {
      return currItems?.filter((i, index) => index !== position);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        setItemToCart,
        removeFromCart,
        cartProducts,
        cartQuantity,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
