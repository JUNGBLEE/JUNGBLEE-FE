import { OXQuiz } from "../../components/OXQuiz";
import { useSingleQuiz } from "../../apis/quiz";
import { useParams } from "react-router-dom";
import { ChoiceQuiz } from "../../components/choiceQuiz";
import QuizComplete from "../../components/quizComplete";
import { Progress, HStack } from "@chakra-ui/react";
import styled from "styled-components";

const QuizDetailPage = () => {
  const { id } = useParams();
  const { data } = useSingleQuiz(id ?? "");

  if (id === "6") {
    return <QuizComplete />;
  }

  return (
    <>
      <HStack w={600} justifyContent="space-between" marginBottom={"10px"} paddingTop={100} margin={"0 auto"}>
        <ProgressText>{Number(id) - 1}문제 완료</ProgressText>
        <ProgressText>{5 - Number(id) + 1}문제 남음</ProgressText>
      </HStack>
      <Progress
        hasStripe
        size="lg"
        colorScheme="green"
        value={((Number(id) - 1) / 5) * 100}
        width={600}
        margin={"0 auto"}
      />
      {data?.data.multipleChose ? (
        <ChoiceQuiz
          content={data?.data.content}
          answer={data.data.answer}
          optionA={data.data.optionA}
          optionB={data.data.optionB}
          optionC={data.data.optionC}
          optionD={data.data.optionD}
          commentary={data.data.commentary}
        />
      ) : (
        <OXQuiz content={data?.data.content} answer={data?.data.answer} commentary={data?.data.commentary} />
      )}
    </>
  );
};

export default QuizDetailPage;

const ProgressText = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;
