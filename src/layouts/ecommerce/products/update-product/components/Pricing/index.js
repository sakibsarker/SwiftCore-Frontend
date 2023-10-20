// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftSelect from "components/SoftSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/update-product/components/FormField";

function Pricing({ product, setProduct }) {

   const handleInputChange = (key, value) => {
    
    if ( key === "price") {
      value = parseFloat(value);
    }
    
  
    setProduct(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <Card sx={{ overflow: "visible" }}>
      <SoftBox p={3}>
        <SoftTypography variant="h5" fontWeight="bold">
          Pricing
        </SoftTypography>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            {/* <FormField type="number" label="price" defaultValue="99.00" /> */}
              <FormField type="number" label="price" value={product.price}
                onChange={e => handleInputChange("price", e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Currency
                </SoftTypography>
              </SoftBox>
              <SoftSelect
              value={{ value: product.currency, label: product.currency }}
              onChange={option => handleInputChange("currency", option.value)}
               
                options={[
                  { value: "btc", label: "BTC" },
                  { value: "cny", label: "CNY" },
                  { value: "eur", label: "EUR" },
                  { value: "gbp", label: "GBP" },
                  { value: "inr", label: "INR" },
                  { value: "use", label: "USD" },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormField type="text" label="SKU" value={product.sku}
                onChange={e => handleInputChange('sku', e.target.value)}/>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Project Tags
                </SoftTypography>
              </SoftBox>
              <SoftSelect
             value={{ value: product.tag, label: product.tag }}
             onChange={selectedOption => handleInputChange("tag", selectedOption.value)}
                options={[
                  { value: "black friday", label: "Black Friday" },
                  { value: "expired", label: "Expired", isDisabled: true },
                  { value: "out of stock", label: "Out of Stock" },
                  { value: "in stock", label: "In Stock" },
                  { value: "sale", label: "Sale" },
                ]}
                size="large"
                
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

Pricing.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string,
    currency:PropTypes.string, 
     price: PropTypes.number.isRequired, 
     tag: PropTypes.string,
    // or whatever type you expect
    //... you can also define other expected fields of product here.
  }).isRequired,
  setProduct: PropTypes.func.isRequired,
};

export default Pricing;
