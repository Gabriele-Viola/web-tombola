import { useGlobalContext } from "../context/GlobalContext"

export default function Extractor() {
    const { handleRandom, numbExt } = useGlobalContext()
    return (
        <div className="extractor">
            <div className="menu">
                <h3>last number called</h3>
                <div className="display">
                    {numbExt}
                </div>
                <div className="callToAction">

                    <button onClick={() => handleRandom()}>Estrai</button>
                    <button>Termina Sessione</button>
                </div>
            </div>

        </div>
    )
}