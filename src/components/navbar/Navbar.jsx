import React from 'react'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown'


const Navbar = () => {
    const [click, setClick] =useState(false);

    const clickHandler =()=>{
        setClick(!click);
        // alert("dfsdf");
    }
  return (
    <div className='navbar'>
        <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className='hamburger' onClick={clickHandler}>
            {
                click ? <CloseIcon/> : <MenuIcon/>
            }

        </div>
        
        <ul className={click ? "nav-links" : "nav-links active"}>
            <li> <Link to={"/"} className="link"> Home </Link> </li>
            <li> <Link to={"/about"}  className="link"> About Us </Link> </li>

            <li> <Link to={"/service"} className="link"> Services </Link> </li>
          <li> <Link to={"/corporate"} className="link future"> Corporate Training </Link> </li>

            <li> <Link className="link"><Dropdown/></Link> </li>


          <li></li>
          <li> <Link to={"/alumini"} className="link"> Alumini </Link> </li>
          <li> <Link to={"/contact"} className="link"> Contact </Link> </li>

        </ul>
   

    </div>
  )
}

export default Navbar;
