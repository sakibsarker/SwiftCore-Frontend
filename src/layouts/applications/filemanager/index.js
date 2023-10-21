import React, { useState, useEffect, useMemo } from 'react';

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useGetFilesQuery } from 'slices/fileApiSlice';

function FileManager() {
  
  const { data: files, isError, isLoading } = useGetFilesQuery();

  // Transform the data into the format needed for your component:
  const transformedData = useMemo(() => {
      if (!files) return null;

      return {
          columns: [
              { Header: "Name", accessor: "fileName", width: "20%" },
              { Header: "File URL", accessor: "fileUrl", width: "25%" },
              { Header: "Format", accessor: "fileFormat" },
              { Header: "Size", accessor: "formattedSize", width: "7%" },
              { Header: "Last Modified", accessor: "lastModified" },
          ],
          rows: files.map(file => ({
              ...file,
              formattedSize: `${(file.fileSize / (1024 * 1024)).toFixed(2)} MB`
          }))
      };
  }, [files]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <Card>
          <SoftBox p={3} lineHeight={1}>
            <SoftTypography variant="h5" fontWeight="medium">
              File Manager 
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Image, MP4, Document, PDF, Excel
            </SoftTypography>
          </SoftBox>
          {transformedData ? <DataTable table={transformedData} canSearch /> : "Loading..."}
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default FileManager;
