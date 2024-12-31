import { createContext, useContext, useState } from "react";
import Tabellone from "../components/Tabellone";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const tabellone = Array.from({ length: 90 }, (numero, i) => numero = i + 1)
    const [numbExt, setNumbExt] = useState('Start')
    const [called, setCalled] = useState([])
    const [first, setFirst] = useState([])
    const [numeri, setNumeri] = useState(tabellone)
    const [estratti, setEstratti] = useState([])

    // const provaArr = [1, 2, 4, 7, 8, 9]
    // const arrProva = [1, 4, 2, 5, 7, 8]
    // const altraProv = new Set(provaArr.map(number => arrProva.includes(number)))
    // console.log(provaArr.map(number => arrProva.includes(number)));
    // console.log(...altraProv);



    function prova() {
        const estratto = numeri[numRandom(numeri.length) - 1]
        setEstratti((prevEstratti) => [...prevEstratti, estratto])
        setNumeri(numeri.filter(i => i !== estratto))
        console.log(estratto);

    }
    console.log(estratti, numeri);


    function numRandom(rangeNum) {
        const numb = Math.ceil(Math.random() * rangeNum)
        console.log(numb);

        return numb

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