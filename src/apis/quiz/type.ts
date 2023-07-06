export interface SingleQuizResponse {
  id: number;
  content: string;
  commentary: string;
  answer: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  successful: boolean;
  accountId: string;
  multipleChose: boolean;
}

export interface QuizResponseList {
  quizResponseList: QuizList[];
}

export interface QuizList {
  id: number;
  content: string;
  commentary: string;
  answer: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  successful: boolean;
  accountId: string;
  multipleChose: boolean;
}

export interface QuizSolved {
  answer: string;
}
