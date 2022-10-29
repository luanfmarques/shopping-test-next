import styled from "styled-components";

type CartContainerType = {
  isOpen: boolean;
};

export const CartContainer = styled.div<CartContainerType>`
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 4px;
  min-width: 262px;
  height: fit-content;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  margin-top: 0;
  background: white;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 1;
  display: flex;
  flex-direction: column;
  header {
    margin: 20px 25px 22px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.color.title};
    span {
      color: ${({ theme }) => theme.color.cartGray};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    position: static;
    margin-top: 12px;
    height: fit-content;
    max-width: 262px;
    visibility: visible !important;
  }
`;

export const CartValues = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 22px;
  gap: 20px;
  margin-top: auto;
  p {
    color: ${({ theme }) => theme.color.cartGray};
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      font-size: 16px;
      color: ${({ theme }) => theme.color.cartPrice};
      font-weight: bold;
    }
  }
  p:last-child span {
    font-size: 20px;
    color: ${({ theme }) => theme.color.cartPrice};
    font-weight: bold;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-top: 0;
  }
`;

export const CheckoutButton = styled.button`
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  margin: 0 auto 20px;
  background: ${({ theme }) => theme.color.removeCart};
  height: 50px;
  width: 94%;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 238px;
    margin: 0 12px 13px 12px;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 33px 0 98px;
  img {
    margin-bottom: 18px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.color.itemsTitle};
  }
`;
