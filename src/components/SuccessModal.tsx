
import React from "react";

const SuccessModal = ({showModal,setShowModal}:{showModal:boolean,setShowModal:React.Dispatch<React.SetStateAction<boolean>>}) => {

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[90%] sm:w-[50%] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="relative p-6 py-[70px] flex flex-col justify-center align-middle w-[70%] mx-auto">
                    <div className="flex justify-center"><div className="text-[82px] bg-[#FFF8F5] w-[155px] h-[155px] rounded-[50%] flex justify-center align-middle">
                  🎉
                  </div>

                    </div>
                  
                  <h3 className="text-3xl font-semibold text-center">Thank you for sharing your story!</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci alias distinctio omnis placeat quia odit eligendi, </p>
                </div>
                <div className="flex items-center justify-center py-6 px-[30px] rounded-b">
                  <button
                    className="bg-primary text-white active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[253px] h-[70px]"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SuccessModal;

