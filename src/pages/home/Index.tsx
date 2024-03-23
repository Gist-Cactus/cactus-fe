import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { postPdf } from "src/api/pdf/pdf";
import { createSession } from "src/api/session/session";
import Icons from "src/assets/Icons";
import colors from "src/colors";
import styled from "styled-components";

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const pdfSubmitMutation = useMutation({
    mutationFn: postPdf,
  });

  const handleSubmit = async () => {
    if (!selectedFile) return;
    console.log("Selected PDF file:", selectedFile.name);

    const createSessionResponse = await createSession({
      title: Date.now().toString(),
    });
    if (!createSessionResponse.uuid) return;

    pdfSubmitMutation.mutate({
      sessionUuid: createSessionResponse.uuid,
      file: selectedFile,
    });
  };

  return (
    <EntireWrapper>
      {selectedFile && (
        <FilenameViewer>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "30px",
            }}
          >
            {selectedFile.name}
          </p>

          <Icons.FastArrowRight onClick={handleSubmit} />
        </FilenameViewer>
      )}

      <FileSelectButton htmlFor="file-input">SELECT .pdf FILE</FileSelectButton>

      <FileInput
        id="file-input"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
    </EntireWrapper>
  );
};

const FilenameViewer = styled.div`
  padding: 15px 15px 15px 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  border: 2px solid ${colors.common.white};
  border-radius: 15px;

  min-width: 300px;
`;

const EntireWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  gap: 20px;

  justify-content: center;
  align-items: center;
`;

const FileSelectButton = styled.label`
  background-color: ${colors.common.white};
  padding: 15px 25px;

  font-size: 20px;
  font-weight: 600;
  color: ${colors.common.black};

  border: none;
  border-radius: 15px;

  &:hover {
    background-color: ${colors.common.white}90;
  }

  transition: background-color 0.1s;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

export default HomePage;
