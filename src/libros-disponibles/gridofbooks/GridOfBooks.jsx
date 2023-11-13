import libros from "../../../data/libros";

const GridOfBooks = ({ANIMATION_TRIGGER}) => {
    libros

  return (
    <div
      className={`p-1 h-[75%] rounded-xl grid gap-4 auto-rows-[35rem] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] ${
        ANIMATION_TRIGGER ? "max-md:hidden" : ""
      } `}
    >
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
      <div className="bg-white rounded-lg "></div>
    </div>
  );
};

export default GridOfBooks;
