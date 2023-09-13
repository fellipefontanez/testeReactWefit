import { styled } from "styled-components";

const StyledBotao = styled.button<{
  $active?: boolean;
  $height?: number;
  $width?: number;
}>`
  appearance: none;
  cursor: pointer;
  outline: none;
  border: none;
  width: ${(props) => (props.$width ? props.$width + "px" : "100%")};
  display: flex;
  padding: 10px 11px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 16px;
  border-radius: 4px;
  background: ${(props) => (props.$active ? "#039B00" : "#009EDD")};
  color: #fff !important;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  height: ${(props) => (props.$height ? props.$height + "px" : "auto")};
  & div {
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: #fff !important;
    & span {
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      color: #fff !important;
    }
  }
`;

export default StyledBotao;
