import React from 'react'
import AuthLayout from '../../Components/Layout/Auth_Layout'
import styles from "./Auth.module.scss"
import Text_inputs from '../../Components/Inputs/Text_inputs'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const Login = () => {
  const onsubmitLogin = (e) => {
    e.preventDefault();
  }
  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Log into PrimeMart </h1>
        <p className='auth_title mt-3'>Enter Your details below</p>
        <form className=''>
          <Text_inputs styles={{ marginBottom: "18px" }} placeholder="Email" type="email" />
          <Text_inputs styles={{ marginBottom: "18px" }} placeholder="Password" type="password" />
          <small><Link className={styles.forget_password_link} to="/Auth/Signup"> Forget Password </Link> </small>
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={false} disabled={false} onclick={onsubmitLogin} >Login</PrimaryButton>
          </div>
        </form>
        <span>Create a New Account? <Link className={styles.login_link} to="/Auth/Signup">Sign Up</Link> </span>
      </div>
    </AuthLayout>
  )
}

export default Login