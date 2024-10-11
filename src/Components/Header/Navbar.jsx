import React, { useContext } from 'react'
import styles from "./Navbar.module.scss"
import SearchIcon from '../../assets/Icons/Searchicon.svg'
import CartIcon from '../../assets/Icons/CartIcon.svg'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { SidebarContext } from '../../Context/SidebarContext'
import GlobalSearchbar from '../Search/Searchbar'
import ShippingCart from '../../Cart/ShippingCart'

const Navbar = () => {
    const { issidebar, sidebaropen, sidebarclosed } = useContext(SidebarContext);
    return (
        <div>
            <Sidebar />

            <nav className={`navbar navbar-expand-lg  ${styles.navbar_Container} `}>
                <div className="container">
                    <a className="navbar-brand" href="#">PrimeMart</a>
                    <button className="navbar-toggler" onClick={() => sidebaropen()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <NavLink to="/" className={`${styles.nav_link_item} nav-link active`}>Home</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/Contact" className={`${styles.nav_link_item} nav-link active`}>Contact</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/About" className={`${styles.nav_link_item} nav-link active`}>About</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/Auth/Signup" className={`${styles.nav_link_item} nav-link active`}>Sign Up</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex gap-4 align-items-center " role="search">
                           <GlobalSearchbar></GlobalSearchbar>
                           <ShippingCart/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar