import { styled } from "styled-components";

const StyledInputQuantidade = styled.div`
  display: flex;
  width: 117px;
  justify-content: center;
  align-items: center;
  gap: 11px;
  & img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  & input {
    display: flex;
    height: 26px;
    padding: 0 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 59px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background: #fff;
    outline: none;
    color: #2f2e41;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default StyledInputQuantidade;
