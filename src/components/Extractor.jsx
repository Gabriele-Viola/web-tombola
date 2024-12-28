export default function Extractor() {
    const numberEx = Math.ceil(Math.random() * 90)
    return (
        <div className="extractor">
            <div className="menu">
                <h3>last number called</h3>
                <div className="display">
                    {numberEx}
                </div>
                <div className="callToAction">

                    <button onClick={() => handleRandom()}>Estrai</button>
                    <button>Termina Sessione</button>
                </div>
            </div>

        </div>
    )
}