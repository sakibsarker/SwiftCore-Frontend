/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components

import PropTypes from 'prop-types';
import {useMemo} from "react";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import SoftBadge from "components/SoftBadge";
import ProductCell from "layouts/ecommerce/products/products-list/components/ProductCell";
import ActionCell from "layouts/pages/users/user-list/components/ActionCell";

// Badges
const isAdminBadge = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="Admin" container />
);

const isNotAdminBadge = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="User" container />
);

// Data
import dataTableData from "layouts/ecommerce/products/products-list/data/dataTableData";
import { useGetUsersQuery } from "slices/usersApiSlice";

function UserList() {
  const { data: users, isLoading: isLoadingUsers, isError: isErrorUsers } = useGetUsersQuery();

  const transformedUserData = useMemo(() => {
    return {
      columns: [
         { Header: "User ID", accessor: "id" },
        {
          Header: "Name",
          accessor: "name",
          width: "40%",
          // Assuming ProductCell can handle only name, adjust accordingly.
        },
        { Header: "Email", accessor: "email" },
        {
          Header: "User Status",
          accessor: "isAdmin",
          Cell: ({ value }) => (value ? isAdminBadge : isNotAdminBadge),
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: ({ cell: { row } }) => <ActionCell userId={row.original.id} />, // Adjust the ActionCell to handle user actions.
        },
      ],
      rows: users ? users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        action: "action", // This value doesn't matter since we will always render the ActionCell in the table.
      })) : []
    };
  }, [users]);
  
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
               Users List
              </SoftTypography>
             
            </SoftBox>
            <Stack spacing={1} direction="row">
            </Stack>
          </SoftBox>
          <DataTable
            table={transformedUserData}
            entriesPerPage={{
              defaultValue: 7,
              entries: [5, 7, 10, 15, 20, 25],
            }}
            canSearch
          />
          
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UserList;
