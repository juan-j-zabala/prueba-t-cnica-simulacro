import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FiltroPaginas = () => {
    const [popout, setPopout] = useState(false);
    const datafromrange = (e) => setrage(e.target.value);
    const [rage, setrage] = useState("");
    
  return (
    <>
      <motion.form
        layoutId={1}
        onClick={() => setPopout(1)}
        className={` bg-red-500 h-[50%] w-[100%] rounded-t-xl ${
          popout === 1 ? "hidden" : ""
        } `}
      >
        <label >filtro de libros</label>
      </motion.form>
      <AnimatePresence>
        {popout ? (
          <motion.div className="bg-white relative h-full " layoutId={popout}>
            <input
              onChange={datafromrange}
              className=" appearance-none bg-zinc-700 rounded-xl  "
              type="range"
              name="filter"
              id=""
              min={40}
              max={1200}
              step={20}
            />
            <motion.p className="bg-white "> holaa {rage} </motion.p>
            <button onClick={() => setPopout(false)}>close</button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
