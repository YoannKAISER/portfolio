import React from "react";
import Header from "../Layout/Header";
import ContactForm from "../Components/ContactForm";
import LogoLinkedin from "../Images/Logo_Linkedin.webp"
import LogoFacebook from "../Images/Logo_Facebook.webp"
import LogoInstagram from "../Images/Logo_Instagram.webp"
import LogoThreads from "../Images/Logo_Threads.webp"
import LogoX from "../Images/Logo_X.svg"
import Footer from "../Layout/Footer";

function Contact() {
    return (
        <>
            <Header />
            <section style={{backgroundColor:"#4d4d4d"}}>
                <h2 style={{color:"white"}}>Contactez-moi</h2>
                <div style={{width:"100%", display:"flex", flexDirection:"row",justifyContent:"space-evenly" ,gap:"50px"}}>
                    <ContactForm />
                    <div>
                        <h3>En me retrouvant sur mes réseaux-sociaux</h3>
                        <div style={{display:"flex", gap:"30px", marginTop:"3em"}}>
                            <a href="https://www.linkedin.com/in/yoannkaiser/" className="networksLink"><img src={LogoLinkedin} alt="Linkedin" className="logos" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61558430682110" className="networksLink"><img src={LogoFacebook} alt="Facebook" className="logos" /></a>
                            <a href="https://www.instagram.com/kaiseryoann/" className="networksLink"><img src={LogoInstagram} alt="Instagram" className="logos" /></a>
                            <a href="https://www.threads.net/@kaiseryoann" className="networksLink"><img src={LogoThreads} alt="Threads" className="logos" /></a>
                            <a href="https://twitter.com/YoannKaiser" className="networksLink"><img src={LogoX} alt="X" className="logos" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;