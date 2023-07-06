import styled from "styled-components";
import Accident from "../../assets/accident2.svg";
import { VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const QuizComplete = () => {
  return (
    <VStack margin={"0 auto"} alignItems={"center"} justifyContent={"center"} w={400} paddingTop={40}>
      <img src={Accident} />
      <Text>문제 풀이를 완료하였습니다.</Text>
      <SubText>다음 문제까지 60분 남았습니다.</SubText>
      <Link to="/" onClick={() => sessionStorage.setItem("end", "true")}>
        <Button>홈으로</Button>
      </Link>
    </VStack>
  );
};

export default QuizComplete;

const Button = styled.button`
  position: relative;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.LightBlue};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 8px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const SubText = styled.div`
  color: var(--point-color, #fe4956);
  font-size: 16px;
  font-weight: 600;
`;
