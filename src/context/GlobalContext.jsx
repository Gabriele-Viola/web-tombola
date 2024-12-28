import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const tabellone = Array.from({ length: 90 }, (_, i) => i + 1)
    const numbExt = Math.ceil(Math.random() * 90)
    console.log(tabellone);


    const values = {
        tabellone, numbExt
    }
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}
export { GlobalContextProvider, useGlobalContext }