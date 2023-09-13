import { styled } from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  padding: 0 1rem 1rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 960px;
  @media screen and (min-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default StyledMain;
