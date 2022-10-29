import styled from "styled-components";

export const CloseCartContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 30px;
  width: 30px;
  display: block;
  cursor: pointer;
  span {
    height: 25px;
    width: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.title};
    position: absolute;
    left: 13px;
    top: 3px;
    transform: rotate(45deg);
    &:first-child {
      transform: rotate(-45deg);
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;
