import { useEffect, useState } from "react"

import { ITestimony } from "../types"
import Modal from "./CreateModal";

export default function FeaturedTestimony({type,testimonies}:{type:string,testimonies:ITestimony[]}) {
    const [featuredTestimony,setFeaturedTestimony] = useState<ITestimony | undefined>()
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        if(testimonies){
            console.log(testimonies)
           setFeaturedTestimony(testimonies.filter((item,index)=>item.featured && item.type===type)[0])  
        }
       
    },[testimonies,type])
    return (
        <div className={`${type==="CUSTOMER" ?"bg-[#222222]" :"bg-[#FFF8F5]"}`}>
        {featuredTestimony && <div className={`pt-[110px] w-[80%] mx-auto sm:flex  sm:justify-between py-[50px] ${type ==="CUSTOMER" ? "sm:flex-row-reverse" : ""}`}>
        <div className={`sm:w-[60%] text-white  ${type ==="CUSTOMER" ? "sm:ml-[100px]" : ""}`}>
    <h2 className={`text-h2 sm:text-h2-sm sm:mt-[60px] font-bold ${type==="CUSTOMER" ?"text-white" :"text-black"}`}>
    {featuredTestimony.name}'s Experience
    </h2>
    <div className={`w-[95px] py-1 text-center rounded-sm border-[1px]  text-button my-6 ${type==="CUSTOMER" ?"text-white border-white" :"text-primary border-primary"}`}>
        {featuredTestimony.type}
    </div>
    <p className={`text-[16px] sm:text-lg mt-3 ${type==="CUSTOMER" ? "text-white": "text-[#242120]"}`}>{featuredTestimony.testimony}</p>
    <div className="text-center sm:text-left my-[80px] sm:mb-0">
    <p className={`text-[16px] sm:text-lg mt-3 cursor-pointer ${type ==="CUSTOMER" ? "text-white" : "text-primary"}`} onClick={()=>setShowModal(!showModal)}>SHARE YOUR OWN STORY!</p>
    <img src="/marker.png" alt="" />
    </div>
    </div>
    <div className={`${type ==="CUSTOMER" ? "" : "sm:ml-[100px]"}`}>
       
        <img src={`/${featuredTestimony.img}`} />
    </div>
    
</div>}
<Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
    
}