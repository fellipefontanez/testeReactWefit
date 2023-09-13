import { styled } from "styled-components";

const StyledSubtotal = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .title {
    color: #999;
    font-size: 12px;
    font-weight: 700;
    @media screen and (min-width: 960px) {
      display: none;
    }
  }
  & .price {
    color: #2f2e41;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default StyledSubtotal;
