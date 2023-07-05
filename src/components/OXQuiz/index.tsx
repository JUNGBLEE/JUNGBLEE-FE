import styled from "styled-components";
import { HStack, Progress } from "@chakra-ui/react";
import CorrectIcon from "../../assets/Correct.svg";
import WrongIcon from "../../assets/Wrong.svg";
import NextIcon from "../../assets/nextIcon.svg";

export const OXQuiz = () => {
  return (
    <>
      <Container>
        <HStack w={600} justifyContent="space-between" marginBottom={"10px"}>
          <ProgressText>2문제 완료</ProgressText>
          <ProgressText>3문제 남음</ProgressText>
        </HStack>
        <Progress hasStripe size="lg" colorScheme="green" value={20} width={600} margin={"0 auto"} />
        <Question>
          <QuizNumber>Q1.</QuizNumber>
          교통사고 원인 1위는 신호위반이다.
        </Question>
        <HStack gap={"40px"} marginTop={10}>
          <CorrectButton>
            <img src={CorrectIcon} />
          </CorrectButton>
          <WrongButton>
            <img src={WrongIcon} />
          </WrongButton>
        </HStack>
        <NextButton>
          다음 문제 <NextImg src={NextIcon} />
        </NextButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizNumber = styled.div`
  position: absolute;
  top: 27px;
  left: 27px;
  color: ${(props) => props.theme.LightSkyBlue};
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

const Question = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 8px;
  padding: 100px;
  margin-top: 30px;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.LightBlue};
  text-align: center;
  white-space: pre-wrap;
`;

const CorrectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 100px;
  background-color: #73b0ef;
  border-radius: 10px;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const WrongButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 100px;
  background-color: #f26d7b;
  border-radius: 10px;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ProgressText = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;

const NextButton = styled.div`
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

const NextImg = styled.img`
  position: absolute;
  right: 26px;
`;
