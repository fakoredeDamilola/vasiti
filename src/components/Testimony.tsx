import { ITestimony } from "../types";

export default function Testimony({testimony}: {testimony:ITestimony}){
    return (
        <div>
            <img src={testimony.img} alt={testimony.img} className="rounded-[50%]" />
            <div className="my-5">
                <h3 className="text-h3 font-semibold">{testimony.name}</h3>
            <div className="flex mt-2">
                <p className="text-[15px] ">{testimony.location}</p> <button className={`text-button ${testimony.type ==="CUSTOMER" ? "text-[#0D019A] bg-[#EEF8FF]":"text-[#049A01] bg-[#F0FFEE]"}  w-[95px] py-1 text-center ml-6`}>{testimony.type}</button>
            </div>
            </div>
            
            <div className="my-4">{testimony.testimony}</div>
        </div>
    )
}