import styled from "styled-components";
import { HStack } from "@chakra-ui/react";
import SendImg from "../../assets/send.svg";
import { useChooseVideo, useCreateOption, useSingleVideo, useVideoOptionList } from "../../apis/video";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import Video1 from "../../../public/videos/video.mp4";
import Video2 from "../../../public/videos/video2.mp4";
import Video3 from "../../../public/videos/video3.mp4";
import Video4 from "../../../public/videos/video4.mp4";
import Video5 from "../../../public/videos/video5.mp4";

const videos = [Video1, Video2, Video3, Video4, Video5];

export const CommunicationDetail = () => {
  const { id } = useParams();
  const { data: singleVideo } = useSingleVideo(id || "");
  const { mutate: createOption } = useCreateOption(id || "");
  const { data: videoOptionList } = useVideoOptionList(id || "");
  const [click, setClick] = useState<"T" | "F" | "">("");
  const { state, onHandleChange } = useInput({ content: "" });
  const { mutate } = useChooseVideo(id || "");

  console.log(singleVideo);

  const total = (singleVideo?.data.teamA ?? 0) + (singleVideo?.data.teamB ?? 0) + 1;

  return (
    <Container>
      <Video src={videos[Number(id) - 1 || 0]} loop autoPlay muted />
      <Title>{singleVideo?.data.title}</Title>
      <Content>{singleVideo?.data.content}</Content>
      <HStack justifyContent="space-between" position="relative">
        <Button
          click={click}
          width={30}
          isClick={click === "T"}
          color="#73B0EF"
          onClick={() => {
            mutate({ team: true });
            setClick("T");
          }}
        >
          A의 과실이 더 크다.
          {click && (
            <>
              <br />
              <>{singleVideo?.data.teamA ?? 0 + +(click === "T" && 1)}</>
            </>
          )}
        </Button>
        <VS click={!!click}>VS</VS>
        <Button
          click={click}
          width={70}
          isClick={click === "F"}
          color="#F26D7B"
          onClick={() => {
            mutate({ team: false });
            setClick("F");
          }}
        >
          B의 과실이 더 크다.
          {click && (
            <>
              <br />
              <>{singleVideo?.data.teamB ?? 0 + +(click === "F" && 1)}</>
            </>
          )}
        </Button>
      </HStack>
      <Line />
      <HStack position="relative">
        <Input
          name="content"
          onChange={onHandleChange}
          value={state.content}
          disabled={!click}
          placeholder="메세지를 입력해주세요."
        />
        <SendIcon
          onClick={() => createOption({ team: click === "T" ? true : false, content: state.content })}
          src={SendImg}
        />
      </HStack>
      <Comments>
        {videoOptionList?.data.videoQuizOpinionResponseList.map((res) => {
          return (
            <>
              {res.team ? (
                <CommentCard>
                  <Name>{res.username}</Name>
                  <Comment>{res.content}</Comment>
                </CommentCard>
              ) : (
                <DisAgreeComment>
                  <Name>{res.username}</Name>
                  <Comment>{res.content}</Comment>
                </DisAgreeComment>
              )}
            </>
          );
        })}
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

const Video = styled.video`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 8px;
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

const Button = styled.div<{ width: number; isClick: boolean; color: string; click: string }>`
  display: flex;
  justify-content: center;
  min-width: 50px;
  align-items: center;
  width: ${({ click, width }) => (click ? `${width}%` : "48%")};
  height: 100px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.25);
  background-color: ${({ isClick, color }) => (isClick ? color : "#EBEBEB")};
  cursor: pointer;
  text-align: center;
  transition: 0.5s;
`;

const VS = styled.div<{ click: boolean }>`
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
  left: ${({ click }) => (click ? "30%" : "50%")};
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  border-radius: 50px;
`;

const Line = styled.hr`
  height: 2px;
  margin: 60px 0;
`;

const Input = styled.input<{ disabled: boolean }>`
  width: 100%;
  height: 60px;
  padding: 32px 64px 32px 32px;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#dedddd" : "#f9f9f9")};
  color: ${({ disabled }) => disabled && "#212121"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
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
