import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import SmallHero from '../SmallHero';


function checkForm(form)
{
    if(!form.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    form.terms.focus();
    return false;
  }
  return true;
}



export default function Contact(){
    return (
        <>
            <SmallHero />
            
            <div class="container">  
                <form id="contact" action="" method="post" onsubmit="return checkForm(this);">
                    <h3>Ask us anything.</h3>
                    <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required />
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your company (optional)" type="url" tabindex="4" required />
                    </fieldset>
                    <fieldset>
                    <textarea placeholder="Type your message here...." tabindex="6" required></textarea>
                    </fieldset>
                    <fieldset>
                    <p>
                    <input type="checkbox" name="terms" /> Yes, I am filthy rich.</p>
                    {/* <p><input type="submit" /></p> */}
                    {/* <p>Are you filthy rich?</p> <input type="checkbox" tabindex="5" required /> */}
                    </fieldset>
                    <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
                </div>
            <Footer />
        </>
    )    
}

