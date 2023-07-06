import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { LoginRequest, LoginResponse, MyResponse, SignUpRequest } from "./type";
import { Cookies } from "react-cookie";
import { useIsLoginStore } from "../../store/IsLoginStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const router = "/user";

export const useSignUpApi = () => {
  const response = async (params: SignUpRequest) => {
    return await instance.post(`${router}/signup`, params);
  };
  const navigate = useNavigate();

  return useMutation(response, {
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다");
      navigate("/login");
    },
  });
};

export const useLoginApi = () => {
  const response = async (params: LoginRequest) => {
    return await instance.post<LoginResponse>(`${router}/login`, params);
  };
  const cookie = new Cookies();
  const { setIsLogin } = useIsLoginStore();
  const navigate = useNavigate();

  return useMutation(response, {
    onSuccess: (res) => {
      toast.success("로그인이 완료되었습니다");
      cookie.set("access_token", res.data.accessToken);
      setIsLogin(true);
      navigate("/");
    },
  });
};

export const useMyPageApi = () => {
  const response = async () => {
    return await instance.get<MyResponse>("/user/mypage");
  };

  return useQuery(["my"], response);
};
