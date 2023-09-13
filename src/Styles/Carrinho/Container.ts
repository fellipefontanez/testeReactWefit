import { styled } from "styled-components";

const CarrinhoContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 84px);
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  border-radius: 4px;
  background: #fff;

  & hr {
    border: none;
    border: solid 1px #999;
    width: 100%;
    margin: 0;
  }
`;

export default CarrinhoContainer;
