import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Slide = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const handleOnclick = (e) => {};

  useEffect(() => {
    hoverAnimateFunction(
      img1Ref.current,
      "clipPath",
      "inset(0% 75% 0% 0%)",
      false,
      0,
      0.1
    );

    hoverAnimateFunction(
      img1Ref.current,
      "clipPath",
      "inset(0% 75% 100% 0%)",
      true,
      "inset(100% 75% 0% 0%)",
      1.3
    );

    hoverAnimateFunction(
      img2Ref.current,
      "clipPath",
      "inset(0% 50% 0% 25%)",
      false,
      0,
      0.1
    );

    hoverAnimateFunction(
      img2Ref.current,
      "clipPath",
      "inset(0% 50% 100% 25%)",
      true,
      "inset(100% 50% 0% 25%)",
      1.5
    );

    hoverAnimateFunction(
      img3Ref.current,
      "clipPath",
      "inset(0% 25% 0% 50%)",
      false,
      0,
      0.1
    );
    hoverAnimateFunction(
      img3Ref.current,
      "clipPath",
      "inset(0% 25% 100% 50%)",
      true,
      "inset(100% 25% 0% 50%)",
      1.7
    );

    hoverAnimateFunction(
      img4Ref.current,
      "clipPath",
      "inset(0% 0% 0% 75%)",
      false,
      0,
      0.1
    );

    hoverAnimateFunction(
      img4Ref.current,
      "clipPath",
      "inset(0% 0% 100% 75%)",
      true,
      "inset(100% 0% 0% 75%)",
      1.9
    );
  }, []);

  return (
    <div className="  flex  w-screen border-2 border-black  overflow-hidden relative  ">
      <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img1Ref.current,
            "clipPath",
            "inset(0% 75% 0% 0%)",
            false
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img1Ref.current,
            "clipPath",
            "inset(0% 75% 100% 0%)",
            true,
            "inset(100% 75% 0% 0%)",
            0.2
          );
        }}
        onClick={() => {
          animateWithGSAP(
            img1Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );
        }}
        className="w-[25%] h-screen border-black border-r  bg-white    "
      >
        <div className="text-5xl absolute z-10  tracking-wider  bottom-20 left-[3%]      ">
          {" "}
          Peace <br /> of nature
        </div>
      </div>
      <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img2Ref.current,
            "clipPath",
            "inset(0% 50% 0% 25%)",
            false,
            0
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img2Ref.current,
            "clipPath",
            "inset(0% 50% 100% 25%)",
            true,
            "inset(100% 50% 0% 25%)",
            0.2
          );
        }}
        onClick={() => {
          animateWithGSAP(
            img2Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      ></div>
      <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img3Ref.current,
            "clipPath",
            "inset(0% 25% 0% 50%)",
            false,
            0
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img3Ref.current,
            "clipPath",
            "inset(0% 25% 100% 50%)",
            true,
            "inset(100% 25% 0% 50%)",
            0.2
          );
        }}
        onClick={() => {
          animateWithGSAP(
            img3Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      ></div>
      <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img4Ref.current,
            "clipPath",
            "inset(0% 0% 0% 75%)",
            false,
            0
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img4Ref.current,
            "clipPath",
            "inset(0% 0% 100% 75%)",
            true,
            "inset(100% 0% 0% 75%)",
            0.2
          );
        }}
        onClick={() => {
          animateWithGSAP(
            img4Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      ></div>

      {/* img-cards-clips  */}

      <div
        ref={img1Ref}
        className="h-screen   pointer-events-none  image-clip-1   border  absolute  "
      >
        <img className="   scale-[1.6]  " src="./img1.jpg" alt="" />
      </div>
      <div
        ref={img2Ref}
        className="h-screen     image-clip-2  border pointer-events-none absolute  "
      >
        <img className=" scale-150  " src="./img2.jpg" alt="" />
      </div>
      <div
        ref={img3Ref}
        className="h-screen   image-clip-3  border pointer-events-none absolute  "
      >
        <img className=" scale-150     " src="./img3.jpg" alt="" />
      </div>
      <div
        ref={img4Ref}
        className="h-screen    image-clip-4  border pointer-events-none absolute  "
      >
        <img className=" scale-150    " src="./img4.jpg" alt="" />
      </div>
    </div>
  );
};

export default Slide;

const animateWithGSAP = (
  targetElement,
  xValue = 0,
  targetProperty,
  newValue
) => {
  const child = targetElement.children[0];

  gsap.to(targetElement, {
    [targetProperty]: newValue,
    duration: 0.5,
    ease: "power1.in",
    onStart: () => {
      targetElement.style.zIndex = 10;
      targetElement.children[0].style.objectPosition = "center";
    },
    onComplete: () => {},
  });

  gsap.to(targetElement, {
    transform: `translateX(${xValue})`,
    ease: "power1.in",

    duration: 0.6,
  });

  if (child) {
    gsap.to(child, {
      scale: 1,

      width: "100%",
      x: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }
};
const hoverAnimateFunction = (
  targetElement,
  targetProperty,
  newValue,
  isEnding = false,
  staticValue,
  delay = 0
) => {
  const child = targetElement.children[0];

  gsap.to(targetElement, {
    [targetProperty]: newValue,

    y: isEnding ? "-50%" : 0,
    duration: 0.9,
    delay: delay,
    ease: "power2.Out",
    onComplete: () => {
      // gsap.to(child, {
      //   scale: 1.05,
      //   duration: 0.5,
      //   ease: "power3.in",
      // });

      if (isEnding) {
        gsap.set(targetElement, {
          clipPath: staticValue,
          y: "40%",
        });
      }
    },
  });
};
