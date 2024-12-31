import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const tabellone = Array.from({ length: 90 }, (numero, i) => numero = i + 1)
    const [numbExt, setNumbExt] = useState('Start')
    const [called, setCalled] = useState([])
    const [first, setFirst] = useState([])
    const [numeri, setNumeri] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [estratti, setEstratti] = useState([])

    function prova() {
        console.log(numRandom(numeri.length));

        const estratto = numeri[numRandom(numeri.length - 1)]
        setEstratti((prevEstratti) => [...prevEstratti, estratto])
        setNumeri(numeri.filter(i => i !== estratto))
        console.log(estratto);



    }
    console.log(estratti, numeri);


    function numRandom(rangeNum) {
        return Math.ceil(Math.random() * rangeNum)
    }



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

    // cartella primi 1 di 6
    // const prima = called?.filter(num => lastNumb(num) <= 5 || lastNumb(num) !== 0 && num <= 25)

    // console.log(prima);

    const values = {
        tabellone, numbExt, handleRandom, called, prova
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