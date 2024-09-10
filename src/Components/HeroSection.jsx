import "./HeroSection.css"

const HeroSection = ()=>{
    return <>
    <section id="heroSection" className="heroSection">
    <div className="HeroContainer">
    <div className="Herobox1 Herobox">
        <p style={{marginLeft:'55%',fontSize:'60px'}}>Delicious</p>
        <img src='/hero1.png' alt="" />
    </div>
    <div className="Herobox2 Herobox">
    <p style={{fontSize:'50px', marginTop:'110px' ,marginLeft:'50px'}}>Food</p>
    <img src="/logo.png" alt="" />
    </div>
    
    <div className="Herobox3 Herobox" >
    <img src="/hero2.png" alt="" />
    <p style={{fontSize:'60px'}}>Dishes</p>
    </div>
    </div>
    </section>
    </>
 };
 
 export default HeroSection
 