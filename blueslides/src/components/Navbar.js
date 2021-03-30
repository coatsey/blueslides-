import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                   Blueslides <i className='fas fa-crosshairs'></i>utdoors
                   </Link>
                   <div className='menu-icon' onCLick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/hunting' className='nav-links' onClick={closeMobileMenu}>
                               Hunting
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/guns' className='nav-links' onClick={closeMobileMenu}>
                               Guns
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/ammo' className='nav-links' onClick={closeMobileMenu}>
                               Ammo
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/fishing' className='nav-links' onClick={closeMobileMenu}>
                               Fishing
                           </Link>
                       </li>
                   </ul>
                </div> 
            </nav>
        </>
    )
}

export default Navbar
