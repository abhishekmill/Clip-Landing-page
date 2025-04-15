import React from "react";

const Slide = () => {
  return (
    <div className="  flex justify-between  w-[100%]  border-2 border-black  ">
      <div className="  image-clip-1  w-screen  hover:z-10  absolute group  duration-500 ">
        <img
          className="    h-screen  group-hover:w-[100%]  w-[70%]    object-cover    duration-500 group-hover:scale-105     "
          src="./img1.jpg"
          alt=""
        />
      </div>
      <div className="  image-clip-2  w-screen  hover:z-10  absolute  group duration-500 ">
        <img
          className="   h-screen  group-hover:w-[100%]  w-[70%]     object-cover object-center   duration-500 group-hover:scale-105     "
          src="./img2.jpg"
          alt=""
        />
      </div>
      <div className="  image-clip-3  w-screen  hover:z-10  absolute  group  duration-500 ">
        <img
          className="   h-screen  group-hover:w-[100%]  w-[100%]     object-cover object-center   duration-500 group-hover:scale-105     "
          src="./img3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide;
