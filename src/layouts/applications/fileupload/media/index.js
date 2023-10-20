import React, { useState } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftDropzone from "components/SoftDropzone";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import axios from "axios";

function Media() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const onRemove = () => {
    setSelectedFile(null);
  };

  const uploadSave = async () => {
    if (!selectedFile) return;
    
    setUploading(true);

    try {
      const response = await axios.post("/api/upload", {
        file: selectedFile.name,
        fileType: selectedFile.type,
      });

      const { url, fields } = response.data;
      const formData = new FormData();

      Object.keys(fields).forEach((key) => formData.append(key, fields[key]));
      formData.append("file", selectedFile);

      await axios.post(url, formData);

      alert("File uploaded successfully");
    } catch (error) {
      alert("File upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5">Media</SoftTypography>
        <SoftBox mt={3}>
          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Product Image
            </SoftTypography>
          </SoftBox>
          <SoftDropzone onDrop={onDrop} onRemove={onRemove} />
          <SoftButton onClick={uploadSave} disabled={!selectedFile || uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Media;
