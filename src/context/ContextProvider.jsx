import { createContext, useState } from "react";

export const Context = createContext(null)

export const ContextProvider = (props) => {
  const [showlistbooks, setShowlistbooks] = useState(null)

  return (
    <Context.Provider value={[showlistbooks, setShowlistbooks ]} >
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider