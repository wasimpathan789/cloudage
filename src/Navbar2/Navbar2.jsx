import React from 'react'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar2.css';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import Dropdown from '../components/dropdown/Dropdown';


const Navbar2 = () => {
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
        
        <ul className={click ? "nav-links" : "nav-links active"}>
            <li> <Link className="link"> Homesss </Link> </li>
            <li> <Link className="link"> About Us </Link> </li>

            <li> <Link className="link"> Services </Link> </li>
          <li> <Link className="link future"> Corporate Training </Link> </li>

            <li> <Link className="link"><Dropdown/></Link> </li>


          <li></li>
          <li> <Link className="link"> Alumini </Link> </li>
          <li> <Link className="link"> Contact </Link> </li>

        </ul>
        <div className='hamburger' onClick={clickHandler}>
            {
                click ? <CloseIcon/> : <MenuIcon/>
            }

        </div>
        
      
    </div>
  )
}

export default Navbar2;