import { api } from "../axios";

interface PostPdfRequestData {
  sessionUuid: string;
  file: File;
}

interface PostPdfResponseData {
  id: number;
}

export const postPdf = async (requestData: PostPdfRequestData) => {
  const formData = new FormData();
  formData.append("file", requestData.file);

  const response = await api.post<PostPdfResponseData>(
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
  presentations: [
    {
      id: number;
      title: string;
      status: "PANDING" | "COMPLETE";
      createdAt: Date;
      sessionUuid: string;
    },
  ];
}

export const getPdfStatus = async (requestData: GetPdfStatusRequestData) => {
  const response = await api.get<GetPdfStatusResponseData>(
    `/session/${requestData.sessionUuid}/presentation`,
  );

  return response.data;
};
