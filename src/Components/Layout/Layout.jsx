import React, { Children } from 'react'
import Topbar from '../Header/Topbar'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

const PageLayout = ({Children}) => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    {Children}
    <Footer/>
    </>
  )
}

export default PageLayout