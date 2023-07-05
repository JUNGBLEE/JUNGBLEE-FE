import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizNumber = styled.div`
  position: absolute;
  top: 27px;
  left: 27px;
  color: ${(props) => props.theme.LightSkyBlue};
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const Question = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  padding: 100px;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 8px;
  margin-top: 30px;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.LightBlue};
  text-align: center;
  white-space: pre-wrap;
`;

export const Buttons = styled.div`
  display: grid;
  width: 600px;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 290px;
  height: 70px;
  border-radius: 8px;
  background: #fc8181;
  color: ${(props) => props.theme.Navy};
  cursor: pointer;
  padding: 0 20px;
`;

export const AlphaBet = styled.div`
  text-align: center;
  font-size: 32px;
  color: ${(props) => props.theme.Navy};
  font-weight: 600;
  margin-right: 16px;
`;

export const AnswerText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-wrap;
`;
export const ProgressText = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;
export const NextButton = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.LightBlue};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  background-color: ${(props) => props.theme.LightNavy};
  border-radius: 8px;
  cursor: pointer;
`;
export const NextImg = styled.img`
  position: absolute;
  right: 26px;
`;
