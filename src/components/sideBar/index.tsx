import styled from "styled-components";
import Person from "../../assets/person.svg";

const SideBar = () => {
  return (
    <Container>
      <Profile src={Person}></Profile>
      <Id>아이디</Id>
      <Texts>
        <Text>최근 푼 문제</Text>
        <Text>맞힌 문제</Text>
        <Text>틀린 문제</Text>
        <Text>로그아웃</Text>
      </Texts>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 170px;
  height: 100vh;
  padding-top: 110px;
  background-color: ${(props) => props.theme.Navy};
`;

const Profile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const Id = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 55px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
  text-align: center;
`;
