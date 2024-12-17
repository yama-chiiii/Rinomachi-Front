import Link from "next/link";


export default function Line(){
    return(
        <>
            <div className="w-full lg:w-1/2 min-h-screen flex flex-col mx-auto font-mPlus font-semibold text-2xl">
                <div className="w-full h-full bg-brown-light text-red-dark">
                    <div className="bg-white rounded mt-120 mb-20 mx-30">
                        <div className="flex border-b border-dashed border-brown-dark w-205 pt-20 ml-20">
                            <div className="font-mPlus text-brown-dark">路線・駅から探す</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}