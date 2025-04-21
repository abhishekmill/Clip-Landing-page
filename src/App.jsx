import { useEffect, useState } from "react";
import Slide from "./components/Slide";
import MobileVersion from "./components/MobileVersion";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className=" h-screen flex  bg-gray-800 ">
      {isDesktop ? (
        <Slide />
      ) : (
        <MobileVersion />
        // <div className=" text-white capitalize w-screen text-center h-screen flex-col flex justify-center items-center ">
        //   <h2 className="p-5"> please use Desktop or Bigger screen Device </h2>
        //   <a
        //     href="https://github.com/abhishekmill"
        //     target="_blank"
        //     className="p-5 text-green-400"
        //   >
        //     {" "}
        //     github.com/abhishekmill
        //   </a>
        // </div>
      )}
    </div>
  );
}

export default App;
