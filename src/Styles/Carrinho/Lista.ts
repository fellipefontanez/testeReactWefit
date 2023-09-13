import { styled } from "styled-components";

const StyledLista = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  max-height: calc(100% - 116px);
  overflow-y: auto;
  @media screen and (max-width: 960px) {
    flex: 1 0 0;
  }
  @media screen and (min-width: 960px) {
    gap: 52px;
    min-height: min-content;
  }
`;

export default StyledLista;

export const ItemLista = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 82px;
  gap: 16px;
  @media screen and (min-width: 960px) {
    gap: 52px;
  }
  & img {
    width: 64px;
    object-fit: cover;
  }
  & .info {
    flex-direction: column;
    display: flex;
    gap: 16px;
    width: 100%;
    color: #2f2e41;
    font-size: 14px;
    font-weight: 700;
    align-items: center;
    @media screen and (min-width: 960px) {
      flex-direction: row;
      gap: 52px;
    }
    & .row {
      display: flex;
      gap: 16px;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      @media screen and (min-width: 960px) {
        justify-content: flex-start;
        width: 253px;
        gap: 52px;
        align-items: center;
      }
      & .coreInformation {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        @media screen and (min-width: 960px) {
          flex-direction: column;
          gap: 8px;
          align-items: start;
          width: fit-content;
        }
      }
      & button {
        margin-top: 3px;
        appearance: none;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        & img {
          width: 16px;
          height: 18px;
        }
        @media screen and (min-width: 960px) {
          justify-content: flex-start;
          position: absolute;
          right: -500px;
        }
      }
    }
  }
`;
