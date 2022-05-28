import { useState } from "react"

export default function MainHeader(){

    const [navOpened, setNavOpened] = useState(false)
    return (
        <header className="w-[80%] mx-auto pt-2 px-2">
            <div>
                <nav className="sm:flex sm:justify-between">
                    <div className="flex justify-between">
                        <div>
                            <img src="/logo.svg" alt="logo" />
                        </div>
                        <div className="menuToggle sm:hidden">
                          
                           {navOpened ? <div className="cursor-pointer" onClick={()=>setNavOpened(!navOpened)}><img src="/close-square.svg" alt="close-nav"/></div> :  <div className="cursor-pointer"
                           onClick={()=>setNavOpened(!navOpened)}
                           >
                               {[1,2,3].map((item,index)=>{
                                   return (
                                       <div className="bg-black 
                                       w-10 h-1 max-h-1 my-1 rounded-sm" key={index}></div>
                                   )
                               })}
                           </div> }
                        </div>
                    </div>
                    <div>
                        <ul className={`
                        sm:flex sm:justify-between 
                        fixed  w-[100%] h-[100%]
                        pt-3 pb-5 overflow-y-scroll sm:static sm:w-auto sm:overflow-y-hidden ${navOpened ? "right-[0%]" : "right-[100%]" } transition-all
                        `}>
                           {["ABOUT US","STORIES","CONTACT","LOG IN"].map((item,index)=>{
                               return (
                            <li className={`sm:mx-1 border-b-[1px] border-primary sm:border-0 my-3 pl-3 sm:pl-0 pb-2 sm:pb-0 sm:my-0 hover:text-primary ${index ===0 ?"text-primary" : ""}` } key={index}>
                                       <a href={`/${item.toLowerCase().split(" ").join("-")}`}>
                                          {item} 
                                       </a>
                                       
                                   </li>
                               )
                           })}
                           <li>
                              <button className="bg-primary w-[84px] h-[32px] rounded-sm text-white hidden sm:inline-block mx-1 -mt-3">
                            SIGN UP
                        </button> 
                           </li>
                           
                        </ul>
                        
                    </div>
                </nav>
                
            </div>
        </header>
    )
}