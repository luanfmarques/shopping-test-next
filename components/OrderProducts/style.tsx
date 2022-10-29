import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 170px;
  position: relative;
  font-size: 14px;
  color: ${({ theme }) => theme.color.cartPrice};
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 262px;
  }
`;

type DropDownHeaderType = {
  isOpen: boolean;
};

export const DropDownHeader = styled("div")<DropDownHeaderType>`
  padding: 10px 14px 10px 18px;
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 4px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg {
    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
  }
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  bottom: -122px;
  width: 100%;
  cursor: pointer;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.borderColor};
`;

export const ListItem = styled("li")`
  list-style: none;
  padding: 10px 14px;
  &:hover {
    background-color: ${({ theme }) => theme.color.borderColor};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
