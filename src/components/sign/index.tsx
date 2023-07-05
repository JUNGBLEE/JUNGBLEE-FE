import styled from "styled-components";

export const SignBackground = ({ message }: { message: string }) => {
  return (
    <Container>
      <Wrapper>
        <Title>
          {"당신의\n안전을 위한\n선택,"}
          <JungBlee>정블리</JungBlee>
        </Title>
        <SubTitle>{message}</SubTitle>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background: linear-gradient(360deg, rgba(32, 45, 112, 0.3) 0%, rgba(10, 12, 20, 0.87) 100%), #fff;
`;

const Wrapper = styled.div`
  padding: 43px;
  width: 550px;
  height: 550px;
  background: rgba(255, 255, 255, 0.1);
`;

const Title = styled.div`
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  white-space: pre-wrap;
`;

const JungBlee = styled.div`
  color: ${(props) => props.theme.DeepNavy};
`;

const SubTitle = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
  white-space: pre-wrap;
`;
