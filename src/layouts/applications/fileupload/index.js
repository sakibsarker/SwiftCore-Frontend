import React from "react";
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Media from "layouts/applications/fileupload/media";

function FileUpload() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={4}>
          <Media />
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default FileUpload;
