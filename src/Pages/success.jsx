import { useContext, useEffect, useState } from "react";
import { BiBorderAll, BiFullscreen } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import HttpContext from "../Context/HttpContext";

const Success = ()=>{

    let ctx = useContext(HttpContext)

    const [count,setCount]=useState(10)
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(ctx.successPage)
    if(ctx.successPage){
    const timeout = setInterval(()=>{
       setCount((pre)=>{
        if(pre===1){
            clearInterval(timeout)
            navigate('/')
        }
        return pre-1
       })
    },1000)
    return ()=>clearInterval (timeout)
   }else{
    navigate('/')
   }
    },[]);

    function onHomeButtonClick(){
        navigate('/')
    }

    return <div style={{height:'100vh',width:'full',display:'flex',justifyContent:'center'}}>
        <div style={{height:'500px',width:'700px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <img style={{height:'300px',width:'600px'}} src="/sandwich.png" alt="" />
        <h1>Your reservation is successfull</h1>
        <h3 style={{display:'block'}}>You will be redirected to Home Page in </h3>
        <h1 style={{color:'red'}}>{count}</h1> seconds
        <button onClick={onHomeButtonClick} style={{backgroundColor:'black',color:'white',marginTop:10,height:30,width:150,borderRadius:7,cursor:'pointer'}}><HiOutlineArrowNarrowLeft></HiOutlineArrowNarrowLeft><span>{'  Home Page'}</span></button>
        </div>
        

    </div>
 };
 
 export default Success