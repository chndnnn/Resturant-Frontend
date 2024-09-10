import "./Menu.css"
import {data} from "./../restApi.json"

const Menu = ()=>{

    return (     <section id="menu" className="menuSection">
       
        <div className="menuHeader">
            <h1 style={{fontSize:40}}>Top Ordered Dishes</h1>
            <p style={{marginBottom:40}}>These dishes have earned their esteemed status through a blend of exceptional flavors, impeccable presentation, and consistent popularity among diners. Whether it's a classic comfort food that warms the soul or an innovative culinary creation that tantalizes the taste buds, top order dishes hold a special place in the hearts of food enthusiasts.</p>
        </div>
        <div className="menuList">
            {
                data[0].dishes.map((ele)=>{
                    return(
                    <div className="eachMenu" key={ele.id}>
                        <img src={ele.image} alt=""/>
                        <h5>{ele.title}</h5>
                    </div>
                    )
                })
            }
        </div>
      
    </section>
  
        )
}

export default Menu ;