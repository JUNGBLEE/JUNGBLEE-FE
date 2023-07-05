import SideBar from "../../components/sideBar";
import styled from "styled-components";
import { HStack, Progress } from "@chakra-ui/react";
import LeftIcon from "../../assets/leftArrow.svg";
import RightIcon from "../../assets/rightArrow.svg";

const MyPage = () => {
  return (
    <>
      <SideBar />
      <Wrapper>
        <ProgressContainer>
          <MyInfo>정지관님이 푼 문제 수는 5개 입니다.</MyInfo>
          <HStack justifyContent="space-between">
            <Text style={{ marginLeft: 12 }}>맞힌 문제</Text>
            <Progress w={"70%"} />
            <Text>3개</Text>
          </HStack>
          <HStack justifyContent="space-between" marginTop={"30px"}>
            <Text style={{ marginLeft: 12 }}>틀린 문제</Text>
            <Progress w={"70%"} />
            <Text>2개</Text>
          </HStack>
        </ProgressContainer>
      </Wrapper>
      <Wrapper style={{ paddingTop: 30 }}>
        <QuestionList>
          <ArrowCircle>
            <img src={LeftIcon} />
          </ArrowCircle>
          <Cards>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
          </Cards>
          <ArrowCircle>
            <img src={RightIcon} />
          </ArrowCircle>
        </QuestionList>
      </Wrapper>
    </>
  );
};

export default MyPage;

const ProgressContainer = styled.div`
  width: 80%;
  height: 250px;
  background-color: ${(props) => props.theme.Navy};
  border-radius: 10px;
  margin: 0 auto;
  padding: 40px 50px;
`;

const MyInfo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.LightBlue};
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  margin-left: 170px;
  padding-top: 120px;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const QuestionList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 320px;
  background-color: ${(props) => props.theme.Navy};
  border-radius: 10px;
  margin: 0 auto;
  padding: 40px 0;
`;

const Cards = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
`;

const QuestionCard = styled.div`
  background-color: #ffffff;
  border: 3px solid #fe4956;
  width: 100%;
  height: 270px;
  border-radius: 5px;
`;

const ArrowCircle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 50%;
  box-shadow: -2px 3px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
