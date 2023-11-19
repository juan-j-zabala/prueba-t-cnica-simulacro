import { useContext } from "react";
import GridOfBooks from "./gridofbooks/GridOfBooks";
import { Context } from "../context/ContextProvider";
import { useState } from "react";
import { SearchBooks } from "./searchbooks/SearchBooks";


const Lbdisponibles = () => {
  const [showlistbooks, setShowlistbooks, x ] = useContext(Context)
  const ANIMATION_TRIGGER = showlistbooks === true;

  return (
    <div
      className={` bg-neutral-950 md:h-[100%] rounded-xl overflow-auto transition-all duration-300 ease-in-out delay-0 scrollbar-none
    ${
      showlistbooks === true
        ? " h-[11%] md:w-[70%] "
        : " h-[90%] w-[100%] md:w-[100%] "
    }  `}
    >
      <div className="flex flex-col gap-2 justify-center p-1">
        <SearchBooks/>
        {/* <div className="bg-white h-[9.9vh] w-full rounded-xl ">
        </div> */}
        <GridOfBooks ANIMATION_TRIGGER={ANIMATION_TRIGGER} />
      </div>
    </div>
  );
};

export default Lbdisponibles;
