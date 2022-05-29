import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import SuccessModal from "./SuccessModal";

const Modal = ({showModal,setShowModal}:{showModal:boolean,setShowModal:React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [inputState,setInputState] = useState({
        image:"",
        firstName:"",
        lastName:"",
        story:"",
        type:"CUSTOMER"
    })
const uploadImage =async (img:any) => {
const data = new FormData()
data.append("file", img)
data.append("upload_preset", "b8ewnvky")
const dat = await fetch("https://api.cloudinary.com/v1_1/fakorede29/upload",{
method:"post",
body: data
})
const res = await dat.json()

const im = res.url
return im
}
    const [successModal,setSuccessModal] = useState(false)
      const handleChange =(value:string | File | null,name:string)=>{
          if(value){
             setInputState({
            ...inputState,
              [name]:value,
              
          })
          }
         
      }
     
      const sendTestimonies = async () =>{
        let img=await uploadImage(inputState.image)
       if(img!==""){
          let name = `${inputState.firstName} ${inputState.lastName}`
        await addDoc(collection(db, "testimonies"), {
            name,
            type:inputState.type,
            location:"Lagos",
            img,
            featured:false,
            testimony:inputState.story,
              createdAt:serverTimestamp()
          });
          setShowModal(false)
          setSuccessModal(true)
       }
         
        }
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[90%] sm:w-[50%] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-semibold">Share your amazing story!</h3>
                  {/* <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button> */}
                </div>
                <div className="relative p-6 flex-auto">
                  <form className=" px-8 pt-6 pb-8 w-full">
                      <div className="mb-7">
                            <label className="block text-labelColor text-sm font-normal mb-2">
                     Upload your picture
                    </label>
                    {/* <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={inputState.image} onChange={(e)=>handleChange(e.target.value,"image")} disabled/> */}
                    <input type="file" onChange= {(e)=> handleChange(e.target.files && e.target.files[0],"image")}></input>
                      </div>
                  <div className="grid grid-cols-2 gap-4 mb-7">
                  <div>
                            <label className="block text-labelColor text-sm font-normal mb-2">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>handleChange(e.target.value,"firstName")}/>
                      </div>
                      <div>
                            <label className="block text-labelColor text-sm font-normal mb-2">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>handleChange(e.target.value,"lastName")}/>
                      </div>
                  </div>
                    <div className="mb-7">
                            <label className="block text-labelColor text-sm font-normal mb-2">
                      Share your Story
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>handleChange(e.target.value,"story")}/>
                      </div>
                    <div className="mb-7 flex justify-between">
                            <label className=" text-labelColor text-sm font-normal mb-2">
                            What did you interact with Vasiti as?
                    </label>
                    <div className="flex">
                    <label className="inline-flex items-center mt-3">
                <input type="radio" className="form-radio h-5 w-5 text-blue-600" checked={inputState.type==="CUSTOMER"} onChange={()=>handleChange("CUSTOMER","type")} /><span className="ml-2 text-gray-700">CUSTOMER</span>
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-600" checked={inputState.type==="VENDOR"} onChange={()=>handleChange("VENDOR","type")} /><span className="ml-2 text-gray-700">VENDOR</span>
            </label>
                    </div>
           
                      </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-primary text-white active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => sendTestimonies()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <SuccessModal showModal={successModal} setShowModal={setSuccessModal}/>
    </>
  );
};

export default Modal;

