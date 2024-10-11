import React, { Children } from 'react'
import PageLayout from './Layout'
import authBanner from '../../assets/Imgs/banner.jpg'

const AuthLayout = ({ children }) => {
    return (
        <>
            <PageLayout>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6'>
                            <figure>
                                <img src={authBanner} alt="" />
                            </figure>
                        </div>

                        <div className='col-6'>
                            {children}
                        </div>
                    </div>
                </div>
                 </PageLayout>

        </>
    )
}

export default AuthLayout