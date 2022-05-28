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
    const [successModal,setSuccessModal] = useState(false)
      const handleChange =(value:string,name:string)=>{
          console.log({name,value})
          setInputState({
            ...inputState,
              [name]:value,
              
          })
      }
     
      const sendTestimonies = async () =>{
          let name = `${inputState.firstName} ${inputState.lastName}`
        await addDoc(collection(db, "testimonies"), {
            name,
            type:inputState.type,
            location:"Lagos",
            img:"Joseph.png",
            featured:false,
            testimony:inputState.story,
                createdAt:serverTimestamp()
          });
          setShowModal(false)
          setSuccessModal(true)
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
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={inputState.image} onChange={(e)=>handleChange(e.target.value,"image")} disabled/>
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
                             <div className="flex items-center mr-4 mb-4">
    <input id="radio1" type="radio" name="radio" className="hidden" />
    <label htmlFor="radio1" className="flex items-center cursor-pointer text-labelColor">
     <span className="w-4 h-4 inline-block mr-1 rounded-full border border-primary"></span>
     Customer</label>
   </div>
                    <div className="flex items-center mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" className="hidden" />
    <label htmlFor="radio2" className="flex items-center cursor-pointer text-labelColor">
     <span className="w-4 h-4 inline-block mr-1 rounded-full border border-primary"></span>
     Vendor</label>
   </div> 
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

