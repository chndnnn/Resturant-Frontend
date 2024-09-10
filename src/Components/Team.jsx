import "./Team.css"
import {data} from "./../restApi.json"
const Team = ()=>{
    return(
        <section id="team" className="team">
            <div className="teamHeader">
                <h1>OUR TEAM</h1>
                <p>Teamwork is the cornerstone of success in any organization or project. When individuals come together with a shared vision and purpose, they can achieve far more than what they could accomplish alone. Each team member brings unique skills, experiences, and perspectives to the table, enriching the collective intelligence and creativity of the group.   </p>
            </div>
            <div className="teamImage">
                {
                    data[0].team.map((ele)=>{
                        return <div className="teamImage1" key={ele.id}>
                        <img src={ele.image} alt="" />
                        <h4>{ele.name}</h4>
                        <p>{ele.designation}</p>
                        </div>
                    })
                }
                
                </div>    
        </section>
    )
}

export default Team ;