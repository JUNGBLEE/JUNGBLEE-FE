import { useQuery, useMutation } from "@tanstack/react-query";
import { instance } from "../axios";
import { QuizResponseList, QuizSolved, SingleQuizResponse } from "./type";

/** 퀴즈 단일 조회 */
export const useSingleQuiz = (id: string) => {
  const response = async () => {
    return await instance.get<SingleQuizResponse>(`/quiz/${id}`);
  };

  return useQuery(["quiz", id], response);
};

/** 풀이힌 퀴즈 목록 조회 */
export const useRecentQuestion = () => {
  const response = async () => {
    return await instance.get<QuizResponseList>("/quiz/solvedQuizzes");
  };
  return useQuery(["quiz", "recent"], response);
};

/** 퀴즈 풀이 */
export const useQuizSolve = (id: string) => {
  const response = async (params: QuizSolved) => {
    return await instance.post(`/quiz/${id}`, params);
  };
  return useMutation(response);
};
