import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [showlistbooks, setShowlistbooks] = useState(null);
  const [listadelectura, setListadelectura] = useState([]);

  return (
    <Context.Provider
      value={[
        showlistbooks,
        setShowlistbooks,
        setListadelectura,
        listadelectura,
      ]}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
