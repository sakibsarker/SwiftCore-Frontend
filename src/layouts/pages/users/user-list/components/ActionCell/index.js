// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from 'prop-types';
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useDeleteUserMutation } from "slices/usersApiSlice";
import { useNavigate } from "react-router-dom";


function ActionCell({ userId }) {
  const navigate = useNavigate();

  console.log(userId)

  const [deleteUser, { isLoading: isLoadingDeleteUser }] = useDeleteUserMutation();

  const handleDeleteUserClick = async () => {
    try {
      if (userId) {
        await deleteUser(userId);
        console.log(userId);
        // handle successful delete, e.g. show a notification or refetch data
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = () => {
    navigate(`/pages/users/update-user/${userId}`);
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
          <Icon onClick={handleDeleteUserClick}>delete</Icon>
        </Tooltip>
      </SoftTypography>
    </SoftBox>
  );
}

ActionCell.propTypes = {
  userId: PropTypes.number,
};

export default ActionCell;
