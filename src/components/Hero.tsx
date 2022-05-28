export default function Hero(){
    return(
        <div className="w-[80%] mx-auto sm:flex sm:justify-between pt-[50px]">
            <div className="sm:w-[80%]">
            <h1 className="text-h1 sm:text-h1-sm sm:mt-[60px] font-bold">
            Amazing Experiences from Our Wonderful Customers
            </h1>
            <p className="text-lg text-[#494949] mt-3">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            
            </div>
            <div className="mt-4 sm:mt-0">
                <img src="/hero_img.png" />
            </div>
        </div>
    )
}