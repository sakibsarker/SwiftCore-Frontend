import { useState,useEffect } from "react";

// react-router-dom components
import { Link,useLocation,useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";


// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";


import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../../../slices/usersApiSlice';
import { setCredentials } from '../../../../slices/authSlice';

function Cover() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);


  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [login,{isLoading}]=useLoginMutation();
  
  const {userInfo}=useSelector((state)=>state.auth);

//re direct after login shipping
  const {search}=useLocation();
  const sp=new URLSearchParams(search);
  const redirect=sp.get('redirect')||'/dashboards/default';
  
  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
  },[userInfo,redirect,navigate])

  const submitHandler=async(e)=>{
    console.log('called signin')
    e.preventDefault()
    try{
      const res=await login({email,password}).unwrap();
      dispatch(setCredentials({...res,}));
      navigate(redirect);

    }catch(error){
      console.log(error?.data?.message||error.error)

    }
  }

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form" onSubmit={submitHandler}>
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
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth type="submit">
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default Cover;
