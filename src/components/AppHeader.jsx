import { useGlobalContext } from "../context/GlobalContext"

export default function AppHeader() {
    const { prova } = useGlobalContext()
    return (
        <header>
            <h1>Tombola</h1>
        </header>
    )
}


