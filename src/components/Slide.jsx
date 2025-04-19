import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import AnimatedText from "./AnimatedText";
import CircleImg from "./CircleImg";

const Slide = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const circleImg1Ref = useRef(null);
  const circleImg2Ref = useRef(null);
  const circleImg3Ref = useRef(null);
  const circleImg4Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  const [isHoverEnabled, setIsHoverEnabled] = useState(true);
  const [selectedFrame, setSelectedFrame] = useState(null);

  const handleBackToHome = () => {
    setIsHoverEnabled(true);
    if (selectedFrame === img1Ref.current) {
      closeWithGSAP(selectedFrame, 0, "clipPath", "inset(0% 75% 0% 0%)");
      imageCloseFunction(circleImg1Ref);
      textCloseFunction(text1Ref, "3%", 0.5);
    }
    if (selectedFrame === img2Ref.current) {
      closeWithGSAP(selectedFrame, 0, "clipPath", "inset(0% 50% 0% 25%)");
      imageCloseFunction(circleImg2Ref);
      textCloseFunction(text2Ref, "28%", 0.6);
    }
    if (selectedFrame === img3Ref.current) {
      closeWithGSAP(selectedFrame, 0, "clipPath", "inset(0% 25% 0% 50%)");
      imageCloseFunction(circleImg3Ref);
      textCloseFunction(text3Ref, "53%", 0.7);
    }
    if (selectedFrame === img4Ref.current) {
      closeWithGSAP(selectedFrame, 0, "clipPath", "inset(0% 0% 0% 75%)");
      imageCloseFunction(circleImg4Ref);
      textCloseFunction(text4Ref, "78%", 0.8);
    }
  };

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
      {/* navbar */}
      <div
        className={` ${
          isHoverEnabled ? "-left-28" : "left-5"
        }   absolute top-5  duration-500 h-fit z-50 flex w-60  justify-between `}
      >
        <div
          onClick={handleBackToHome}
          className="  w-20 h-10 group  border- border  rounded-3xl   "
        >
          <img
            src="./arrow1.png"
            className="rotate-[136deg] translate-x-6 group-hover:translate-x-2 duration-200  "
            alt=""
          />
        </div>

        <div
          onClick={() => {
            window.open("https://github.com/abhishekmill", "_blank");
          }}
          className="   group hover:bg-green-400 border- border  rounded-3xl w-20  h-10 overflow-hidden   "
        >
          <img
            src="./git.png"
            className=" duration-200  w-10  h-10 rounded-full  group-hover:translate-x-0 translate-x-10  "
            alt=""
          />
        </div>
      </div>
      {/* navbar closed  */}

      <div
        onMouseEnter={() => {
          if (!isHoverEnabled) return;
          hoverAnimateFunction(
            img1Ref.current,
            "clipPath",
            "inset(0% 75% 0% 0%)",
            false
          );
        }}
        onMouseLeave={() => {
          if (!isHoverEnabled) return;

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
          setSelectedFrame(img1Ref.current);
          if (!isHoverEnabled) return;
          setIsHoverEnabled(false);
          animateWithGSAP(
            img1Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );

          textAnimateFunction(text1Ref, "5%", 0.5);
          imageAnimateFunction(circleImg1Ref, "0%", 0.8);
        }}
        className="w-[25%] h-screen border-black border-r  bg-white    "
      >
        <div
          ref={text1Ref}
          className=" absolute z-20   bottom-20 left-[3%]      "
        >
          <AnimatedText
            delay={0.5}
            children={"Our  "}
            classname={"text-5xl tracking-wider  capitalize  "}
          />
          <AnimatedText
            delay={0.5}
            children={"Approach  "}
            classname={"text-5xl tracking-wider   capitalize "}
          />
        </div>

        <CircleImg
          ref={circleImg1Ref}
          imgPath={"./circleImg1.jpg"}
          className={""}
        />
      </div>
      <div
        onMouseEnter={() => {
          if (!isHoverEnabled) return;

          hoverAnimateFunction(
            img2Ref.current,
            "clipPath",
            "inset(0% 50% 0% 25%)",
            false,
            0
          );
        }}
        onMouseLeave={() => {
          if (!isHoverEnabled) return;

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
          setSelectedFrame(img2Ref.current);

          if (!isHoverEnabled) return;
          setIsHoverEnabled(false);
          animateWithGSAP(
            img2Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );

          textAnimateFunction(text2Ref, "5%", 0.6);
          imageAnimateFunction(circleImg2Ref, "0%", 0.8);
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      >
        {" "}
        <div
          ref={text2Ref}
          className=" absolute z-20   bottom-20 left-[28%]      "
        >
          <AnimatedText
            delay={0.8}
            children={"Our  "}
            classname={"text-5xl tracking-wider  capitalize  "}
          />
          <AnimatedText
            delay={0.8}
            children={"Approach  "}
            classname={"text-5xl tracking-wider   capitalize "}
          />
        </div>
        <CircleImg
          ref={circleImg2Ref}
          imgPath={"./circleImg2.jpg"}
          className={""}
        />
      </div>
      <div
        onMouseEnter={() => {
          if (!isHoverEnabled) return;

          hoverAnimateFunction(
            img3Ref.current,
            "clipPath",
            "inset(0% 25% 0% 50%)",
            false,
            0
          );
        }}
        onMouseLeave={() => {
          if (!isHoverEnabled) return;

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
          setSelectedFrame(img3Ref.current);

          if (!isHoverEnabled) return;
          setIsHoverEnabled(false);
          animateWithGSAP(
            img3Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );
          textAnimateFunction(text3Ref, "5%", 0.6);
          imageAnimateFunction(circleImg3Ref, "0%", 0.8);
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      >
        <div
          ref={text3Ref}
          className=" absolute z-20   bottom-20 left-[53%]      "
        >
          <AnimatedText
            delay={0.8}
            children={"Our  "}
            classname={"text-5xl tracking-wider  capitalize  "}
          />
          <AnimatedText
            delay={0.8}
            children={"Approach  "}
            classname={"text-5xl tracking-wider   capitalize "}
          />
        </div>
        <CircleImg
          ref={circleImg3Ref}
          imgPath={"./circleImg3.jpg"}
          className={""}
        />
      </div>
      <div
        onMouseEnter={() => {
          if (!isHoverEnabled) return;

          hoverAnimateFunction(
            img4Ref.current,
            "clipPath",
            "inset(0% 0% 0% 75%)",
            false,
            0
          );
        }}
        onMouseLeave={() => {
          if (!isHoverEnabled) return;

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
          setSelectedFrame(img4Ref.current);
          if (!isHoverEnabled) return;
          setIsHoverEnabled(false);
          animateWithGSAP(
            img4Ref.current,
            "0%",
            "clipPath",
            "inset(0% 0% 0% 0%)"
          );

          textAnimateFunction(text4Ref, "5%", 0.8);
          imageAnimateFunction(circleImg4Ref, "0%", 0.8);
        }}
        className="w-[25%] h-screen border-black border-r  bg-white   "
      >
        {" "}
        <div
          ref={text4Ref}
          className=" absolute z-20   bottom-20    left-[78%]   "
        >
          <AnimatedText
            delay={0.8}
            children={"Our  "}
            classname={"text-5xl tracking-wider  capitalize  "}
          />
          <AnimatedText
            delay={0.8}
            children={"Technology  "}
            classname={"text-5xl tracking-wider   capitalize "}
          />
        </div>
        <CircleImg
          ref={circleImg4Ref}
          imgPath={"./circleImg4.jpg"}
          className={""}
        />
      </div>

      {/* img-cards-clips  */}

      <div
        ref={img1Ref}
        className="h-screen   pointer-events-none  image-clip-1   border  absolute  "
      >
        <img className="   scale-150  " src="./img1.jpg" alt="" />
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
      targetElement.style.zIndex = 30;
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
      if (isEnding) {
        gsap.set(targetElement, {
          clipPath: staticValue,
          y: "40%",
        });
      }
    },
  });
};
const textAnimateFunction = (targetElement, leftVal, duration) => {
  gsap.to(targetElement.current, {
    scale: 1.2,
    fontWeight: "bold",
    color: "white",
    left: leftVal,
    onStart: () => {
      targetElement.current.style.zIndex = 40;
    },

    duration: duration,
    ease: "power1.inOut",
  });
};

