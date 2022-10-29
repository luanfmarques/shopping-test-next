import styled from "styled-components";

export const ImageContainer = styled.div`
  border-radius: 3px;
  background: ${({ theme }) => theme.color.backgroundGray};
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 230px;
  }
`;

export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & span {
    color: ${({ theme }) => theme.color.itemAdd};
    font-weight: bold;
  }
`;

export const AddToCart = styled.span`
  display: none;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.itemAdd};
`;

export const ProductItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 11px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.itemsTitle};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(50% - 15px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xlg}px) {
    width: 262px;
  }
  &:hover {
    ${NameAndPrice} {
      display: none;
    }
    ${AddToCart} {
      display: block;
    }
  }
`;
