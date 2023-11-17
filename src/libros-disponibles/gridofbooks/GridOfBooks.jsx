import { useState } from "react";
import libros from "../../../data/libros";
// import downarrow from '../../../assets/down.svg'
import EachBoook from "./eachbook/EachBoook";

const GridOfBooks = ({ ANIMATION_TRIGGER }) => {

  return (
    <div
      className={`p-1 h-[75%] rounded-xl grid gap-4 auto-rows-[35rem] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] ${
        ANIMATION_TRIGGER ? "max-md:hidden" : ""
      } `}
    >
      {libros.library.map((element, index) => {
        return (
          <div key={element.book.ISBN} className="bg-white rounded-lg overflow-hidden relative flex justify-center items-center ">
            <EachBoook data={...element.book} />
          </div>
        );
      })}
    </div>
  );
};

export default GridOfBooks;
