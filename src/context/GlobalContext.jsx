import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const tabellone = Array.from({ length: 90 }, (_, i) => i + 1)
    const [numbExt, setNumbExt] = useState('Start')
    const [called, setCalled] = useState([])
    const [first, setFirst] = useState([])




    function handleRandom() {
        if (called.length >= 90) {
            setNumbExt('Stop')

        }
        while (called.length < 90 || called.length == 0) {
            const numbExt = Math.ceil(Math.random() * 90)

            if (!called.includes(numbExt)) {
                console.log('hi');
                setCalled((prevCalled) => [...prevCalled, numbExt])


                return setNumbExt(numbExt)


            } else {
                console.log('nope');

            }


        }
    }
    function lastNumb(numberToVerify) {
        numberToVerify.toString().split('').reverse().join('')[0]

    }


    const prima = called?.filter(num => lastNumb(num) <= 5 || lastNumb(num) !== 0 && num <= 25)

    console.log(prima);

    const values = {
        tabellone, numbExt, handleRandom, called
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