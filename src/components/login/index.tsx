import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { Input } from "@chakra-ui/react";
import { useIsLoginStore } from "../../store/IsLoginStore";
import { useInput } from "../../hooks/useInput";
import { useLoginApi } from "../../apis/user";

export const Login = () => {
  const { state, setState, onHandleChange } = useInput({ accountId: "", password: "" });

  const { accountId, password } = state;

  const { mutate } = useLoginApi();

  return (
    <Container>
      <Wrapper>
        <img src={Logo} width={60} />
        <Title>로그인</Title>
        <Label>아이디</Label>
        <Input
          name="accountId"
          height={"45px"}
          marginBottom={"40px"}
          placeholder="아이디를 입력해 주세요"
          size="lg"
          variant="outline"
          isInvalid={false}
          isDisabled={false}
          onChange={onHandleChange}
          value={accountId}
        />
        <Label>비밀번호</Label>
        <Input
          name="password"
          height={"45px"}
          marginBottom={"40px"}
          placeholder="비밀번호를 입력해 주세요"
          size="lg"
          variant="outline"
          isInvalid={false}
          isDisabled={false}
          onChange={onHandleChange}
          value={password}
          type="password"
        />
        <Button
          onClick={() => {
            mutate(state);
          }}
        >
          로그인
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Wrapper = styled.div`
  width: 430px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  margin: 25px 0 25px 0;
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
  margin: 30px 0;
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
