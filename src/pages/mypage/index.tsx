import SideBar from "../../components/sideBar";
import styled from "styled-components";
import { HStack, Progress } from "@chakra-ui/react";
import LeftIcon from "../../assets/leftArrow.svg";
import RightIcon from "../../assets/rightArrow.svg";
import { useMyPageApi } from "../../apis/user";
import { useRecentQuestion } from "../../apis/quiz";

const MyPage = () => {
  const { data } = useMyPageApi();

  const total = (data?.data.failedQuizCount ?? 0) + (data?.data.successQuizCount ?? 0);

  const { data: recentQuestion } = useRecentQuestion();

  return (
    <>
      <SideBar id={data?.data.accountId ?? "아이디"} />
      <Wrapper>
        <ProgressContainer>
          <MyInfo>
            {data?.data.username}님이 푼 문제 수는 {total}개 입니다.
          </MyInfo>
          <HStack justifyContent="space-between">
            <Text style={{ marginLeft: 12 }}>맞힌 문제</Text>
            <Progress colorScheme="blue" hasStripe w={"70%"} value={((data?.data.successQuizCount ?? 3) / 5) * 100} />
            <Text>{data?.data.successQuizCount}개</Text>
          </HStack>
          <HStack justifyContent="space-between" marginTop={"30px"}>
            <Text style={{ marginLeft: 12 }}>틀린 문제</Text>
            <Progress colorScheme="red" hasStripe w={"70%"} value={((data?.data.failedQuizCount ?? 2) / 5) * 100} />
            <Text>{data?.data.failedQuizCount}개</Text>
          </HStack>
        </ProgressContainer>
      </Wrapper>
      <Wrapper style={{ paddingTop: 30 }}>
        <QuestionList>
          {/* <ArrowCircle>
            <img src={LeftIcon} />
          </ArrowCircle> */}
          <Cards>
            {recentQuestion?.data.quizResponseList.slice(0, 3).map((res) => {
              return <QuestionCard color={res.successful ? "#73B0EF" : "#FE4956"}>{res.content}</QuestionCard>;
            })}
          </Cards>
          {/* <ArrowCircle>
            <img src={RightIcon} />
          </ArrowCircle> */}
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

const QuestionCard = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  background-color: #ffffff;
  border: 3px solid ${({ color }) => color};
  width: 100%;
  height: 270px;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
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
