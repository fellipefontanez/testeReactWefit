import { styled } from "styled-components";

const Colunas = styled.header`
  display: none;
  grid-template-columns: calc(279px + 138px) 171px 73px;
  color: #999;
  font-size: 14px;
  font-weight: 700;
  @media screen and (min-width: 960px) {
    display: grid;
  }
`;

export default Colunas;
