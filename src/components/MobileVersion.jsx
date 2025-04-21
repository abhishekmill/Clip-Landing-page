import gsap from "gsap";
import React, { useRef } from "react";

const MobileVersion = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  return (
    <div className=" w-screen h-screen  bg-white  ">
      <img
        ref={img1}
        onClick={() => {
          handleOnClick(img1);
        }}
        className=" img-m-1  duration-500 absolute  h-screen object-cover  z-10 "
        src="img1.jpg"
        alt=""
      />
      <img
        ref={img2}
        onClick={() => {
          handleOnClick(img2);
        }}
        className=" img-m-2  duration-500 absolute  h-screen object-cover z-10  "
        src="img2.jpg"
        alt=""
      />
      <img
        ref={img3}
        onClick={() => {
          handleOnClick(img3);
        }}
        className=" img-m-3  duration-500 absolute  h-screen object-cover  z-10 "
        src="img4.jpg"
        alt=""
      />
    </div>
  );
};

export default MobileVersion;

const handleOnClick = (targetElement) => {
  if (!targetElement?.current) return; // Safety check

  gsap.to(targetElement.current, {
    clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)", // Fixed clipPath syntax

    onStart: () => {
      targetElement.current.style.zIndex = "20"; // zIndex as string
    },

    duration: 0.7,
    ease: "power1.inOut",
  });
};
