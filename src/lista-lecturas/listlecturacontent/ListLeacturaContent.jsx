import { useContext } from "react";
import { Context } from "../../context/ContextProvider";

const ListLecturaContent = () => {
  const [showlistbooks, setShowlistbooks, setListadelectura, listadelectura] =
    useContext(Context);
  const ANIMATION_TRIGGER = showlistbooks === true;
  console.log(listadelectura);

  return (
    <div
      className={` text-black bg-white w-full full gap-2 p-2 grid auto-rows-[45rem] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]  overflow-auto rounded-xl ${ANIMATION_TRIGGER ? "" : "max-md:hidden"} `}
    >
      {listadelectura.map((item) => {
        return (
          <div className="bg-white rounded-xl " key={item.ISBN}>
            {/* <h2>{item.title}</h2> */}
            <img className="w-full h-full rounded-xl" src={item.cover} />
          </div>
        );
      })}
    </div>
  );
};

export default ListLecturaContent;
