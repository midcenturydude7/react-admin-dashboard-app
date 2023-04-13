import React from "react";

const StateConext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = React.useState(true);

  return (
    <StateConext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateConext.Provider>
  );
}

export const useStateContext = () => React.useContext(StateConext);
