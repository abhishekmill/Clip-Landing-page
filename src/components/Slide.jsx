import React, { useRef } from "react";
import { gsap } from "gsap";

const Slide = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const handleOnclick = (e) => {};

  return (
    <div className="  flex justify-between  w-[100%]  border-2 border-black  overflow-hidden relative  ">
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
        className="h-screen   border border-white  w-[25%]"
      >
        <div
          onClick={() => {
            animateWithGSAP(img1Ref.current, "clipPath", "inset(0% 0% 0% 0%)");
          }}
          ref={img1Ref}
          className=" image-clip-1 duration-0  w-screen h-screen  border-black      bg-blue-200   absolute group   "
        >
          <img
            className="    h-screen      w-[55%]  object-cover object-right    duration-800  "
            src="./img1.jpg"
            alt=""
          />
        </div>
      </div>

      {/* <div
        ref={img2Ref}
        onClick={() => {
          animateWithGSAP(img2Ref.current, "clipPath", "inset(0% 0% 0% 0%)");
        }}
        className="  image-clip-2  w-screen  border-black   border    hover:z-10  absolute  group duration-500 "
      >
        <img
          className="    h-screen    w-[55%]  translate-y-[100%] group-hover:translate-y-0      duration-800  object-cover       "
          src="./img2.jpg"
          alt=""
        />
      </div>
      <div
        ref={img3Ref}
        onClick={() => {
          animateWithGSAP(img3Ref.current, "clipPath", "inset(0% 0% 0% 0%)");
        }}
        className="   image-clip-3  w-screen  border-black   border    hover:z-10  absolute  group duration-500 "
      >
        <img
          className="   h-screen    w-[80%]  translate-y-[100%] group-hover:translate-y-0      duration-800  object-cover   "
          src="./img3.jpg"
          alt=""
        />
      </div>
      <div
        ref={img4Ref}
        onClick={() => {
          animateWithGSAP(img4Ref.current, "clipPath", "inset(0% 0% 0% 0%)");
        }}
        className="  image-clip-4  w-screen  border-black  border-2    hover:z-10  absolute  group  duration-500 "
      >
        <img
          className="    h-screen    w-[100%]  translate-y-[100%] group-hover:translate-y-0      duration-800  object-cover    "
          src="./img4.jpg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Slide;

const animateWithGSAP = (targetElement, targetProperty, newValue) => {
  const child = targetElement.children[0];

  gsap.to(targetElement, {
    [targetProperty]: newValue,
    duration: 0.3,
    ease: "power1.in",
    onStart: () => {
      targetElement.style.zIndex = 10;
      targetElement.children[0].style.objectPosition = "center";
    },
    onComplete: () => {},
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
