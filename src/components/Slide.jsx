import React, { useRef } from "react";
import { gsap } from "gsap";

const Slide = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const handleOnclick = (e) => {};

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
            true
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
        className="w-[25%] h-screen border-black border-r  bg-white   "
      ></div>
      <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img2Ref.current,
            "clipPath",
            "inset(0% 50% 0% 25%)",
            false
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
            false
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img3Ref.current,
            "clipPath",
            "inset(100% 25% 0% 50%)",
            true
          );
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      ></div>
      <div className="w-[25%] h-screen border-black border-r  bg-white   "></div>

      {/* img-cards-clips  */}

      <div
        ref={img1Ref}
        className="h-screen pointer-events-none  image-clip-1   border  absolute  "
      >
        <img className="duration-150 " src="./img1.jpg" alt="" />
      </div>
      <div
        ref={img2Ref}
        className="h-screen image-clip-2  border border-white absolute  "
      >
        <img className=" duration-300" src="./img2.jpg" alt="" />
      </div>
      <div
        ref={img3Ref}
        className="h-screen image-clip-3  border border-white absolute  "
      >
        <img className=" duration-300" src="./img3.jpg" alt="" />
      </div>

      {/* img-1 */}
      {/* <div
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
            true
          );
        }}
        className="h-screen   border border-white   absolute  w-[25%]"
      >
        <div
          onClick={() => {
            animateWithGSAP(
              img1Ref.current,
              "0%",
              "clipPath",
              "inset(0% 0% 0% 0%)"
            );
          }}
          ref={img1Ref}
          className=" image-clip-1 duration-0  w-screen h-screen  border-black    left-0     absolute group   "
        >
          <img
            className="    h-screen      w-[55%]  object-cover object-right    duration-800  "
            src="./img1.jpg"
            alt=""
          />
        </div>
      </div> */}

      {/* img-2 */}
      {/* <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img2Ref.current,
            "clipPath",
            "inset(0% 75% 0% 0%)",
            false
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img2Ref.current,
            "clipPath",
            "inset(0% 75% 100% 0%)",
            true
          );
        }}
        className="h-screen   border border-white absolute   w-[25%]"
      >
        <div
          ref={img2Ref}
          onClick={() => {
            animateWithGSAP(
              img2Ref.current,
              "0%",
              "clipPath",
              "inset(0% 0% 0% 0%)"
            );
          }}
          className="  image-clip-2    duration-0  w-screen h-screen  border-black      bg-blue-200   absolute group"
        >
          <img
            className="   h-screen     w-[55%]  object-cover   duration-800       "
            src="./img2.jpg"
            alt=""
          />
        </div>
      </div> */}

      {/* img-3 */}

      {/* <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img3Ref.current,
            "clipPath",
            "inset(0% 75% 0% 0%)",
            false
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img3Ref.current,
            "clipPath",
            "inset(0% 75% 100% 0%)",
            true
          );
        }}
        className="h-screen   border border-white absolute left-0  w-[25%]"
      >
        <div
          ref={img3Ref}
          onClick={() => {
            animateWithGSAP(
              img3Ref.current,
              "-0",
              "clipPath",
              "inset(0% 0% 0% 0%)"
            );
          }}
          className="  image-clip-3 duration-0  w-screen h-screen  border-black      bg-blue-200   absolute group "
        >
          <img
            className="    h-screen      w-[55%]  object-cover object-right    duration-800   "
            src="./img3.jpg"
            alt=""
          />
        </div>
      </div> */}

      {/* img-4 */}
      {/* <div
        onMouseEnter={() => {
          hoverAnimateFunction(
            img4Ref.current,
            "clipPath",
            "inset(0% 75% 0% 0%)",
            false
          );
        }}
        onMouseLeave={() => {
          hoverAnimateFunction(
            img4Ref.current,
            "clipPath",
            "inset(0% 75% 100% 0%)",
            true
          );
        }}
        className="h-screen   border border-white absolute left-0  w-[25%]"
      >
        <div
          ref={img4Ref}
          onClick={() => {
            animateWithGSAP(
              img4Ref.current,
              "-0",
              "clipPath",
              "inset(0% 0% 0% 0%)"
            );
          }}
          className="  image-clip-4 duration-0  w-screen h-screen  border-black      bg-blue-200   absolute group   "
        >
          <img
            className="   h-screen      w-[55%]  object-cover object-right    duration-800   "
            src="./img4.jpg"
            alt=""
          />
        </div>
      </div> */}
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
      scale: 1.01,
      width: "100%",
      x: 0,
      duration: 0.7,
      ease: "power3.in",
    });
  }
};
const hoverAnimateFunction = (
  targetElement,
  targetProperty,
  newValue,
  isEnding = false
) => {
  const child = targetElement.children[0];

  gsap.to(targetElement, {
    [targetProperty]: newValue,
    y: isEnding ? "-40%" : 0,
    duration: 0.9,
    ease: "power1.inOut",
    onComplete: () => {
      console.log(targetElement.style.transform);
      if (isEnding) {
        gsap.set(targetElement, {
          clipPath: "inset(100% 75% 0% 0%)",
          y: "40%",
        });
      }
    },
  });

  // gsap.to(child, {
  //   scale: isEnding ? 1 : 1.1,
  //   duration: 0.5,
  //   ease: "power1.in",
  //   onStart: () => {
  //     if (!isEnding) {
  //       child.style.transform = "scale(1)";
  //     }
  //   },
  // });
};
