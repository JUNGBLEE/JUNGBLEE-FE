import styled from "styled-components";
import { HStack } from "@chakra-ui/react";
import SendImg from "../../assets/send.svg";

export const CommunicationDetail = () => {
  return (
    <Container>
      <Video></Video>
      <Title>자전거와 승용차의 사고, 누구의 과실인가?</Title>
      <Content>
        2023년 7월 5일 대전 유성구 장동 대덕SW마이스터고등학교 인근에서 발생한 자전거와 승용차의 사고 영상입니다. 등의
        대충 설명~ ~ ~
      </Content>
      <HStack justifyContent="space-between" position="relative">
        <Button>A의 과실이 더 크다.</Button>
        <VS>VS</VS>
        <Button>B의 과실이 더 크다.</Button>
      </HStack>
      <Line />
      <HStack position="relative">
        <Input placeholder="메세지를 입력해주세요." />
        <SendIcon src={SendImg} />
      </HStack>
      <Comments>
        <CommentCard>
          <Name>정지관</Name>
          <Comment>저는 A의 과실이 큰 것 같습니다. 갑자기 골목에서 나타났거든요!</Comment>
        </CommentCard>
        <DisAgreeComment>
          <Name>이태영</Name>
          <Comment>그런 게 어디 있나요? 다시 설명해 주세요.</Comment>
        </DisAgreeComment>
      </Comments>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  width: 65%;
  padding-bottom: 120px;
`;

const Video = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 300px;
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

const Title = styled.div`
  margin-top: 20px;
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;

const Content = styled.div`
  margin: 10px 0 30px 0;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 100px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.25);
  background-color: #ebebeb;
  cursor: pointer;
`;

const AgreeButton = styled.div``;

const DisAgreeButton = styled.div``;

const VS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.Navy};
  font-size: 28px;
  font-weight: 700;
  position: absolute;
  width: 100px;
  height: 60px;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
`;

const Line = styled.hr`
  height: 2px;
  margin: 60px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 32px 64px 32px 32px;
  background-color: #f9f9f9;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  &::placeholder {
    color: #cbcbcb;
  }
`;

const SendIcon = styled.img`
  position: absolute;
  right: 32px;
  cursor: pointer;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  gap: 30px;
`;

const CommentCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  max-width: 500px;
  min-height: 100px;
  border-radius: 15px;
  padding: 20px;
  margin: 0 auto 0 0;
  border: 2px solid #73b0ef;
  box-shadow: 0px 4px 3px -5px rgba(0, 0, 0, 0.25);
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Comment = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  white-space: pre-wrap;
`;

const DisAgreeComment = styled(CommentCard)`
  text-align: right;
  margin: 0 0 0 auto;
  border: 2px solid #f26d7b;
`;
