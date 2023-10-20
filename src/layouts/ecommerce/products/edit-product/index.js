import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import Media from "./Media";
import axios from "axios";
import { useCreateProductMutation } from "slices/productsApiSlice";

function EditProduct() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
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
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [createProduct] = useCreateProductMutation();

  const handleFileDrop = (file) => {
    setSelectedFile(file[0]);
  };

  const handleSave = async () => {
    let imageUrl = product.image;  // Default to the current image URL
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
            imageUrl = `${url}/${fields.key}`; // Update the imageUrl with the new URL
        } catch (error) {
            alert("File upload failed. Please try again.");
            return;  // Exit early on failure
        }
    }

    // Use the updated imageUrl when sending the product data
    try {
        const updatedProduct = { ...product, image: imageUrl };
        await createProduct(updatedProduct);
        console.log("Product added successfully");
    } catch (error) {
        console.error("Error adding product:", error);
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
               Add your porduct
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
              Add Product
            </SoftButton>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
          <Media onFileDrop={handleFileDrop} />
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

