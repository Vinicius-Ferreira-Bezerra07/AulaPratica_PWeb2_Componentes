import { useState } from "react"

export default function Aluno({nome, nota = 0}) {
    const[notaIndividual, setNotaIndividual] = useState(nota)

    function handleNotaIndividual(e){
        let n = e.target.value

        n = n < 0 ? 0.0 : n
        n = n > 10 ? 10.0 : n

        setNotaIndividual(n)
    }

    return (
        <div>
            <span>{nome}</span>
            <input value={notaIndividual}
            onChange={handleNotaIndividual}
            type="number"
            step="0.1"
            min="0"
            max="10"/>
        </div>
    )
}