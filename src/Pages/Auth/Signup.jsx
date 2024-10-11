import React from 'react'
import AuthLayout from '../../Components/Layout/Auth_Layout'
import Text_inputs from '../../Components/Inputs/Text_inputs'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import styles from './Auth.module.scss'

const Signup = () => {
  const onSubmitsignup = (e) => {
    e.preventDefault();
  }
  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Create An Account </h1>
        <p className='auth_title mt-3'>Enter Your details below</p>
        <form className=''>
          <Text_inputs styles={{ marginBottom: "18px" }} placeholder="Name" type="text" />
          <Text_inputs styles={{ marginBottom: "18px" }} placeholder="Email" type="email" />
          <Text_inputs styles={{ marginBottom: "18px" }} placeholder="Password" type="password" />
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={false} disabled={false} onclick={onSubmitsignup}>Create Account</PrimaryButton>
          </div>
        </form>
        <span>Already Have An Account? <Link className={styles.login_link} to="/Auth/Login"> Login </Link> </span>
      </div>
    </AuthLayout>
  )
}

export default Signup