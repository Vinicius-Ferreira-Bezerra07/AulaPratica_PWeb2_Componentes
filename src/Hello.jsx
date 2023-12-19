import { useState } from "react"

function Hello({name = "World", children}) {
    
    const [age, setAge] = useState(18)
    const [occ, setOcc] = useState("Professor")

    return (
        <>
            <h1>Hello, {name}!</h1>
            <h2>Seu filho é {children}</h2>
            <p>Sua idade é {age}</p>
            <p>Sua Profição é {occ}</p>
            <button
                onClick={() => setAge(i => ++i)}
            >
                + 1 ano
            </button>
            <button
                onClick={() => setAge(i => i + 10)}
            >
                + 10 ano
            </button>
            <input type="text" value={occ} onChange={(e) => setOcc(e.target.value)}/>
        </>
    )
}

export default Hello