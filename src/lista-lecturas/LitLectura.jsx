import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const LitLectura = () => {
  const [showlistbooks, setShowlistbooks ] = useContext(Context)
  const ANIMATION_TRIGGER = showlistbooks === true;
  console.log(showlistbooks);

  return (
    <div
      className={`bg-neutral-950 rounded-3xl mt-1  md:mt-0 transition-all duration-300 ease-in-out delay-0
      flex flex-col items-center border pt-3  border-white gap-2  
    ${
      ANIMATION_TRIGGER
        ? "md:h-[100%] md:w-[30%] h-[89%]  "
        : "h-[9%] md:absolute md:right-0 md:hidden md:h-[0%] md:w-[0%] border-neutral-950"
    } `}
    >
      {/* <p className={`${ANIMATION_TRIGGER ? "" : "" } `} >lista de lectura</p> */}
      <div className={`bg-white h-[87%] w-[95%] rounded-xl flex justify-between p-2 ${ANIMATION_TRIGGER ? "" : "md:hidden"} `} >
        <p className={`flex justify-center items-center ${ANIMATION_TRIGGER ? "hidden" : ""} `}>2 libros lista de lectura</p>
        <button
          onClick={() => setShowlistbooks(!showlistbooks)}
          className={`bg-black text-white w-[25%] rounded-lg ${ANIMATION_TRIGGER ? "hidden" : ""} `}
        >
          open
        </button>
      </div>
      <p
        className={`text-white text-3xl bg-neutral-950 w-[92%] h-[10%] rounded-2xl p-4 border border-white 
      flex items-center justify-between  
      ${ANIMATION_TRIGGER ? "" : "hidden"} `}
      >
        lista de lectura
        <button
          onClick={() => setShowlistbooks(!showlistbooks)}
          className="bg-white w-[30%] h-full rounded-lg text-black "
        >
          close
        </button>
      </p>
    </div>
  );
};

export default LitLectura;
