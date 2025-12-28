import creame from "@/assets/creame.png"
function Featured(){
    return(
        <div className="mt-20">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Featured Product</h1>
                <p className="text-blue-500">Sea all...</p>
            </div>
            <div>
                <div className="relative">
                    <img src={creame} alt="" className="w-73 h-80" />
                    <p>Night Serum for Sensitive Skin</p>
                    <div className="bg-[#44913D] rounded-2xl absolute top-3 left-3 py-1 px-2 text-white">
                        Best Selling
                    </div>
                    <div></div>
                </div>


            </div>
        </div>
    )
}

export default Featured