import styled from "styled-components";
import { Button } from "@chakra-ui/react";

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
  margin-right: 100px;
`;

export const SignUpButton = styled(Button)`
  color: ${(props) => props.theme.PointColor};
  &:hover {
    color: ${(props) => props.theme.DeepNavy};
  }
`;

export const Text = styled.div`
  color: #edf2f7;
  font-size: 22px;
  font-weight: 600;
`;
