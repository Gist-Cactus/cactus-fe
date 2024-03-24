import { SlideResponse } from "src/types";

import { api } from "../axios";

interface GetSlidesRequestData {
  presentationId: number;
}

interface GetSlidesResponseData {
  slides: SlideResponse[];
}

export const getSlides = async (requsetData: GetSlidesRequestData) => {
  const response = await api.get<GetSlidesResponseData>(
    `/slide?presentationId=${requsetData.presentationId}`,
  );

  return response.data;
};
