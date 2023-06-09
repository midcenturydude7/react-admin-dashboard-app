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
  const [isClicked, setIsClicked] = React.useState(initialState);
  const [screenSize, setScreenSize] = React.useState(undefined);
  const [currentColor, setCurrentColor] = React.useState("#03C9D7");
  const [currentMode, setCurrentMode] = React.useState("Light");
  const [themeSettings, setThemeSettings] = React.useState(false);

  function setMode(e) {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  }

  function setColor(color) {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  }

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
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}>
      {children}
    </StateConext.Provider>
  );
}

export const useStateContext = () => React.useContext(StateConext);
