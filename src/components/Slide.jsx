import React, { useRef } from "react";
import { gsap } from "gsap";

const Slide = () => {
  const img1Ref = useRef(null);

  const handleOnclick = (e) => {
    animateWithGSAP(img1Ref.current, "clipPath", "inset(0% 0% 0% 0%)");
  };

  return (
    <div className="  flex justify-between  w-[100%]  border-2 border-black  overflow-hidden relative  ">
      <div
        onClick={handleOnclick}
        ref={img1Ref}
        style={{
          clipPath: "inset(0% 70% 0% 0%)",
        }}
        className="    w-screen  hover:z-10  absolute group  duration-500 "
      >
        <img
          className="    h-screen    w-[70%] -translate-x-60      object-cover    duration-500     "
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
      <div className="  image-clip-3  w-screen  hover:z-10  object-left absolute  group  duration-500 ">
        <img
          className="   h-screen  group-hover:w-[100%]  w-[100%]     object-cover object-center   duration-500 group-hover:scale-105     "
          src="./img3.jpg"
          alt=""
        />
      </div>
      <div className="  image-clip-4  w-screen  hover:z-10  absolute  group  duration-500 ">
        <img
          className="   h-screen  group-hover:w-[100%]  w-[100%]     object-cover object-center   duration-500 group-hover:scale-105     "
          src="./img4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide;

const animateWithGSAP = (targetElement, targetProperty, newValue) => {
  gsap.to(targetElement, {
    [targetProperty]: newValue,
    duration: 0.5,
    onComplete: () => {
      targetElement.style.zindex = 10;
      targetElement.children[0].style.transform = "scale(1.05)";
      targetElement.children[0].style.width = "100%";
      targetElement.children[0].style.transform = "translateX(0)";
    },
    ease: "power2.inOut",
  });
};
