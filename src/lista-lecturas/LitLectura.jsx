import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ListLecturaContent from "./listlecturacontent/ListLeacturaContent";

const LitLectura = () => {
  const [showlistbooks, setShowlistbooks] = useContext(Context);
  const ANIMATION_TRIGGER = showlistbooks === true;

  return (
    <div
      className={`bg-neutral-950  rounded-xl mt-1 md:mt-2 overflow-auto transition-all duration-300 ease-in-out delay-0
      flex flex-col items-center gap-2
    ${
      ANIMATION_TRIGGER
        ? "md:h-[100%] md:w-[30%] h-[89%]"
        : "h-[10%] md:absolute md:right-0 md:hidden md:h-[0%] md:w-[0%] border-neutral-950"
    } `}
    >
      <div
        className={`bg-neutral-950 h-[90%] w-full rounded-xl flex gap-2 font-bold text-3xl ${ANIMATION_TRIGGER ? "" : "md:hidden"}`}
      >
        <ListLecturaContent />
        <p
          className={`flex justify-center w-[70%] rounded-lg bg-red-700 text-white px-5 items-center ${ANIMATION_TRIGGER ? "hidden" : ""} `}
        >
          2 libros en lista de lectura
        </p>
        <button
          onClick={() => setShowlistbooks(!showlistbooks)}
          className={`bg-white hover:bg-red-700 hover:text-white w-[30%] rounded-lg ${ANIMATION_TRIGGER ? "hidden" : ""} `}
        >
          open
        </button>
      </div>
      <div
        className={`text-white text-3xl bg-neutral-950 gap-2 w-[100%] h-[10%] rounded-2xl  
      flex items-center justify-between  
      ${ANIMATION_TRIGGER ? "" : "hidden"} `}
      >
        <h3 className="bg-red-700 text-white font-bold w-[70%] h-full rounded-lg flex items-center justify-center px-2">
          lista de lectura
        </h3>
        <button
          onClick={() => setShowlistbooks(!showlistbooks)}
          className="bg-white w-[30%] h-full rounded-lg text-black font-bold hover:bg-red-700 hover:text-white "
        >
          close
        </button>
      </div>
    </div>
  );
};

export default LitLectura;
