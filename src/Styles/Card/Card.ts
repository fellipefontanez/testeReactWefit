import { styled } from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  max-width: 343px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  padding: 10px 11px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  height: 305px;
  @media screen and (min-width: 960px) {
    max-width: 298px;
  }
  & .capaFilme {
    height: 188px;
    width: 147px;
  }
  & .informacoesFilme {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    & h5 {
      margin: 0;
      padding: 0;
      color: #333;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      height: 18px;
    }
    & span {
      color: #2f2e41;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
    }
  }
`;

export default StyledCard;
