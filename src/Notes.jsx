import { useState } from "react"
import Aluno from "./Aluno"

export default function Notes({}) {
    
    const alunos = ["Vinicius", "Jhonatas Wylly", "Jhonatas Heroold", "Thiago"]
    const [notaPadrao, setNotaPadrao] = useState(8)
    
    return(
        <div>
            <h1>Lançar nota</h1>
            <p>
                Disciplina:
                <input type="text"/>
            </p>
            <p>
                <span>Aluno</span>
                <span>Nota</span>
            </p>

            {alunos.map((al, index) => 
                <Aluno key={index} nome={al} nota={setNotaPadrao}/>    
            )}
            
            <button onClick={() => setNotaPadrao(0)}>Limpar</button>
            <button>Salvar</button>
        </div>
    )
}