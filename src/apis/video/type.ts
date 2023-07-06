export interface VideoListResponse {
  responseList: Video[];
}

export interface Video {
  id: number;
  title: string;
  content: string;
  photo: string;
  issuedAt: string;
  teamA: number;
  teamB: number;
}

export interface VideoOptionRequest {
  content: string;
  team: boolean;
}

export interface VideoOptionListResponse {
  videoQuizOpinionResponseList: VideoOption[];
}

export interface VideoOption {
  id: number;
  content: string;
  team: boolean;
  username: string;
}

export interface TeamRequest {
  team: boolean;
}

export interface OpinionRequest extends TeamRequest {
  content: string;
}
