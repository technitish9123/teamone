import React from "react";
import Nav from "../Components/Nav";
import WalletConnect from "../Components/WalletConnect";

const home = () => {
  return (
    <div className="main h-full w-full ">
      <Nav />

      <div className=" md:mt-32 mt-6  font-sans ">
        <div className="  grid md:grid-cols-3 text-white  grid-cols-1 ">
          <div className=" flex flex-col justify-center align-center md:px-24 px-8 md:col-span-2">
            <div className="uppercase text-5xl md:text-7xl text-white font-bold  md:my-8  ">
              <div className="text-white">
                play to <span className="text-red-800"> </span>
              </div>
            </div>
            <div className="text-white md:text-2xl text-xl md:pr-16  pt-4 text-justify "></div>
            <div className="py-4 mt-4 grid grid-cols-1 text-3xl  ">
              <div className="justify-self-start text-xl  "></div>
            </div>
          </div>
          <div className=" grid  justify-center align-center place-content-center order-first md:order-last md:my-auto my-8   md:mr-3  ">
            <div className="  md:block  justify-self-start ">
              {" "}
              {/* <img
                src={art}
                className="md:w-full w-full  p-3"
                alt="logo"
              />{" "} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
