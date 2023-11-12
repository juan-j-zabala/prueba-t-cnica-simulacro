const Lbdisponibles = ({ ...prop }) => {
  const { showlistbooks, setShowlistbooks } = prop;

  return (
    <div
      className={` bg-white relative md:h-[98%] md:mx-0 md:ml-4 md:mr-0 rounded-xl mb-2 md:mb-0  overflow-auto transition-all duration-300 ease-in-out delay-0 
    ${
      showlistbooks === true ? " h-[10%] md:w-[70%]  " : "w-[100%] md:w-[100%] "
    }  `}
    >
      <div className="bg-red-500 h-[8vh] rounded-xl mx-2 mt-2 ">
        {/* <div className="bg-green-200 h-[8vh] "></div> */}
      </div>
      <div className="m-4 h-[75%] rounded-xl grid gap-4 auto-rows-[22rem] grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
        <div className="bg-blue-500 rounded-lg flex justify-end ">
          <button onClick={() => setShowlistbooks(!showlistbooks)}>
            animation
          </button>
        </div>
        <div className="bg-blue-500 rounded-lg  "></div>
        <div className="bg-blue-500 rounded-lg  "></div>
        <div className="bg-blue-500 rounded-lg  "></div>
        <div className="bg-blue-500 rounded-lg  "></div>
        <div className="bg-red-500 rounded-lg  "></div>
        <div className="bg-red-500 rounded-lg  "></div>
        <div className="bg-red-500 rounded-lg  "></div>
        <div className="bg-red-500 rounded-lg  "></div>
        <div className="bg-red-500 rounded-lg  "></div>
      </div>
    </div>
  );
};

export default Lbdisponibles;
