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
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Badges
const outOfStock = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="out of stock" container />
);
const inStock = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="in stock" container />
);
// Data
import dataTableData from "layouts/ecommerce/products/products-list/data/dataTableData";
import { useGetProductsQuery } from "slices/productsApiSlice";

function ProductsList() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  const productNames = products ? products.map(product => product.name) : [];


  const transformedData = useMemo(() => {
    return {
      
        columns: [
            {
                Header: "Product",
                accessor: "product",
                width: "40%",
                Cell: ({ value }) => (
                    <ProductCell image={value.image} name={value.name} />
                ),
            },
            { Header: "Category", accessor: "category" },
            { Header: "Price", accessor: "price" },
            { Header: "SKU", accessor: "sku" },
            { Header: "Quantity", accessor: "quantity" },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ value }) => (value === "in stock" ? inStock : outOfStock),
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({ cell: { row } }) => <ActionCell productId={row.original.id} />,
            },
        ],
        rows: products ? products.map(product => ({
            product: { name: product.name, image: product.image }, // Assuming product.image exists in your data.
            id: product.id, 
            category: product.category,
            price: `$${product.price}`,
            sku: product.sku,
            quantity: product.quantity,
            status: product.tag, // assuming the tag determines the stock status
            action: "action", // This value doesn't matter since we will always render the ActionCell in the table.
        })) : []
    };
}, [products]);

  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                All Products
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SoftTypography>
            </SoftBox>
            <Stack spacing={1} direction="row">
              <Link to="/ecommerce/products/add-product">
                <SoftButton variant="gradient" color="info" size="small">
                  + new product
                </SoftButton>
              </Link>
           
            </Stack>
          </SoftBox>
          <DataTable
            table={transformedData}
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

export default ProductsList;
