import React from "react";
import AnimatedText from "./AnimatedText";

const Overlay = ({ isColorBlack = false }) => {
  return (
    <div
      className={` ${isColorBlack ? "text-black " : "text-white"}   
     
      absolute z-[60]   duration-500  flex  justify-end    h-screen w-full pointer-events-none     `}
    >
      <div
        style={{
          background: `linear-gradient(
        to bottom left,
        rgba(0, 0, 0, .6) 0%,
        rgba(145, 0, 128, 0) 50%,
        transparent 100%
      )`,
          transition: "background 0.5s ease",
        }}
        className={` ${
          isColorBlack ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0 w-full h-screen  duration-500 `}
      ></div>

      <div className="flex w-[900px] justify-between items-start mt-32 mr-40  ">
        <div>
          <AnimatedText delay={5}> Where From</AnimatedText>
          <AnimatedText delay={5}> and Function Unite</AnimatedText>
        </div>
        <div>
          <AnimatedText
            classname={"capitalize  text-6xl tracking-tight  "}
            delay={4}
            duration={2}
          >
            {" "}
            Elevating Comfort
          </AnimatedText>
          <AnimatedText
            classname={"capitalize  text-6xl tracking-tight  "}
            delay={4}
            duration={2}
          >
            {" "}
            with every curve
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
