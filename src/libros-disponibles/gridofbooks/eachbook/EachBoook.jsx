import { useState } from "react";
import downarrow from "../../../assets/down.svg";
import uparrow from "../../../assets/up.svg";
import { useContext } from "react";
import { Context } from "../../../context/ContextProvider";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const EachBoook = ({ ...props }) => {
  const [movieinfo, setMovieinfo] = useState(null);
  const [showlistbooks, setShowlistbooks, setListadelectura, listadelectura] =
    useContext(Context);
  const [scope, animate] = useAnimate();
  const TRIGGER_MOVIE = movieinfo === true;
  const { data, index } = props;
  // console.log(listadelectura);

  useEffect(() => {
    if (movieinfo) {
      animate("img", { y: 450 });
    } else {
      animate("img", { y: 0 });
    }
  }, [movieinfo]);

  return (
    <>
      <div className="text-white bg-neutral-950 w-[98%] h-[99%] absolute rounded-md p-2 pt-3  ">
        <button
          onClick={() => {
            setShowlistbooks(true);
            setListadelectura([...listadelectura, data]);
          }}
          className="bg-white text-black h-[10%] w-[80%] hover:bg-red-700 hover:text-white font-semibold px-2 text-2xl rounded-lg hover:scale-105 "
        >
          Para lista de lectura
        </button>
        <h2 className="py-3 text-3xl font-bold my-2 tracking-tight ">
          {data.title}
        </h2>
        <ul className="p-2 pb-10 list-disc list-inside ">
          <li className="">Genero: {data.genre} </li>
          <li>Año de salida: {data.year} </li>
          <li>Panginas: {data.pages} </li>
          <li>Autor: {data.author.name} </li>
        </ul>
        <p className="leading-5 text-xl font-sans">
          Synopsis: {data.synopsis}{" "}
        </p>
      </div>
      <button
        onClick={() => setMovieinfo(!movieinfo)}
        className=" absolute right-2 top-2 z-10"
      >
        <img
          src={TRIGGER_MOVIE ? uparrow : downarrow}
          width={70}
          height={70}
          alt="down"
        />
      </button>
      <div ref={scope} className="w-full h-full">
        <img
          className="w-full h-full rounded-lg relative"
          src={data.cover}
          alt="books"
        />
      </div>
    </>
  );
};

export default EachBoook;
