import { styled } from "styled-components";

const FinalizarCompraContainer = styled.div`
  height: 77px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 960px) {
    flex-direction: row-reverse;
    height: 40px;
  }
  & .buttonHolder {
    width: 100%;
    @media screen and (min-width: 960px) {
      width: 235px;
    }
  }
  & .totalCompra {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: relative;
    padding-right: 0.7rem;
    @media screen and (min-width: 960px) {
      justify-content: flex-end;
      gap: 1rem;
    }
    & .titulo {
      color: #999;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }
    & .valor {
      color: #2f2e41;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      position: absolute;
      right: 10px;
      @media screen and (min-width: 960px) {
        position: static;
      }
    }
  }
`;

export default FinalizarCompraContainer;
