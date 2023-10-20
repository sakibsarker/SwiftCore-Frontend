import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewUser page components
import UserInfo from "layouts/pages/users/update-user/components/UserInfo";
import Address from "layouts/pages/users/update-user/components/Address";
import Socials from "layouts/pages/users/update-user/components/Socials";
import Profile from "layouts/pages/users/update-user/components/Profile";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/update-user/schemas/validations";
import form from "layouts/pages/users/update-user/schemas/form";
import initialValues from "layouts/pages/users/update-user/schemas/initialValues";
import { useGetUserDetailsQuery } from "slices/usersApiSlice";
import { useParams } from "react-router-dom";
import { useUpdateUserMutation } from "slices/usersApiSlice";

function getSteps() {
  return ["User Info", "Address", "Social", "Profile"];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    case 1:
      return <Address formData={formData} />;
    case 2:
      return <Socials formData={formData} />;
    case 3:
      return <Profile formData={formData} />;
    default:
      return null;
  }
}

function UpdateUser() {

  const { userId } = useParams();
  const { data: userDetails, isLoading, isError } = useGetUserDetailsQuery(userId);

  console.log(userId)
  const [updateUser] = useUpdateUserMutation();


  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    try {
        await updateUser({
            userId: userId, 
            name: values.firstName,
            email: values.email,
            password: values.password
        });
        actions.setSubmitting(false);
        actions.resetForm();
        // Maybe navigate the user to a success page or show a success message
    } catch (e) {
        // Handle the error here. You can set form errors or show an error notification.
        console.error("Error updating the user:", e);
    }
};


  const handleSubmit = (values, actions) => {
    submitForm(values, actions);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={7} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            {/* <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper> */}
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                      <UserInfo formData={{values, touched, formField, errors}} />
                        <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {activeStep === 0 ? (
                            <SoftBox />
                          ) : (
                            <SoftButton variant="gradient" color="light" onClick={handleBack}>
                              back
                            </SoftButton>
                          )}
                          <SoftButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                            Update Now
                          </SoftButton>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UpdateUser;
