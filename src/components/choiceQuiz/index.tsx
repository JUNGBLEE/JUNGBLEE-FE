import { Progress, HStack } from "@chakra-ui/react";
import NextIcon from "../../assets/nextIcon.svg";
import * as _ from "./style";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useQuizSolve } from "../../apis/quiz";

interface Quiz {
  content?: string;
  answer?: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  commentary?: string;
}

export const ChoiceQuiz = ({ content, answer, optionA, optionB, optionC, optionD, commentary }: Quiz) => {
  const { id } = useParams();
  const [click, setClick] = useState<"a" | "b" | "c" | "d" | "e" | "">("");
  const { mutate } = useQuizSolve(id || "");

  return (
    <>
      <_.Container>
        <_.Card click={!click}>
          <_.Question click={!click}>
            <_.QuizNumber>Q{id}.</_.QuizNumber>
            {content}
          </_.Question>
          <_.Answer click={!click}>
            {answer === click.toUpperCase() ? (
              <div style={{ color: "#73B0EF" }}>맞았습니다</div>
            ) : (
              <div style={{ color: "#F26D7B" }}>
                {answer}
                <br />
                {commentary}
              </div>
            )}
          </_.Answer>
        </_.Card>
        <_.Buttons>
          <_.Button
            isClick={"a" === click}
            color={"#FC8181"}
            onClick={() => {
              setClick("a");
              mutate({ answer: "A" });
            }}
          >
            <_.AlphaBet>A</_.AlphaBet>
            <_.AnswerText>{optionA}</_.AnswerText>
          </_.Button>
          <_.Button
            isClick={"b" === click}
            color={"#F6E05E"}
            onClick={() => {
              setClick("b");
              mutate({ answer: "B" });
            }}
          >
            <_.AlphaBet>B</_.AlphaBet>
            <_.AnswerText>{optionB}</_.AnswerText>
          </_.Button>
          <_.Button
            isClick={"c" === click}
            color={"#68D391"}
            onClick={() => {
              setClick("c");
              mutate({ answer: "C" });
            }}
          >
            <_.AlphaBet>C</_.AlphaBet>
            <_.AnswerText>{optionC}</_.AnswerText>
          </_.Button>
          <_.Button
            isClick={"d" === click}
            color={"#63B3ED"}
            onClick={() => {
              setClick("d");
              mutate({ answer: "D" });
            }}
          >
            <_.AlphaBet>D</_.AlphaBet>
            <_.AnswerText>{optionD}</_.AnswerText>
          </_.Button>
        </_.Buttons>

        {!!click && (
          <Link to={`/quiz/${(Number(id) ?? 0) + 1}`} onClick={() => setClick("")}>
            <_.NextButton>
              {id === "5" ? (
                <>완료</>
              ) : (
                <>
                  다음 문제 <_.NextImg src={NextIcon} />
                </>
              )}
            </_.NextButton>
          </Link>
        )}
      </_.Container>
    </>
  );
};
