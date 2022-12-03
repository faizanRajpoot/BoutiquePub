import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function OnlymenCollection() {

    const [men, setMen] = useState();

    useEffect(() => {
        axios
            .get("http://127.0.0.1:4000/headerMen")
            .then((res) => setMen(res?.data?.result));
    }, [])

    const goheader = useHistory();

    return (
        <>
            <div className="bg-gray-100">
                <div className="flex justify-center text-4xl pt-20 py-10 font-semibold"><h1>Related Products</h1></div>
                <div className="w-full flex justify-between gap-y-16 px-14 flex-wrap pb-20">
                    {(men?.map((v) => {
                        return (

                            <div className="shadow-lg px-3 w-[280px]">
                                <img src={v.img} alt="img" className="w-full h-64 px-5 " />
                                <p className="text-xs mt-2">{v.brand}</p>
                                <p className="text-sm mt-3">
                                    {v.name}</p>
                                <p className=" text-sm mt-3">{v.price}</p>
                                <button onClick={()=> goheader.push(`/HeaderPopUp/${v.id}`)} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
                            </div>
                        )

                    }))}

                </div>
            </div>
        </>
    )
}
