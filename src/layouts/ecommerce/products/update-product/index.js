import React,{useState,useEffect} from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import Media from "./Media/index";
import { useParams } from "react-router-dom";

import {useUpdateProductMutation,useGetProductDetailsQuery } from "slices/productsApiSlice";

function EditProduct() {

  const { productId } = useParams();

  const { data: productDetails, isLoading, isError } = useGetProductDetailsQuery(productId);

  const [updateProduct] = useUpdateProductMutation();


  console.log(productId)

  const [product, setProduct] = useState({
    name: "",
    image:"",
    category: "",
    description: "Writting",
    collection: "",
    color: "",
    weight: 0.0,
    price: 0,
    quantity: 0,
    currency: "use",
    sku: "",
    tag: "",
  });

  useEffect(() => {
    if (productDetails && !isLoading && !isError) {
      setProduct(productDetails);
    }
  }, [productDetails, isLoading, isError]);
 

  const handleSave = async () => {
    try {
      await updateProduct({
        productId: productId, 
        ...product
      });
      console.log('Product updated successfully');
      // You can handle post-save actions here, like redirecting the user or showing a notification
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <SoftTypography variant="h4" fontWeight="medium">
                Make the changes below
              </SoftTypography>
              <SoftBox mt={1} mb={2}>
                <SoftTypography variant="body2" color="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <SoftBox display="flex" justifyContent="flex-end">
                <SoftButton variant="gradient" color="info" onClick={handleSave}>
                  save
                </SoftButton>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
          <Media/>
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo product={product} setProduct={setProduct} />
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <ProductImage /> */}
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing product={product} setProduct={setProduct} />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;
