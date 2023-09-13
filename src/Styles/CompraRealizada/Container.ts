import { styled } from "styled-components";

const CompraContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  border-radius: 4px;
  background: #fff;
  padding: 64px;
  & .title {
    color: #2f2e41;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
`;

export default CompraContainer;
