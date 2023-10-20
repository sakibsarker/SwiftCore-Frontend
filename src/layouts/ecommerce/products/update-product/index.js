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
import ProductImage from "layouts/ecommerce/products/update-product/components/ProductImage";
import ProductInfo from "layouts/ecommerce/products/update-product/components/ProductInfo";
import Pricing from "layouts/ecommerce/products/update-product/components/Pricing";
import Media from "./Media/index";
import { useParams } from "react-router-dom";
import axios from "axios";

import {useUpdateProductMutation,useGetProductDetailsQuery } from "slices/productsApiSlice";

function EditProduct() {

  const { productId } = useParams();

  const { data: productDetails, isLoading, isError } = useGetProductDetailsQuery(productId);

  const [updateProduct] = useUpdateProductMutation();

  const [selectedFile, setSelectedFile] = useState(null);


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
 



    const handleFileDrop = (file) => {
        setSelectedFile(file[0]);
    };

    const handleSave = async () => {
      if (selectedFile) {
          try {
              const response = await axios.post("/api/upload", {
                  file: selectedFile.name,
                  fileType: selectedFile.type,
              });
              const { url, fields } = response.data;
              const formData = new FormData();
              Object.keys(fields).forEach((key) => formData.append(key, fields[key]));
              formData.append("file", selectedFile);
              await axios.post(url, formData);
              const imageUrl = `${url}/${fields.key}`;

              const updatedProduct = { ...product, image: imageUrl }; // Construct the product with the updated image URL.

              setProduct(updatedProduct);  // This updates the React state.

              try {
                  // Use updatedProduct directly in the PUT request
                  await updateProduct({
                      productId: productId,
                      ...updatedProduct // Using the object with the latest image URL.
                  });
                  console.log('Product updated successfully');
              } catch (error) {
                  console.error("Error updating product:", error);
              }

          } catch (error) {
              alert("File upload failed. Please try again.");
              return;
          }
      }
  };

  useEffect(() => {
      if (productDetails && !isLoading && !isError) {
          setProduct(productDetails);
      }
  }, [productDetails, isLoading, isError]);

  useEffect(() => {
      console.log("Product's image URL has been updated:", product.image);
  }, [product.image]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <SoftTypography variant="h4" fontWeight="medium">
                Update Product
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
                  Update
                </SoftButton>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
          <ProductImage imageUrl={product.image} />
         
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo product={product} setProduct={setProduct} />
          </Grid>
          <Grid item xs={12} lg={4}>
          {/* <Media/> */}
          <Media onFileDrop={handleFileDrop} />
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
