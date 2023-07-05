import styled from "styled-components";
import { Progress, HStack } from "@chakra-ui/react";
import NextIcon from "../../assets/nextIcon.svg";

export const ChoiceQuiz = () => {
  return (
    <>
      <Container>
        <HStack w={600} justifyContent="space-between" marginBottom={"10px"}>
          <ProgressText>2문제 완료</ProgressText>
          <ProgressText>3문제 남음</ProgressText>
        </HStack>
        <Progress hasStripe size="lg" colorScheme="green" value={20} width={600} margin={"0 auto"} />
        <Question>
          <QuizNumber>Q2.</QuizNumber>
          어린이와 접촉사고가 났을 때 운전자의 행동으로 옳은 것은?
        </Question>
        <Buttons>
          <Button>
            <AlphaBet>A</AlphaBet>
            <AnswerText>사고가 발생한 사실을 인정하고, 즉시 차를 세운다.</AnswerText>
          </Button>
          <Button>
            <AlphaBet>B</AlphaBet>
            <AnswerText>사고로 인한 부상자가 있는지 확인한다.</AnswerText>
          </Button>
          <Button>
            <AlphaBet>C</AlphaBet>
            <AnswerText>119에 신고한다.</AnswerText>
          </Button>
          <Button>
            <AlphaBet>D</AlphaBet>
            <AnswerText>사고 차량의 위치를 확보한다.</AnswerText>
          </Button>
        </Buttons>
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
  padding: 100px;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 8px;
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

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #d93d3d;
  margin: 20px 0;
  text-align: center;
`;

const Buttons = styled.div`
  display: grid;
  width: 600px;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 290px;
  height: 70px;
  border-radius: 8px;
  background: #fc8181;
  color: ${(props) => props.theme.Navy};
  cursor: pointer;
  padding: 0 20px;
`;

const AlphaBet = styled.div`
  text-align: center;
  font-size: 32px;
  color: ${(props) => props.theme.Navy};
  font-weight: 600;
  margin-right: 16px;
`;

const AnswerText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-wrap;
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
