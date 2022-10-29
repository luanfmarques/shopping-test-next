import styled from "styled-components";

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  padding: 10px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  box-shadow: 4px 5px 9px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  img {
    filter: brightness(0.5);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const BadgeContainer = styled.div`
  position: relative;
  & span {
    height: 20px;
    width: 20px;
    background: red;
    color: white;
    position: absolute;
    bottom: 12px;
    left: -6px;
    border-radius: 50%;
  }
`;
