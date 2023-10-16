// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftDropzone from "components/SoftDropzone";
import Card from "@mui/material/Card";

function Media() {
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
        <SoftDropzone options={{ addRemoveLinks: true }} />
      </SoftBox>
    </SoftBox>
    </Card>
  );
}

export default Media;
