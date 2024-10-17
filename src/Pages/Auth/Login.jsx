import React, { useState } from 'react'
import AuthLayout from '../../Components/Layout/Auth_Layout'
import styles from "./Auth.module.scss"
import Text_inputs from '../../Components/Inputs/Text_inputs'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helper'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/features/user-slice'
import Eyebutton from '../../Components/Eyebutton/Eyebutton'

const Login = () => {
  const navigate = useNavigate();
  const [Eyeshow, SetEyeshow] = useState(false);
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [errors, SetErrors] = useState({ email: "", password: "" });
  const [authError, Setautherror] = useState("");
  const [loader, Setloader] = useState(false);
  const dispatch = useDispatch();

  const onsubmitLogin = async (e) => {
    e.preventDefault();


    // =============  Login Authentication start ============

    let emailError = "";
    let passwordError = "";

    if (!Helpers.validataEmail(email)) {
      emailError = "Invalid email format";
    }

    if (!Helpers.validatePassword(password)) {
      passwordError = "Password must be at least 8 characters";
    }

    if (emailError || passwordError) {
      SetErrors({ email: emailError, password: passwordError });
    } else {

      Setloader(true)
      try {
        const payload = { email, password };
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/login", payload);
        Setloader(false)
        console.log(response, "login response");
        dispatch(addUser(response.data))
        console.log(email, password);
        swal({
          title: "User Login Successfully",
          icon: "success",
          button: "OK",
        });
        navigate("/")
        SetErrors({ email: "", password: "" });
      } catch (error) {
        Setloader(false);
        const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again later.";
        Setautherror(errorMessage);
        console.log(errorMessage);  
  
        swal({
          title: errorMessage,
          icon: "error",
          button: "OK",
        });
      }
    }
    // ================= Login Authentication End ===============
  }

  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Log into PrimeMart</h1>
        <p className='auth_title mt-3'>Enter Your details below</p>
        <form onSubmit={onsubmitLogin}>
          <Text_inputs
            styles={{ marginBottom: "5px", marginTop: "20px" }}
            err_msg={errors.email}
            required
            value={email}
            onChange={Setemail}
            placeholder="Email"
            type="text"
          />
          <Text_inputs
            styles={{ marginBottom: "5px", marginTop: "20px" }}
            err_msg={errors.password}
            required
            value={password}
            onChange={Setpassword}
            placeholder="Password"
            type={Eyeshow ? "text" : "password"}
            isIcon={<Eyebutton showEye={Eyeshow} showEyeFunc={SetEyeshow} />}
          />

          <small className={styles.small}><Link className={styles.forget_password_link} to="/Auth/Signup">Forget Password</Link></small>
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={loader} disabled={loader}>Login</PrimaryButton>
          </div>
        </form>
        <span>Create a New Account? <Link className={styles.login_link} to="/Auth/Signup">Sign Up</Link></span>
      </div>
    </AuthLayout>
  );
}

export default Login;
