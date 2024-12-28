import { GlobalContextProvider, useGlobalContext } from "../context/GlobalContext"


export default function Tabellone() {
    const { tabellone } = useGlobalContext(GlobalContextProvider)
    return (
        <div className="tabellone">
            {tabellone.map(num => <div key={num}>{num}</div>)}
        </div>
    )
}