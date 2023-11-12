const LitLectura = ({ ...prop }) => {
  const { showlistbooks, setShowlistbooks } = prop;
  const ANIMATION_TRIGGER = showlistbooks === true;
  console.log(showlistbooks);

  return (
    <div
      className={`bg-white rounded-xl mt-1  md:mt-0 transition-all duration-300 ease-in-out delay-100 
    ${
      ANIMATION_TRIGGER
        ? "md:h-[100%] md:w-[30%] h-[88%] "
        : "h-[9%] md:absolute md:right-0 md:h-[0%] md:w-[0%]"
    } `}
    >
      <p className={`${ANIMATION_TRIGGER ? "" : "hidden"} `}>
        lista de lectura
      </p>
      {/* <p className={`${ANIMATION_TRIGGER ? "" : "" } `} >lista de lectura</p> */}
      <p className="bg-blue-900  h-[80%] w-full "></p>
    </div>
  );
};

export default LitLectura;
