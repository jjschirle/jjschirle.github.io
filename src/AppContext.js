// https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/appContext.js
import React from "react";
// uses React to handle light and dark mode
const AppContext = React.createContext();

const AppProvider = function ({ children }) {
    const [theme, setTheme] = React.useState("light");
    const [isExpanded, setExpanded] = React.useState(false);
  
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  
    const toggleExpanded = () => setExpanded((prevState) => !prevState);
  
    const closeExpanded = function () {
      setTimeout(function () {
        setExpanded(false);
      }, 250);
    };
    
    return (
        <AppContext.Provider
          value={{
            theme,
            setTheme,
            toggleTheme,
            isExpanded,
            toggleExpanded,
            closeExpanded,
          }}
        >
          {children}
        </AppContext.Provider>
      );
    };
    
    export const useAppContext = () => React.useContext(AppContext);
    
    export { AppContext, AppProvider };