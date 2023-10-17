// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useDeleteProductMutation } from "slices/productsApiSlice";
import { useNavigate } from "react-router-dom";


function ActionCell({ productId }) {
  const navigate = useNavigate();


  console.log(productId)

  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const handleDeleteClick = async () => {
    try {
      if (productId) {
        await deleteProduct(productId);
        console.log(productId)
        // handle successful delete, e.g. show a notification or refetch data
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditClick = () => {
    navigate(`/ecommerce/products/update-product/${productId}`);
};


  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Preview product" placement="top">
          <Icon>visibility</Icon>
        </Tooltip>
      </SoftTypography>
      <SoftBox mx={2}>
        <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Edit product" placement="top">
            {/* <Icon>edit</Icon> */}
            <Icon onClick={handleEditClick}>edit</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
      <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Delete product" placement="left">
          <Icon onClick={handleDeleteClick}>delete</Icon>
        </Tooltip>
      </SoftTypography>
    </SoftBox>
  );
}

ActionCell.propTypes = {
  productId: PropTypes.number,
};

export default ActionCell;
