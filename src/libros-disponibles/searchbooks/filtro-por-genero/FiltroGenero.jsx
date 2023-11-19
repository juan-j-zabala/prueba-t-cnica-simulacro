import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FiltroGenero = () => {
  const [popout, setPopout] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <motion.form
        layoutId={2}
        className={` bg-blue-300 h-[50%] rounded-b-xl  ${
          popout === 2 ? "" : ""
        } `}
        onClick={() => setPopout(2)}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <label> filtrar por genero </label>
      </motion.form>
      <AnimatePresence>
        {popout ? (
          <motion.div layoutId={popout} className="bg-purple-500 h-[100%]  ">
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
    </>
  );
};
