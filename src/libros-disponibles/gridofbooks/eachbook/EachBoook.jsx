import { useState } from "react";
import downarrow from '../../../assets/down.svg'
import uparrow from '../../../assets/up.svg'

const EachBoook = ({...props}) => {
  const [movieinfo, setMovieinfo] = useState(null)
  const TRIGGER_MOVIE = movieinfo === true
  const {data} = props

  return (
    <>
      <div className="text-white bg-neutral-950 w-[98%] h-[99%] absolute rounded-md p-2 pt-3 ">
        <button className="bg-white text-black h-[10%] w-[80%] px-2 text-2xl rounded-3xl hover:scale-105 ">Para lista de lectura</button>
        <h2 className="text-3xl" >{ data.title }</h2>
        <p className="">Genero: {data.genre} </p>
        <p>Año de salida: {data.year} </p>
        <p>Panginas: {data.pages} </p>
        <p>Autor: {data.author.name} </p>
        <p>Synopsis: {data.synopsis} </p>
      </div>
      <button
        onClick={() => setMovieinfo(!movieinfo)}
        className=" absolute right-2 top-2 z-10"
      >
        <img src={TRIGGER_MOVIE ? uparrow : downarrow} width={70} height={70} alt="down" />
      </button>
      <img
        className={`w-full h-full rounded-lg relative ${
          TRIGGER_MOVIE ? "top-[400px]" : ""
        } `}
        src={data.cover}
        alt="books"
      />
    </>
  );
};

export default EachBoook;
