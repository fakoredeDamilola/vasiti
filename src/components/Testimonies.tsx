import { useEffect, useState } from "react";

import { ITestimony } from "../types";
import Testimony from "./Testimony";

export default function Testimonies({testimonies,start,stop}:{start:number,stop?:number,testimonies:ITestimony[]}){
    const [testimonesData,setTestimonesData] = useState<ITestimony[]>([])
    useEffect(()=>{

        setTestimonesData(testimonies.filter((item,index)=>!item.featured))
        
    },[])
    return (
        <div className="grid grid-cols-3 gap-20 w-[80%] py-[70px] mx-auto">
            {
                testimonies.slice(start,stop).map((item,index)=>{
                    return <Testimony key={item.id} testimony={item}/>
                })
            }
        </div>
    )
}