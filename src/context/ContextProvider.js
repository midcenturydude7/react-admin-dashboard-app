import React from "react";
import { useState } from "react";

const StateConext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(initialState);
  const [screenSize, setScreenSize] = React.useState(undefined);

  function handleClick(clicked) {
    setIsClicked({ ...initialState, [clicked]: true });
  }

  return (
    <StateConext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}>
      {children}
    </StateConext.Provider>
  );
}

export const useStateContext = () => React.useContext(StateConext);
