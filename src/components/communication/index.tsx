import { HStack } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useVideoList } from "../../apis/video";
import TH1 from "../../assets/진로변경.png";
import TH2 from "../../assets/주정차추돌사고.png";
import TH3 from "../../assets/후방직진.png";
import TH4 from "../../assets/주차장사고.png";
import TH5 from "../../assets/직진대좌회전사고.png";

const thumbnails = [TH1, TH2, TH3, TH4, TH5];

const Communication = () => {
  const { data } = useVideoList();

  return (
    <Container>
      전체
      <Grid>
        {data?.data.responseList.map((res, i) => {
          console.log(res.photo);
          return (
            <Link to={`/communication/${res.id}`}>
              <ThumbnailCard>
                <Thumbnail src={thumbnails[i]} alt="사진" />
                <CardDetail>
                  <CardTitle>{res.title}</CardTitle>
                  <CardContent>{res.content}</CardContent>
                  <CardDate>{res.issuedAt}</CardDate>
                </CardDetail>
              </ThumbnailCard>
            </Link>
          );
        })}
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
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
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
