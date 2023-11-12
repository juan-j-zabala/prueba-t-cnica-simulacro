const Lbdisponibles = ({ ...prop }) => {
  const { showlistbooks, setShowlistbooks } = prop;

  return (
    <div
      className={` bg-white md:h-[100%] rounded-xl overflow-auto transition-all duration-300 ease-in-out delay-100  
    ${
      showlistbooks === true ? " h-[10%] md:w-[70%] overflow-hidden  " : "w-[100%] md:w-[100%] "
    }  `}
    >
      <div className="flex flex-col gap-2 justify-center p-1">
        <div className="bg-red-500  h-[10vh] w-full rounded-xl ">
          {/* <div className="bg-green-200 h-[8vh] "></div> */}
        </div>
        <div className=" p-1 h-[75%] rounded-xl grid gap-4 auto-rows-[22rem] grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
          <div className="bg-blue-500 rounded-lg flex justify-end ">
          <button onClick={() => setShowlistbooks(!showlistbooks)}>
              animation
            </button>
          </div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>
          <div className="bg-blue-500 rounded-lg flex justify-end "></div>

        </div>
      </div>
    </div>
  );
};

export default Lbdisponibles;
