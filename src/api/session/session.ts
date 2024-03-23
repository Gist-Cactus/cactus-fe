import { api } from "../axios";

interface CreateSessionRequestData {
  title: string;
}

export const createSession = async (requestData: CreateSessionRequestData) => {
  const response = await api.post(`/session`, requestData);

  return response.data;
};
