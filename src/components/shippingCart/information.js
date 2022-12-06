import React from "react";
import Mens1 from "../../img/mens/mens1.jpg";

function information() {
  return (
    <div className="flex md:flex md:flex-col">
      <div className="w-7/12 h-full py-10 md:mt-80 md:w-full">
        <form className="w-full h-full pl-20 px-12 py-10 sm:px-8 md:px-10">
          <h1 className="text-3xl font-medium ">The Butique Asia</h1>
          <div className="flex w-5/12 justify-between items-center text-sm mt-2 lg:w-9/12 lgg:w-full md:w-7/12 sm:w-8/12 xs:w-9/12 xss:w-11/12">
            <p className="text-blue-600">Cart </p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="text-blue-600">Information</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="">Shipping</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="">Payment</p>
          </div>

          <div className="w-full h-32 rounded-md mt-10 border-[1px] border-gray-300 px-6">
            <div className="h-12 w-full  border-b-[1px] border-gray-300 flex justify-between items-center">
              <div className="flex text-sm  items-center h-full">
                <p className="">Contact</p>
                <p className="ml-10">talhaanwar629@gmail.com</p>
              </div>
              <button className="text-blue-600 text-sm">Change</button>
            </div>
            <div className="w-full flex  justify-between mt-5">
              <div className="flex text-sm  h-full">
                <p className="">Contact</p>
                <p className=" ml-10 w-[75%]">Themes-World, 3615 Knights Hollow Court, Katy 77494, Pakistan</p>
              </div>
              <button className="text-blue-600 text-sm ">Change</button>
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-semibold text-xl mt-10">Shipping Method</h1>

            <div className="w-full h-14 border-[1px] border-gray-300 mt-5 rounded-md flex justify-between items-center px-5">
                <div className="flex">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <p className="text-sm ml-5  ">Standard Shipping</p>
                </div>
                <p className="">Rs 700.00</p>
            </div>
          </div>

          <div className="w-full  h-14 mt-7  flex justify-between">
            <div className="flex h-full items-center ">
              <i class="fa-solid fa-chevron-left"></i>
              <p className="text-blue-600 ml-2">Return To Information</p>
            </div>
            <button className="w-1/4 h-full bg-blue-600 rounded-md flex justify-center items-center text-xs text-white lg:w-1/3 lgg:w-[40%] md:w-40 ">
              Continue To Payment{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="w-5/12 bg-[#F6F6F6] md:absolute md:w-full py-10 border-l-[1px] border-gray-300 px-10">
        <div className="w-full h-36   py-10 border-b-[1px] border-gray-300 flex">
          <img
            src={Mens1}
            alt=""
            className="w-20 h-20 rounded-lg border-[1px] border-gray-300"
          />
          <div className="mt-2 ml-5">
            <h1 className=" text-sm">Tods Gommino Leather Loafers - TB0092</h1>
            <div className="flex w-full justify-between text-sm ">
              <p className="">41</p>
              <p className="">Rs.95,960.00</p>
            </div>
          </div>
        </div>
        <div className=" w-full  border-b-[1px] border-gray-300 h-20 mt-5">
          <div className="flex justify-between text-sm">
            <p className="">SubTotal</p>
            <p className="">Rs 95,960.00</p>
          </div>
          <div className="flex justify-between text-sm mt-5">
            <p className="">Shipping</p>
            <p className="">Rs 700.00</p>
          </div>
        </div>

        <div className=" w-full  mt-5">
          <div className="flex justify-between text-sm mt-5">
            <p className="">Total</p>
            <p className="text-xs">
              PKR <span className="font-bold text-xl ml-2">Rs 96,660.00</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default information;
