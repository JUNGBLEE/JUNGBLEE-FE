import MainText from "../assets/mainText.svg";
import styled from "styled-components";
import Accidents from "../assets/accidents.svg";
import { HStack, VStack } from "@chakra-ui/react";
import Vote from "../assets/vote.svg";
import OXQuizIcon from "../assets/OXQuiz.svg";
import ChoseIcon from "../assets/Choice.svg";

export const HomePage = () => {
  return (
    <>
      <Container>
        <img src={MainText} />
        <img src={Accidents} />
      </Container>
      <Container2>
        <HStack width={"100%"}>
          <Video src="/videos/video.mp4" loop autoPlay muted />
          <Text>{"A와 B 중,\n누구의 과실이\n더 크다고 생각하시나요?"}</Text>
        </HStack>
        <HStack width={"100%"}>
          <Text2>{"다른 사람들과\n선택한 영상에 대한\n의견을 나누어 보세요."}</Text2>
          <img src={Vote} />
        </HStack>
      </Container2>
      <Container>
        <VStack width={"100%"}>
          <HStack width={"100%"} justifyContent={"space-around"}>
            <img src={OXQuizIcon} />
            <img src={ChoseIcon} />
          </HStack>
          <Description>
            {"OX퀴즈, 객관식으로 구성된 퀴즈를 풀고\n교통사고를 예방할 수 있는 지식을 한 층 더 쌓아 보세요."}
          </Description>
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
`;

const Container2 = styled(Container)`
  flex-direction: column;
  gap: 50px;
`;

const Video = styled.video`
  width: 400px;
  height: 400px;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin: 0 auto;
  white-space: pre-wrap;
`;

const Text2 = styled(Text)`
  text-align: right;
`;

const Description = styled(Text)`
  text-align: center;
  margin-top: 30px;
`;
