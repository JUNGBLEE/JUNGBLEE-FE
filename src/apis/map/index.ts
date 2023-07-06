import { instance } from "../axios";
import { MapRequest } from "./type";
import { useQuery } from "@tanstack/react-query";

export const useMapApi = () => {
  const response = async () => {
    return await instance.get<MapRequest>(`/map`);
  };

  return useQuery(["map"], response);
};
