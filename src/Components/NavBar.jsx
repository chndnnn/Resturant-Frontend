import { useState } from "react";
import "./NavBar.css"
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ()=>{

   let [ham,setHam]=useState(false);

   function onHamClcik(){
      setHam((state)=>!ham);
   }

   function onLiClick(){
        setHam(false); 
        console.log('hii')
   }

    return <>
    <div className={ham?'navContainer':'navContainer1'}>
     <h3 style={{marginLeft:10}}>Chan-Foods</h3>
     <div className='navList'>
        <li><Link to="heroSection"  spy={true}
                smooth={true}
                duration={500}
                onClick={onLiClick}>Home</Link></li>
        <li><Link to="about"  spy={true}
                smooth={true}
                duration={500}
                onClick={onLiClick}>About</Link></li>
         <li><Link to="menu"  spy={true}
                smooth={true}
                duration={500}
                onClick={onLiClick}>Menu</Link></li>
        <li><Link to="team"  spy={true}
                smooth={true}
                duration={500}
                onClick={onLiClick}>Team</Link></li>
        <li><Link to="reservation"  spy={true}
                smooth={true}
                duration={500}
                onClick={onLiClick}>Reservation</Link></li>
       
        
     </div>
     <div className="navHam">
       <span onClick={onHamClcik}><GiHamburgerMenu /></span> 
    </div>
    </div>
    </>
 };
 
 export default NavBar