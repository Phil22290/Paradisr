import React,{useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo"
                onClick={closeMobileMenu}>

                    PARADISR <img src="images/logoWH.png" alt="logo" width='6%'></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu-icon'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/story' className='nav-links' onClick={closeMobileMenu}>
                            Our Story
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                            Pricing
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                            Available Islands
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>GET IN TOUCH</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
