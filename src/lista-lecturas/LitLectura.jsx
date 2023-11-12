
const LitLectura = ({...prop}) => {
  const {showlistbooks, setShowlistbooks} =prop
  const ANIMATION_TRIGGER = showlistbooks === true
  console.log(showlistbooks)
  
  return (
    <div className={`bg-white rounded-xl  md:mr-4 transition-all duration-300 ease-in-out delay-0 
    ${ANIMATION_TRIGGER ? " md:h-[98%] md:w-[30%] h-[89%]  " : " absolute right-0 h-[50%] md:h-[0%]  md:w-[0%]"} `} 
    >
        {/* <p className={`${ANIMATION_TRIGGER ? "" : "hidden" } `} >lista de lectura</p> */}
        <p className={`${ANIMATION_TRIGGER ? "" : "hidden" } `} >lista de lectura</p>
    </div>
  )
}

export default LitLectura