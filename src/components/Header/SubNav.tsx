export default function SubNav(){
    const subList =["MARKETPLACE","WHOLESALE CENTER","SELLER CENTER","SERVICES","INTERNSHIPS","EVENTS"]
    return (
        <div className="hidden sm:block py-2 border-b-[1px] border-t-[1px] border-opacity-10 shadow-[0_1px_4px_4px_rgba(0,0,0,0.04)]">
            <ul className="w-[60%] mx-auto flex justify-between">
            {subList.map((item,index)=>{
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })

            }
        </ul>
        </div>
        
    )
}