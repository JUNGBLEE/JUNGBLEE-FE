import { Progress, HStack } from "@chakra-ui/react";
import NextIcon from "../../assets/nextIcon.svg";
import * as _ from "./style";

export const ChoiceQuiz = () => {
  return (
    <>
      <_.Container>
        <HStack w={600} justifyContent="space-between" marginBottom={"10px"}>
          <_.ProgressText>2문제 완료</_.ProgressText>
          <_.ProgressText>3문제 남음</_.ProgressText>
        </HStack>
        <Progress hasStripe size="lg" colorScheme="green" value={20} width={600} margin={"0 auto"} />
        <_.Question>
          <_.QuizNumber>Q2.</_.QuizNumber>
          어린이와 접촉사고가 났을 때 운전자의 행동으로 옳은 것은?
        </_.Question>
        <_.Buttons>
          <_.Button>
            <_.AlphaBet>A</_.AlphaBet>
            <_.AnswerText>사고가 발생한 사실을 인정하고, 즉시 차를 세운다.</_.AnswerText>
          </_.Button>
          <_.Button>
            <_.AlphaBet>B</_.AlphaBet>
            <_.AnswerText>사고로 인한 부상자가 있는지 확인한다.</_.AnswerText>
          </_.Button>
          <_.Button>
            <_.AlphaBet>C</_.AlphaBet>
            <_.AnswerText>119에 신고한다.</_.AnswerText>
          </_.Button>
          <_.Button>
            <_.AlphaBet>D</_.AlphaBet>
            <_.AnswerText>사고 차량의 위치를 확보한다.</_.AnswerText>
          </_.Button>
        </_.Buttons>
        <_.NextButton>
          다음 문제 <_.NextImg src={NextIcon} />
        </_.NextButton>
      </_.Container>
    </>
  );
};
