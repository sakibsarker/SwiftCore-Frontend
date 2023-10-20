import React from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftDropzone from "layouts/ecommerce/products/edit-product/SoftDropzone";

import Card from "@mui/material/Card";
import PropTypes from 'prop-types';


function Media({ onFileDrop }) {
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
          <SoftDropzone onDrop={onFileDrop} options={{ addRemoveLinks: true }} />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

Media.propTypes = {
  onFileDrop: PropTypes.func.isRequired  // <-- Add prop type validation
};
export default Media;
