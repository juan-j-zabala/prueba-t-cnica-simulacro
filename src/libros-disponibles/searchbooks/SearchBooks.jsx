import { FiltroPaginas } from "./filtro-por-paginas/FiltroPaginas";
import { FiltroGenero } from "./filtro-por-genero/FiltroGenero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CounterBooks from "./counterbooks/CounterBooks";

export const SearchBooks = () => {
  const [popout, setPopout] = useState(false);
  const [rage, setrage] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const datafromrange = (e) => setrage(e.target.value);

  return (
    <div className=" h-[9.9vh] w-full rounded-xl flex flex-row gap-2 ">
      <div className=" w-[70%] rounded-xl flex flex-col ">
        {/* <FiltroPaginas/> */}
        {/* <FiltroGenero/> */}
        <motion.form
          layoutId={1}
          onClick={() => setPopout(1)}
          className={` bg-red-500 h-[50%] w-[100%] rounded-t-xl flex items-center justify-center ${
            popout ? "hidden" : ""
          } `}
        >
          <label>filtro de libroooos</label>
        </motion.form>
        <motion.form
          layoutId={2}
          className={` bg-blue-300 h-[50%] rounded-b-xl flex items-center justify-center ${
            popout ? "hidden" : ""
          } `}
          onClick={() => setPopout(2)}
          // onSubmit={handleSubmit(onSubmit)}
        >
          <label> filtrar por genero </label>
        </motion.form>
        <AnimatePresence>
          {popout === 1 ? (
            <motion.div
              className="bg-white relative h-full rounded-xl flex flex-row  border-2 border-white "
              layoutId={popout}
            >
              <div className="flex flex-col md:w-[80%] w-[65%]  rounded-xl justify-center px-[5%] ">
                <motion.p className="bg-white text-center md:mb-3 text-base ">
                  paginas: {rage}
                </motion.p>{" "}
                <input
                  onChange={datafromrange}
                  className=" appearance-none  bg-zinc-700 rounded-xl   "
                  type="range"
                  name="filter"
                  id=""
                  min={40}
                  max={1200}
                  step={20}
                />
              </div>
              <button
                className="bg-black text-white md:w-[20%] w-[35%] rounded-xl "
                onClick={() => setPopout(false)}
              >
                close
              </button>
            </motion.div>
          ) : null}
          {popout === 2 ? (
            <motion.div
              layoutId={popout}
              className="bg-purple-500 h-full flex justify-center items-center rounded-xl  "
            >
              <select
                {...register("genero")}
                className="w-[60%] border-2 border-black rounded-xl  "
              >
                <option value="">elige un genero</option>
                <option value="terror">terror</option>
                <option value="ciencia ficcion"></option>
                <option value="fantasia"></option>
              </select>
              <input type="submit" />
              <button onClick={() => setPopout(false)}>close</button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <CounterBooks />
    </div>
  );
};
