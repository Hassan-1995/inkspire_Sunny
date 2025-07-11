import Image from "next/image";
import Link from "next/link";
import React from "react";

const HersoSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-500 via-orange-200 to-emerald-100 w-full min-h-screen py-10 md:py-20 lg:py-32 overflow-hidden">
      {/*Floating Element*/}
      <div className="absolute top-20 left-10">
        {/* <FaCircle className="text-9xl text-orange-300/50 animate-pulse " /> */}
      </div>
      <div className="absolute bottom-20 right-10">
        {/* <FaCircle className="text-7xl text-emerald-400/20 animate-pulse delay-1000" /> */}
      </div>
      <div className="absolute top-1/2 left-1/4">
        {/* <FaCircle className="text-5xl text-purple-400/20 animate-pulse delay-500" /> */}
      </div>

      <div className="hidden lg:block absolute h-100 w-100 right-1">
        <Image
          src="/mascots/mascot_paintBrush.png"
          alt="Inkspire Mascot"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative mb-5 flex min-w-full justify-center items-center lg:hidden h-52 w-52 md:h-72 md:w-72 ">
        <Image
          src="/mascots/mascot_thumbsUp.png"
          alt="Inkspire Mascot"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="px-5">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bring Your
            <span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Ideas{" "}
            </span>
            to Life
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
            Upload your custom designs to print on high-quality products. Turn
            your creativity into
            <span className="font-semibold bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Art
            </span>
          </p>
        </div>

        <div className="relative flex flex-col sm:flex-row justify-center">
          <div className="md:flex items-center md:space-x-4 space-y-4 md:space-y-0 px-5">
            <Link
              href={"/"}
              className="flex items-center justify-center text-white font-semibold bg-purple-600 border border-purple-600 rounded-xl hover:bg-purple-700 transition-colors 
                  py-3 px-6"
            >
              Start Designing
              {/* <FaArrowRight className="ml-2 w-5 h-5" /> */}
            </Link>
            <Link
              href={"/"}
              className="flex justify-center text-zinc-600 font-semibold bg-white border rounded-xl hover:bg-stone-100 transition-colors 
                  py-3 px-6"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HersoSection;
