import Accident from "../../assets/accident.svg";
import { VStack } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Quiz = () => {
  return (
    <VStack margin={"0 auto"} alignItems={"center"} justifyContent={"center"} w={400} paddingTop={40}>
      <img src={Accident} />
      <Link to={`/quiz/1`} style={{ width: "100%" }}>
        <Button isTrue={sessionStorage.getItem("end") !== "true"}>문제풀기</Button>
      </Link>
    </VStack>
  );
};

const Button = styled.button<{ isTrue: boolean }>`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.LightNavy};
  font-size: 24px;
  font-weight: 600;
  margin-top: 30px;
  color: #edf2f7;
  cursor: ${({ isTrue }) => !isTrue && "not-allowed"};
`;
