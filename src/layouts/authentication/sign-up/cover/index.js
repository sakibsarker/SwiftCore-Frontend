
import { useState,useEffect } from "react";

// react-router-dom components
import { Link,useLocation,useNavigate } from "react-router-dom";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved11 from "assets/images/curved-images/curved11.jpg";


import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../../../slices/usersApiSlice';
import { setCredentials } from '../../../../slices/authSlice';


function Cover() {


  const [agreement, setAgreement] = useState(true);

  const handleSetAgremment = () => setAgreement(!agreement);


  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [register,{isLoading}]=useRegisterMutation();
  
  const {userInfo}=useSelector((state)=>state.auth);

//re direct after login shipping
  const {search}=useLocation();
  const sp=new URLSearchParams(search);
  const redirect=sp.get('redirect')||'/dashboards/crm';
  
  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
  },[userInfo,redirect,navigate])

  const submitHandler=async(e)=>{
    console.log('singup called')
    e.preventDefault()
    try{
      const res=await register({name,email,password}).unwrap();
      dispatch(setCredentials({...res,}));
      navigate(redirect);

    }catch(error){
      console.log(error?.data?.message||error.error)

    }

  }

  return (
    <CoverLayout
      title="Join us today"
      description="Enter your email and password to register"
      image={curved11}
      top={12}
    >
      <SoftBox component="form" role="form" onSubmit={submitHandler}>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Name
            </SoftTypography>
          </SoftBox>
          <SoftInput placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          
          {/* <SoftInput placeholder="Name" /> */}
        </SoftBox>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          
<SoftInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          {/* <SoftInput type="email" placeholder="Email" /> */}
        </SoftBox>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

          {/* <SoftInput type="password" placeholder="Password" /> */}
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Checkbox checked={agreement} onChange={handleSetAgremment} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetAgremment}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;I agree the&nbsp;
          </SoftTypography>
          <SoftTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
            Terms and Conditions
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth type="submit">
            sign up
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Already have an account?&nbsp;
            <SoftTypography
              component={Link}
              to="/authentication/sign-in/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign in
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default Cover;