const imageAnimateFunction = (targetElement) => {
  gsap.to(targetElement.current, {
    rotation: 0,
    scale: 1,
    duration: 1,
    onStart: () => {
      targetElement.current.style.right = "20%";
      targetElement.current.style.transform = "rotate(-180deg)";
    },
    ease: "power1.inOut",
  });
};

// closing animations

const closeWithGSAP = (targetElement, xValue = 0, targetProperty, newValue) => {
  const child = targetElement.children[0];

  gsap.to(targetElement, {
    [targetProperty]: newValue,
    duration: 0.7,
    ease: "power1.in",
    onStart: () => {
      targetElement.children[0].style.objectPosition = "center";
    },
    onComplete: () => {
      targetElement.style.zIndex = 10;
    },
  });

  if (child) {
    gsap.to(child, {
      scale: 1.5,

      duration: 0.7,
      ease: "power1.inOut",
    });
  }
};

const imageCloseFunction = (targetElement) => {
  gsap.to(targetElement.current, {
    rotation: -180,

    scale: 0,
    right: "-20%",
    onComplete: () => {},
    duration: 0.5,
    ease: "power1.inOut",
  });
};

const textCloseFunction = (targetElement, leftVal, duration) => {
  gsap.to(targetElement.current, {
    scale: 1,
    fontWeight: "normal",
    color: "black",
    left: leftVal,
    onComplete: () => {
      targetElement.current.style.zIndex = 20;
    },
    duration: duration,
    ease: "power1.inOut",
  });
};
