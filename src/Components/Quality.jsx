import "./Quality.css"
import {data} from "./../restApi.json"

const Quality = ()=>{
    return (<>
    <div className="qualityContainer">
        {
            data[0].ourQualities.map((ele)=>{
                return (<div className="qaContainer1" key={ele.id}>
                   <img src={ele.image} alt="" />
                   <h3>{ele.title}</h3>
                   <p className="qaPara">{ele.description}</p>
                </div>)
            })
        }

    </div>
    </>
    )
}

export default Quality