import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AnimatedText = ({ children, duration = 0.5, delay = 0, classname }) => {
  useEffect(() => {
    const typeSplit = new SplitType("[animate]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[animate] .line", {
      y: "100%",
      opacity: 0,
      duration: duration,
      delay: delay,
      stagger: 0.1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className={classname} animate="true">
      {children}
    </div>
  );
};

export default AnimatedText;
