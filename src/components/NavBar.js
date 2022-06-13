import React from 'react';
import './NavBar.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
const NavBar = () => {
const [click, setClick] = useState(false);
const [button,setButton]=useState(true);   
const handelClick  = () =>setClick(!click);
const closeMenuMobile = ()=>setClick(false);
const showButton = () =>{
    if(window.innerWidth <=960){
        setButton(false);
    }
    else setButton(true); 
};
 useEffect(()=>{
    showButton();
},[]);

window.addEventListener('resize',showButton);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'  onClick={closeMenuMobile}>TravelMode <i className="fab fa-typo3"></i></Link>
                <div className="menu-icon" onClick={handelClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                {/* <div className="NavbarItems"> */}
                    <li className="nav-item">
                        
                        <Link to='/' className='nav-links' onClick={closeMenuMobile}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Services' className='nav-links' onClick={closeMenuMobile}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Support' className='nav-links' onClick={closeMenuMobile}>Support</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/About' className='nav-links' onClick={closeMenuMobile}>About Us</Link>
                    </li>  */}
                    <li className="nav-item">
                        <Link to='/Login' className='nav-links-mobile' onClick={closeMenuMobile}>Sign In/Sign Up</Link>
                    </li>
                {/* </div> */}
                </ul>
                {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
                
            </div>
        </div>
    );
}

export default NavBar;
