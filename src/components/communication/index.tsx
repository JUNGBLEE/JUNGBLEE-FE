import { HStack } from "@chakra-ui/react";
import styled from "styled-components";

const Communication = () => {
  return (
    <Container>
      전체
      <Grid>
        <ThumbnailCard>
          <Thumbnail src="" alt="사진" />
          <CardDetail>
            <CardTitle>자전거와 승용차의 사고, 누구의 과실인가?</CardTitle>
            <CardContent>2023년 7월 5일 발생한... 이태영 멍청이 이태영 멍청이</CardContent>
            <CardDate>2023년 7월 5일</CardDate>
          </CardDetail>
        </ThumbnailCard>
        <ThumbnailCard>
          <Thumbnail src="" alt="사진" />
          <CardDetail>
            <CardTitle>자전거와 승용차의 사고, 누구의 과실인가?</CardTitle>
            <CardContent>2023년 7월 5일 발생한... 이태영 멍청이 이태영 멍청이</CardContent>
            <CardDate>2023년 7월 5일</CardDate>
          </CardDetail>
        </ThumbnailCard>
        <ThumbnailCard>
          <Thumbnail src="" alt="사진" />
          <CardDetail>
            <CardTitle>자전거와 승용차의 사고, 누구의 과실인가?</CardTitle>
            <CardContent>2023년 7월 5일 발생한... 이태영 멍청이 이태영 멍청이</CardContent>
            <CardDate>2023년 7월 5일</CardDate>
          </CardDetail>
        </ThumbnailCard>
        <ThumbnailCard>
          <Thumbnail src="" alt="사진" />
          <CardDetail>
            <CardTitle>자전거와 승용차의 사고, 누구의 과실인가?</CardTitle>
            <CardContent>2023년 7월 5일 발생한... 이태영 멍청이 이태영 멍청이</CardContent>
            <CardDate>2023년 7월 5일</CardDate>
          </CardDetail>
        </ThumbnailCard>
      </Grid>
    </Container>
  );
};

export default Communication;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 120px 0;
  color: #000;
  font-size: 32px;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;
`;

const ThumbnailCard = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.LightNavy};
  overflow: hidden;
`;

const Thumbnail = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background-color: #f5f5f5;
  padding: 20px 22px;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  height: 80px;
  font-size: 12px;
  font-weight: 400;
`;

const CardDate = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
