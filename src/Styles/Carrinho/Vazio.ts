import { styled } from "styled-components";

const StyledCarrinhoVazio = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  display: flex;
  padding: 64px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  overflow: hidden;
  & .title {
    color: #2f2e41;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    & br {
      @media screen and (min-width: 960px) {
        display: none;
      }
    }
  }
  & img {
    width: 179px;
    height: 264px;
  }
  & hr {
    position: absolute;
    border: none;
    border: solid 1px #3f3d56;
    width: 100%;
    bottom: 125.5px;
    max-width: 447px;
  }
`;

export default StyledCarrinhoVazio;
