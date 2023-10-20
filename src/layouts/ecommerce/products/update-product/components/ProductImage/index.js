
// @mui material components
import Card from "@mui/material/Card";
import PropTypes from 'prop-types';

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Images

function ProductImage({ imageUrl }) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5" fontWeight="bold">
          Product Image
        </SoftTypography>
        <SoftBox
          component="img"
          src={imageUrl}
          alt="Image URL"
          borderRadius="lg"
          shadow="lg"
          width="100%"
          my={3}
        />
        {/* <SoftBox display="flex">
          <SoftBox mr={1}>
            <SoftButton variant="gradient" color="info" size="small">
              edit
            </SoftButton>
          </SoftBox>
          <SoftButton variant="outlined" color="dark" size="small">
            remove
          </SoftButton>
        </SoftBox> */}
      </SoftBox>
    </Card>
  );
}

ProductImage.propTypes = {
  imageUrl: PropTypes.string,
};


export default ProductImage;
