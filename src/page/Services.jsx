import React from "react";
import {ChevronsLeftRight} from "lucide-react"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <div className="mt-16 mb-20">
      <div
        className="relative mx-auto w-[95%] h-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-700
                   bg-[url('https://etec-elearning.vercel.app/assets/3-COnmcKFG.png')]
                   bg-cover bg-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-gray-200 max-w-2xl text-2xl">
            Comprehensive solutions tailored to help your business thrive in the
            digital age
          </p>
        </div>
      </div>
      {/* =========================== */}
      <div className=" w-[90%] mt-20 mx-auto shadow-2xl  " >
       
        <ServiceCard />
        <div className="bg-blue-700 w-[90%] mx-auto rounded-2xl p-2">
  {/* បន្ថែម flex flex-col items-center នៅទីនេះ */}
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col items-center text-center">
    
    <h1 className="text-5xl font-bold text-white p-2 mt-10">
      Ready to Get Started?
    </h1>
    
    <p className="text-white text-2xl mt-10 mb-10">
      Let's discuss how we can help transform your business
    </p>
    
    {/* ប៊ូតុងនឹងរត់មកចំកណ្ដាលដោយស្វ័យប្រវត្តិ */}
    <button className="cursor-pointer hover:scale-95 transition-all duration-300 bg-white text-indigo-600 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg hover:bg-gray-100 shadow-lg">
      Contact Us Today
    </button>
    
  </div>
</div>
<div className="mt-10 h-10"></div>

      </div>
      
    </div>
  );
};

export default Services;
