import React from "react";
import Mens1 from "../../img/mens/mens1.jpg";
import { useHistory } from "react-router-dom";

function ShippingCart() {
  let SignUpHistory = useHistory();
  return (
    <div className="flex md:flex md:flex-col">
      <div className="w-7/12 h-full py-10 md:mt-80 md:w-full">
        <form className="w-full h-full pl-20 px-12 py-10 sm:px-8 md:px-10">
          <h1 className="text-3xl font-medium ">The Butique Asia</h1>
          <div className="flex w-5/12 justify-between items-center text-sm mt-2 lg:w-9/12 lgg:w-full md:w-7/12 sm:w-8/12 xs:w-9/12 xss:w-11/12">
            <p className="text-blue-600">Cart </p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="">Information</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="">Shipping</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="">Payment</p>
          </div>
          <div className="flex w-full justify-between mt-5  h-8 items-center xs:flex xs:flex-col xs:items-start ">
            <h1 className="font-semibold text-xl xs:text-lg">
              Contact Information
            </h1>
            <div className="flex text-sm sm:text-xs xs:text-[10px]">
              <p className="">Already have an account?</p>
              <p className="text-blue-600 ml-1">Login</p>
            </div>
          </div>
          <input
            type="text"
            className="w-full h-12 px-2 outline-none text-gray-600 border-[1px] border-gray-300 mt-3 rounded-md text-sm"
            placeholder="Email or mobile phone number"
          />
          <div className="flex mt-5  w-1/2 items-center h-7 sm:w-full">
            <input type="checkbox" className="h-5 w-5 rounded-lg" />
            <p className="ml-3 text-sm tracking-wide md:text-xs">
              Email me with news and offers
            </p>
          </div>
          <div className="mt-10">
            <h1 className=" text-xl font-medium">Shipping Address</h1>
            <select className="w-full h-12 mt-3 border-[1px] border-gray-300 px-2 outline-none rounded-md">
              <option>Pakistan</option>
              <option>United State</option>
              <option>India</option>
              <option>Dubai</option>
            </select>
            <div className="flex justify-between w-full mt-3 md:flex md:flex-col">
              <input
                type="text"
                className="w-[49%] h-12 border-gray-300 border-[1px] rounded-md text-sm px-2 md:w-full"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-[49%] h-12 border-gray-300 border-[1px] rounded-md text-sm px-2 md:w-full md:mt-3"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="w-full h-12 mt-3 text-sm px-2 border-gray-300 border-[1px] rounded-md"
              placeholder="Company (Optional)"
            />
            <input
              type="text"
              className="w-full h-12 mt-3 text-sm px-2 border-gray-300 border-[1px] rounded-md"
              placeholder="Address"
            />
            <input
              type="text"
              className="w-full h-12 mt-3 text-sm px-2 border-gray-300 border-[1px] rounded-md"
              placeholder="Apartment, Suite, etc. (Optional)"
            />
            <div className="flex justify-between w-full mt-3 md:flex md:flex-col">
              <input
                type="text"
                className="w-[49%] h-12 border-gray-300 border-[1px] rounded-md text-sm px-2 md:w-full"
                placeholder="City"
              />
              <input
                type="text"
                className="w-[49%] h-12 border-gray-300 border-[1px] rounded-md text-sm px-2 md:w-full md:mt-3"
                placeholder="Postal Code"
              />
            </div>

            <input
              type="text"
              className="w-full h-12 mt-3 text-sm px-2 border-gray-300 border-[1px] rounded-md"
              placeholder="Phone"
            />

            <div className="flex mt-2  w-1/2 items-center h-7 sm:w-full">
              <input type="checkbox" className="h-5 w-5 rounded-lg" />
              <p className="ml-3 text-sm tracking-wide md:text-xs">
                Save this information for next time
              </p>
            </div>
            <div className="w-full  h-14 mt-3 flex justify-between">
              <div className="flex h-full items-center ">
                <i class="fa-solid fa-chevron-left"></i>
                <p className="text-blue-600 ml-2">Return To Cart</p>
              </div>
              <button
                onClick={() => SignUpHistory.push("/information")}
                className="w-1/4 h-full bg-blue-600 rounded-md flex justify-center items-center text-xs text-white lg:w-1/3 lgg:w-[40%] md:w-40 "
              >
                Continue To Shipping{" "}
              </button>
            </div>
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

export default ShippingCart;
