import React, { useState } from "react";

const Context = React.createContext(["light", () => { }]);

function ThemeContext({ children }) {

    const [currentTheme, setCurrentTheme] = useState("dark");

    function toggleTheme() {
        setCurrentTheme(prev => prev === "light" ? "dark" : "light");
    }

    return (
        <Context.Provider value={{
            currentTheme,
            toggleTheme
        }
        }>
            {children}
        </Context.Provider>
    );

}



export { Context, ThemeContext };