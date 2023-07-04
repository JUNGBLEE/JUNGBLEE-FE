import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 60px;
  background-color: ${(props) => props.theme.DeepNavy};
`;

export const Name = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;
