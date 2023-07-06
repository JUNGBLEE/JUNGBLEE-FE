import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "../axios";
import {
  OpinionRequest,
  TeamRequest,
  Video,
  VideoListResponse,
  VideoOptionListResponse,
  VideoOptionRequest,
} from "./type";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const router = "/video-quiz";

/** 영상 목록 조회 */
export const useVideoList = () => {
  const response = async () => {
    return await instance.get<VideoListResponse>(`${router}/list`);
  };

  return useQuery(["video"], response);
};

/** 영상 단일 조회 */
export const useSingleVideo = (id: string) => {
  const response = async () => {
    return await instance.get<Video>(`${router}/${id}`);
  };

  return useQuery(["video", id], response);
};

export const useCreateOption = (id: string) => {
  const response = async (params: OpinionRequest) => {
    return await instance.post<VideoOptionRequest>(`${router}/opinion/${id}`, params);
  };

  const queryClient = useQueryClient();

  return useMutation(response, {
    onSuccess: () => {
      toast.success("댓글 생성이 완료되었습니다.");
      queryClient.invalidateQueries(["video", "option"]);
    },
  });
};

export const useVideoOptionList = (id: string) => {
  const response = async () => {
    return await instance.get<VideoOptionListResponse>(`${router}/opinion/${id}`);
  };

  return useQuery(["video", "option", id], response);
};

/** 영상 과실 팀 선택 */
export const useChooseVideo = (id: string) => {
  const response = async (params: TeamRequest) => {
    return await instance.post(`${router}/${id}`, params);
  };
  return useMutation(response);
};
