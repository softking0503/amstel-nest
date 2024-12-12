import React from "react";
import { SlHeart } from "react-icons/sl";
import { SlShareAlt } from "react-icons/sl";

import image_1 from "../assets/images/1.avif"
import image_2 from "../assets/images/2.avif"
import image_3 from "../assets/images/3.avif"
import image_4 from "../assets/images/4.avif"
import image_5 from "../assets/images/5.avif"

const Gallery = () => {
  return (
    <section className="mt-6 w-full">
      <div className="w-full h-20 flex justify-between items-center">
        <div className="w-[80%]">
          <h1 className="text-3xl font-semibold">Amstel Nest - an urban retreat for two</h1>
        </div>
        <div className="w-[15%] flex justify-between items-center">
          <div className="flex justify-evenly items-center w-[35%] decoration-black hover:font-semibold cursor-pointer">
            <SlShareAlt />
            <h1 className="underline font-[14px] font-sans">Share</h1>
          </div>
          <div className="flex justify-evenly items-center w-[35%] decoration-black hover:font-semibold cursor-pointer">
            <SlHeart />
            <h1 className="underline font-[14px] font-sans">Save</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img
            src={image_1}
            alt="Room image"
            className="rounded-md object-cover h-full"
          />
        </div>
        <div className="flex">
          <div>
            <img
              src={image_2}
              alt="Room image"
              className="rounded-md object-cover h-[50%]"
            />
            <img
              src={image_3}
              alt="Room image"
              className="rounded-md object-cover h-[50%]"
            />
          </div>
          <div>
            <img
              src={image_4}
              alt="Room image"
              className="rounded-md object-cover h-[50%]"
            />
            <img
              src={image_5}
              alt="Room image"
              className="rounded-md object-cover h-[50%] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;