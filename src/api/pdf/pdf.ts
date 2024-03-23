import { api } from "../axios";

interface PostPdfRequestData {
  sessionUuid: string;
  file: File;
}

export const postPdf = async (requestData: PostPdfRequestData) => {
  const formData = new FormData();
  formData.append("file", requestData.file);

  const response = await api.post(
    `/session/${requestData.sessionUuid}/presentation`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};

interface GetPdfStatusRequestData {
  sessionUuid: string;
}

interface GetPdfStatusResponseData {
  id: number;
  title: string;
  status: "PENDING" | "COMPLETE";
  createdAt: Date;
  sessionUuid: string;
}

export const getPdfStatus = async (requestData: GetPdfStatusRequestData) => {
  const response = await api.get<GetPdfStatusResponseData>(
    `/session/${requestData.sessionUuid}/presentation`,
  );

  return response.data;
};
