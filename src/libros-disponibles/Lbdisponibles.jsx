import GridOfBooks from "./gridofbooks/GridOfBooks";

const Lbdisponibles = ({ ...prop }) => {
  const { showlistbooks, setShowlistbooks } = prop;
  const ANIMATION_TRIGGER = showlistbooks === true;

  return (
    <div
      className={` bg-neutral-950 md:h-[100%] rounded-xl overflow-auto transition-all duration-300 ease-in-out delay-0
    ${
      showlistbooks === true
        ? " h-[11%] md:w-[70%] "
        : " h-[90%] w-[100%] md:w-[100%] "
    }  `}
    >
      <div className="flex flex-col gap-2 justify-center p-1">
        <div className="bg-red-500 h-[9.9vh] w-full rounded-xl "></div>
        <GridOfBooks ANIMATION_TRIGGER={ANIMATION_TRIGGER} />
      </div>
    </div>
  );
};

export default Lbdisponibles;
