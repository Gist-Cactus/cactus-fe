// public braille translation API provided by @misha-pyshark
// https://github.com/misha-pyshark/braille?tab=readme-ov-file

const BRAILLE_BASE_URL = "https://fastbraille.com/api";

import replaceSpaceBraille from "src/util/replaceSpaceBraille";

import { noBaseUrlApi } from "../axios";

interface GetBrailleTranslationResponse {
  braille: string;
  original: string;
}

interface GetBrailleTranslationRequest {
  text: string;
}

export const getBrailleTranslation = async (
  requestData: GetBrailleTranslationRequest,
) => {
  const queryText = replaceSpaceBraille(requestData.text);

  const response = await noBaseUrlApi.get<GetBrailleTranslationResponse>(
    `${BRAILLE_BASE_URL}/${queryText}`,
  );

  return response.data.braille;
};
