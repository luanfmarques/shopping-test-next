import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  padding: 20px 15px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xlg}px) {
    display: flex;
    padding: 42px 70px;
    justify-content: center;
  }
`;

export const HomeContentContainer = styled.div`
  max-width: 1280px;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;
  gap: 31px;
  width: 100%;
  margin: 0 auto;
`;

export const PrimaryContent = styled.div`
  width: 100%;
  max-width: 848px;
  padding-bottom: 90px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 41px;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.color.title};
      font-weight: 600;
    }
  }
  main {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-bottom: 0;
    header {
      flex-direction: row;
      gap: 0;
    }
  }
`;
