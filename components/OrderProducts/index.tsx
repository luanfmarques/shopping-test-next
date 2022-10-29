import React, { Dispatch, SetStateAction, useState } from "react";
import { ArrowIcon } from "./ArrowIcon/ArrowIcon";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./style";

const options = ["Mais populares", "Menor preço", "Ordem alfabética"];

type OrderProductsProps = {
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
};

export const OrderProducts = ({ order, setOrder }: OrderProductsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setOrder(value);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} isOpen={isOpen}>
          {order}
          <ArrowIcon />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
};
