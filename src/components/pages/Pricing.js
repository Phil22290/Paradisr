import React, { useEffect, useState } from 'react'
import '../../App.css'
import SmallHero from '../SmallHero'
import Aos from "aos";
import "aos/dist/aos.css"
import "../../components/Boxes.css"
import Footer from '../Footer';
import { Button } from '../Button';
import '../Navbar.css';
import '../Button.css'




const Pricing = () => { 
  // const Prijs = () => {
    useEffect(() => {
      Aos.init({duration: 3000});
    }, []);

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
    <SmallHero />
    <h1 className="pricing">
                PRICING</h1>
        <div className="grids">
          <div className="boxes">
            <div className="boxes-text">
              <text>The million dollar question (literally and figuratively) remains... How much will such luxury set me back? </text>
              </div>
            </div>
          <div className="boxes">
          <div className="boxes-text">
              Well, as you might have guessed... These prices vary a lot, depending on the location, acrage, included buildings and facilities, accesibility, and so on.
            </div>
            </div>
          <div data-aos="fade-up" className="boxes">
          <div className="boxes-text">
          To give you a general idea: our properties start at 3,000,000 USD and go up to just below 1,000,000,000 USD.
            </div>
            </div>
          <div data-aos="fade-up" className="boxes">
            <div className="boxes-text">
            <p>Feel free to contact us, if any of the properties on our portfolio seems to be shouting your name. We will always respond within 2 hours.</p> 
            <p>- </p>
              <p>Also, if you have any special requirements, requests or needs, we will do our utmost to provide every element requested.</p>
            </div>
            </div>
          <div data-aos="fade-up" className="boxes">
          <div className="boxes-text">
            Our vast real estate network will cater all your needs and we have a 100% success rate in matching real estate with new and happy owners.
            </div>  
            </div>
          <div data-aos="fade-up" className="boxes">
          <div className="boxes-text">
            <p>Dont hestitate to click the 'Get in touch'-button below,</p> <p>and let us work our magic.</p>
            <p>-</p>
            <p>{button && <Button buttonStyle='btn--outline'>GET IN TOUCH</Button>}</p>
            </div>
            </div>
          

        </div>
            
            

        <Footer/>
        </>
  ) 
}

export default Pricing