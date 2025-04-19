import React from "react";

const CircleImg = ({ ref, imgPath, className }) => {
  return (
    <div
      ref={ref}
      className={` ${className}  absolute z-40  scale-0   top-[32%]  `}
    >
      <div className="absolute bottom-0  right-0  flex justify-center h-14 w-14 bg-white rounded-full  ">
        <img src="./arrow1.png" alt="" />
      </div>
      <div className="overflow-hidden rounded-full  h-60 w-60 bg-red-700  ">
        <img className="   h-60 object-cover   " src={imgPath} alt="" />
      </div>
    </div>
  );
};

export default CircleImg;
