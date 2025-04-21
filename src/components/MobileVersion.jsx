import gsap from "gsap";
import React, { useRef, useState } from "react";
import AnimatedText from "./AnimatedText";

const MobileVersion = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  const [selectedFrame, setSelectedFrame] = useState(null);

  const handleCloseSection = () => {
    if (selectedFrame === img1) {
      closeOnClick(img1, "polygon(100% 0, 100% 13%, 0 45%, 0 0)");
      setSelectedFrame(null);
    }
    if (selectedFrame === img2) {
      closeOnClick(img2, "polygon(100% 10%, 100% 51%, 0 85%, 0 45%)");
      setSelectedFrame(null);
    }
    if (selectedFrame === img3) {
      closeOnClick(img3, "polygon(100% 51%, 100% 100%, 0 100%, 0 85%)");
      setSelectedFrame(null);
    }
  };

  return (
    <div className=" w-screen h-screen  bg-white  ">
      <div className=" absolute z-30  top-[30%] left-[20%]   pointer-events-none   ">
        <AnimatedText
          delay={0.5}
          children={"The  "}
          classname={` ${
            selectedFrame === null
              ? "text-black font-bold"
              : "text-white font-normal"
          }   text-2xl  mix-blend-difference duration-500  tracking-wider  capitalize  `}
        />
        <AnimatedText
          delay={0.5}
          children={"Responsiveness  "}
          classname={` ${
            selectedFrame === null
              ? "text-black font-normal"
              : "text-white font-bold"
          }   text-2xl  mix-blend-difference duration-700  tracking-wider  capitalize  `}
        />
      </div>

      <div className="absolute z-30 bottom-[20%] left-[30%]">
        <AnimatedText
          delay={0.5}
          children={
            " ensures websites adapt to any device for optimal viewing  and media queries  "
          }
          classname={` ${
            selectedFrame === null ? "text-white " : "text-white "
          }   text-md  mix-blend-difference duration-500   pl-2   `}
        />
      </div>

      <div
        className={` ${
          selectedFrame === null ? "-left-24" : "left-5"
        }   absolute top-5  duration-700 h-fit z-50 flex  w-40  justify-between `}
      >
        <div
          onClick={handleCloseSection}
          className="  w-12 h-7 group  border- border  rounded-3xl   "
        >
          <img
            src="./arrow1.png"
            className="rotate-[136deg] w-7  translate-x-2  duration-200  "
            alt=""
          />
        </div>

        <div
          onClick={() => {
            window.open("https://github.com/abhishekmill", "_blank");
          }}
          className="   group hover:bg-white border- border   rounded-3xl w-12 h-7 overflow-hidden   "
        >
          <img
            src="./git.png"
            className=" duration-200  w-6  h-6 rounded-full  group-hover:translate-x-0   "
            alt=""
          />
        </div>
      </div>

      <img
        ref={img1}
        onClick={() => {
          setSelectedFrame(img1);
          handleOnClick(img1);
        }}
        className=" img-m-1  duration-500 absolute  h-screen object-cover  z-10 "
        src="img1.jpg"
        alt=""
      />
      <img
        ref={img2}
        onClick={() => {
          setSelectedFrame(img2);

          handleOnClick(img2);
        }}
        className=" img-m-2  duration-500 absolute  h-screen object-cover z-10  "
        src="img2.jpg"
        alt=""
      />
      <img
        ref={img3}
        onClick={() => {
          setSelectedFrame(img3);

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

    duration: 0.3,
    ease: "power1.inOut",
  });
};

const closeOnClick = (targetElement, clipValue) => {
  if (!targetElement?.current) return; // Safety check

  gsap.to(targetElement.current, {
    clipPath: clipValue,

    onComplete: () => {
      targetElement.current.style.zIndex = "10"; // zIndex as string
    },

    duration: 0.3,
    ease: "power1.inOut",
  });
};
