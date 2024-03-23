import { api } from "../axios";

interface CreateSessionRequestData {
  title: string;
}

interface CreateSessionResponseData {
  uuid: string;
  title: string;
  createdAt: Date;
}

export const createSession = async (requestData: CreateSessionRequestData) => {
  const response = await api.post<CreateSessionResponseData>(
    `/session`,
    requestData,
  );

  return response.data;
};
