import styled from "styled-components";
import { HStack, Progress } from "@chakra-ui/react";
import CorrectIcon from "../../assets/Correct.svg";
import WrongIcon from "../../assets/Wrong.svg";
import NextIcon from "../../assets/nextIcon.svg";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useQuizSolve } from "../../apis/quiz";

interface Quiz {
  content?: string;
  answer?: string;
  commentary?: string;
}

export const OXQuiz = ({ content, answer, commentary }: Quiz) => {
  const { id } = useParams();
  const [click, setClick] = useState<"O" | "X" | "">("");
  const { mutate } = useQuizSolve(id || "");

  return (
    <>
      <Container>
        <Card click={!click}>
          <Question click={!click}>
            <QuizNumber>Q{id}.</QuizNumber>
            {content}
          </Question>
          <Answer click={!click}>
            {answer === click ? (
              <div style={{ color: "#73B0EF" }}>맞았습니다</div>
            ) : (
              <div style={{ color: "#F26D7B" }}>
                {answer}
                <br />
                {commentary}
              </div>
            )}
          </Answer>
        </Card>
        <HStack gap={"40px"} marginTop={10}>
          <CorrectButton
            isClick={click === "O"}
            onClick={() => {
              setClick("O");
              mutate({ answer: "O" });
            }}
          >
            <img src={CorrectIcon} />
          </CorrectButton>
          <WrongButton
            isClick={click === "X"}
            onClick={() => {
              setClick("X");
              mutate({ answer: "X" });
            }}
          >
            <img src={WrongIcon} />
          </WrongButton>
        </HStack>

        {click !== "" && (
          <Link to={`/quiz/${(Number(id) ?? 0) + 1}`}>
            <NextButton
              onClick={() => {
                setClick("");
              }}
            >
              다음 문제 <NextImg src={NextIcon} />
            </NextButton>
          </Link>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Card = styled.div<{ click: boolean }>`
  position: relative;
  width: 600px;
  height: 300px;
  transition: 0.6s;
  transform-style: preserve-3d;
  transform: rotateY(${({ click }) => (click ? 0 : 180)}deg);
`;

const Question = styled.div<{ click: boolean }>`
  position: absolute;
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
  backface-visibility: hidden;
  text-align: center;
  white-space: pre-wrap;
`;

const Answer = styled.div<{ click: boolean }>`
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
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => props.theme.LightBlue};
  text-align: center;
  backface-visibility: hidden;
  white-space: pre-wrap;
  transform: rotateY(180deg);
`;

const CorrectButton = styled.div<{ isClick: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 100px;
  background-color: ${({ isClick }) => (isClick ? "#73B0EF" : "#ebebeb")};
  border-radius: 10px;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const WrongButton = styled.div<{ isClick: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 100px;
  background-color: ${({ isClick }) => (isClick ? "#F26D7B" : "#ebebeb")};
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
