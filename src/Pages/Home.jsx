import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Quality from "../Components/Quality";
import Menu from "../Components/Menu";
import WhoAreWe from "../Components/WhoAreWe";
import Team from "../Components/Team";
import Reservation from "../Components/Reservation";


const Home = ()=>{
   return <>
   <NavBar></NavBar>
   <HeroSection></HeroSection>
   <About></About>
   <Quality></Quality>
   <Menu></Menu>
   <WhoAreWe></WhoAreWe>
   <Team></Team>
   <Reservation></Reservation>
   </>
};

export default Home