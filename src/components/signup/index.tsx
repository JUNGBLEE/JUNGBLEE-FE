import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { useSignUpApi } from "../../apis/user";

export const SignUp = () => {
  const { state, setState, onHandleChange } = useInput({ username: "", accountId: "", password: "" });

  const { mutate } = useSignUpApi();

  return (
    <Container>
      <Wrapper>
        <img src={Logo} width={60} />
        <Title>회원가입</Title>
        <Label>이름</Label>
        <Input
          name="username"
          onChange={onHandleChange}
          height={"45px"}
          marginBottom={"20px"}
          placeholder="이름 입력해 주세요"
          size="lg"
          variant="outline"
          isInvalid={false}
          isDisabled={false}
        />
        <Label>아이디</Label>
        <Input
          name="accountId"
          onChange={onHandleChange}
          height={"45px"}
          marginBottom={"20px"}
          placeholder="아이디를 입력해 주세요"
          size="lg"
          variant="outline"
          isInvalid={false}
          isDisabled={false}
        />
        <Label>비밀번호</Label>
        <Input
          name="password"
          onChange={onHandleChange}
          height={"45px"}
          marginBottom={"40px"}
          placeholder="비밀번호를 입력해 주세요"
          size="lg"
          variant="outline"
          isInvalid={false}
          isDisabled={false}
        />
        <Button onClick={() => mutate(state)}>회원가입</Button>
        <OrContainer>
          <Line>
            <OrText>or</OrText>
          </Line>
        </OrContainer>
        <LoginTextContainer>
          회원이신가요? <Link to="/login">로그인하기</Link>
        </LoginTextContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  width: 430px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  margin: 20px 0 20px 0;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.LightNavy};
  font-size: 20px;
  color: #edf2f7;
`;

const OrContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 10px 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const OrText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: #d9d9d9;
  width: 50px;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  background-color: #fff;
`;

const LoginTextContainer = styled.div`
  color: var(--black, #000);
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  a {
    color: rgb(90, 146, 255);
    text-decoration: underline;
  }
`;
