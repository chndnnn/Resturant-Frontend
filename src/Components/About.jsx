import "./About.css"
import { FiArrowRightCircle } from "react-icons/fi";
import {Link} from 'react-scroll'

const About = ()=>{
    return <>
    <section id="about">
    <div className="aboutContainer">
        <div className="aboutBox1">
            <div className="aboutBox12">
            <h1>ABOUT US</h1>
            <p>The only thing we are serious about is food</p>
            <p style={{marginTop:40,marginBottom:40}}>A restaurant is more than just a place to eat; it's an experience that tantalizes the senses and brings people together. From the moment you step through the door, you're greeted with the inviting aroma of delicious dishes being prepared with care and passion. The ambiance, whether cozy and intimate or lively and bustling, sets the stage for memorable moments shared with friends, family, or even strangers who become friends over a shared meal. Each plate that arrives at your table is a work of art, crafted by chefs who take pride in their culinary creations. Whether you're savoring a classic favorite or daring to try something new, dining out at a restaurant is a delightful journey for the palate and the soul. It's where stories are told, celebrations are held, and everyday moments are transformed into special memories.</p>
           <Link to='reservation' smooth={true} duration={700}><span className="span1"><p>Reserve now</p><span><FiArrowRightCircle className="span22" /></span></span></Link> 
            </div>
        </div>
        <div className="aboutBox2">
            <img src="/about.png" alt="" />
        </div>
    </div>
    </section>
    </>
}

export default About