import { useState } from "react";
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo({ product, setProduct }) {
  const handleInputChange = (key, value) => {
    if (key === "weight") {
      value = parseFloat(value);
    }

    if (key === "quantity") {
      value = parseInt(value, 10);
    }

    setProduct((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Card sx={{ overflow: "visible" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5">Product Information</SoftTypography>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                type="text"
                label="name"
                value={product.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormField
                type="number"
                label="weight"
                value={product.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                type="text"
                label="collection"
                value={product.collection}
                onChange={(e) => handleInputChange("collection", e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12} sm={3}>
              <FormField type="number" label="price" value={product.price}
                onChange={e => handleInputChange("price", e.target.value)} />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <FormField
                type="number"
                label="quantity"
                value={product.quantity}
                onChange={(e) => handleInputChange("quantity", e.target.value)}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Description&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="regular" color="text">
                    (optional)
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftEditor
                defaultValue={product.description}
                onChange={(updatedValue) => {
                  console.log(product.description);
                  console.log(updatedValue);
                  setProduct((prev) => ({ ...prev, description: updatedValue }));
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Category
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  value={{ value: product.category, label: product.category }}
                  onChange={(option) => handleInputChange("category", option.value)}
                  options={[
                    { value: "Ceramic Tile", label: "Ceramic Tile" },
                    { value: "Hard Wood", label: "Hard Wood" },
                    { value: "Carpet tile", label: "Carpet tile" },
                    { value: "Rolled Carpet", label: "Rolled Carpet" },
                  ]}
                />
              </SoftBox>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Color
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                value={{ value: product.color, label: product.color }}
                onChange={(option) => handleInputChange("color", option.value)}
                options={[
                  { value: "black", label: "Black" },
                  { value: "blue", label: "Blue" },
                  { value: "green", label: "Green" },
                  { value: "orange", label: "Orange" },
                  { value: "white", label: "White" },
                ]}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    collection: PropTypes.string,
    color: PropTypes.string,
    weight: PropTypes.number,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  setProduct: PropTypes.func.isRequired,
};

export default ProductInfo;
