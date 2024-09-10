import React, { createContext } from "react";
import axios from "axios";

const HttpContext = createContext({PostData:undefined,getBooking:undefined,successPage:undefined});

export function HttpContextProvider(props) {

     function PostData(url,data){
        return axios.post(url,data)
     }

     function getBooking (url,data){
       return axios.post(url,data)
     }
    return (
        <HttpContext.Provider value={{PostData,getBooking,successPage:false}}>
            {props.children}
        </HttpContext.Provider>
    );
}

export default HttpContext;