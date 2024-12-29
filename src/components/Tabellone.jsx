import { GlobalContextProvider, useGlobalContext } from "../context/GlobalContext"


export default function Tabellone() {
    const { tabellone, called } = useGlobalContext()
    return (
        <div className="tabellone">
            {tabellone.map(num => called.includes(num) ? <div className="call" key={num}>{num}</div> : <div className="casella" key={num}>{num}</div>
            )}
        </div>
    )
}