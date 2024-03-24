import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPdfStatus, postPdf } from "src/api/pdf/pdf";
import { createSession } from "src/api/session/session";
import Icons from "src/assets/Icons";
import colors from "src/colors";
import Loading from "src/components/loading/Loading";
import LocalstorageKeys from "src/localstorage";
import Paths from "src/paths";
import styled from "styled-components";

const HomePage = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPdfUploaded, setIsPdfUploaded] = useState(false);
  const [isPdfProcessing, setIsPdfProcessing] = useState<boolean | null>(null);

  const [sessionUuid, setSessionUuid] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [presentationId, setPresentationId] = useState<number | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const pdfSubmitMutation = useMutation({
    mutationFn: postPdf,
    onSuccess: (data) => {
      setIsPdfUploaded(true);
      setIsPdfProcessing(true);

      if (!data) return;
      setPresentationId(data.id);
    },
  });

  const handleSubmit = async () => {
    if (!selectedFile) return;
    console.log("Selected PDF file:", selectedFile.name);

    const createSessionResponse = await createSession({
      title: Date.now().toString(),
    });
    if (!createSessionResponse.uuid) return;

    setSessionUuid(createSessionResponse.uuid);
    pdfSubmitMutation.mutate({
      sessionUuid: createSessionResponse.uuid,
      file: selectedFile,
    });
  };

  const handleLetsgo = () => {
    console.log("clicked");

    if (!sessionUuid) return;
    if (!presentationId) return;
    if (!title) return;

    localStorage.setItem(LocalstorageKeys.SESSION_UUID, sessionUuid);
    localStorage.setItem(
      LocalstorageKeys.PRESENTATION_ID,
      presentationId.toString(),
    );
    localStorage.setItem(LocalstorageKeys.TITLE, title);

    navigate(Paths.SLIDES);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPdfUploaded && sessionUuid) {
      const pollPdfStatus = async () => {
        const pdfStatus = await getPdfStatus({ sessionUuid });
        console.log("PDF status:", pdfStatus);

        const pdfInfo = pdfStatus.presentations[0];

        if (pdfInfo) {
          if (pdfInfo.title) setTitle(pdfInfo.title);
          if (pdfInfo.sessionUuid) setSessionUuid(pdfInfo.sessionUuid);
          if (pdfInfo.id) setPresentationId(pdfInfo.id);
        }

        if (pdfInfo.status === "COMPLETE") {
          // PDF processing is complete, perform any necessary actions
          setIsPdfProcessing(false);
          clearInterval(intervalId);
        }
      };

      intervalId = setInterval(pollPdfStatus, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPdfUploaded, sessionUuid]);

  return (
    <EntireWrapper>
      {isPdfProcessing === true && <Loading />}
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

          <Icons.FastArrowRight
            onClick={handleSubmit}
            style={{ cursor: "pointer" }}
          />
        </FilenameViewer>
      )}

      <FileSelectButton htmlFor="file-input">SELECT .pdf FILE</FileSelectButton>

      <button onClick={handleLetsgo}>letsgo</button>

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
