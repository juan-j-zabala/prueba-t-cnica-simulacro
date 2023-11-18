export const SearchBooks = () => {
  return (
    <div className="bg-white h-[9.9vh] w-full rounded-xl ">
      <form action="">
        <label htmlFor="">
          filtro de libros
          <input className=" appearance-none bg-zinc-700 rounded-xl  " type="range" name="filter" id="" min={40} max={1200} step={20} />
        </label>
      </form>
      <div>
        <label htmlFor="genero-filter">filtrar por genero</label>
        {/* <input list="genero" name="genero-filter" id="genero-filter" /> */}
        <select className="w-[60%] border-2 border-black rounded-xl  " id="genero-filter">
          <option value="">elige un genero</option>
          <option value="terror">terror</option>
          <option value="ciencia ficcion"></option>
          <option value="fantasia"></option>
        </select>
      </div>
    </div>
  );
};
