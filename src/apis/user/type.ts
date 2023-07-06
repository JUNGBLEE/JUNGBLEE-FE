export interface LoginRequest {
  accountId: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface MyResponse {
  username: string;
  accountId: string;
  successQuizCount: number;
  failedQuizCount: number;
}

export interface SignUpRequest {
  username: string;
  accountId: string;
  password: string;
}
