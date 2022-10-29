import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  margin-bottom: 20px;
  & svg {
    display: none;
  }
  &:hover svg {
    display: block;
  }
`;

export const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
  padding: 6px 9px 5px 10px;
  margin-right: 10px;
`;

export const ItemNameAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 130px; */
  color: ${({ theme }) => theme.color.cartGray};
  font-size: 14px;
  & span {
    color: ${({ theme }) => theme.color.cartPrice};
    font-weight: bold;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-width: 130px;
  }
`;

export const Quantity = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.color.title};
`;
