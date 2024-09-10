import "./WhoAreWe.css"
import {data} from "./../restApi.json"

const WhoAreWe = ()=>{

    return(
        <section id="whoRwe" className="whoRwe">
            <div className="whoweare1">
             {
                data[0].who_we_are.slice(0,2).map((ele)=>{
                    return <div className="whoRwe1" key={ele.id}>
                        <h2>{ele.number}</h2>
                        <p>{ele.title}</p>
                    </div>
                })
             }
             </div>
             <div className="whoweare1"> 
             <img src="./whoweare.png" alt=""/>
             </div>
             <div className="whoweare1">
             {
                data[0].who_we_are.slice(2).map((ele)=>{
                    return <div className="whoRwe1" key={ele.id}>
                        <h2>{ele.number}</h2>
                        <p>{ele.title}</p>
                    </div>
                })
             }
             </div>

        </section>
    )
  
}

export default WhoAreWe ;