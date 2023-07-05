import Accident from "../../assets/accident.svg";
import { VStack } from "@chakra-ui/react";
import styled from "styled-components";

export const Quiz = () => {
  return (
    <VStack margin={"0 auto"} alignItems={"center"} justifyContent={"center"} w={400} paddingTop={40}>
      <img src={Accident} />
      <Button>문제풀기</Button>
    </VStack>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  border: 0.2px solid #000;
  box-shadow: 3px 10px 10px -5px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.LightNavy};
  font-size: 24px;
  font-weight: 600;
  margin-top: 30px;
  color: #edf2f7;
`;
