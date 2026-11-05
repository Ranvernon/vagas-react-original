import { useParams } from "react-router";
import vagaList from '../data/vagas.js'
function VagaDetalhe() {
    const {id} = useParams();

    console.log("vagaList", vagaList)

    const vagasLoop = vagaList.filter(item => {
        console.log('Item', item)
        return item.id === Number(id)
        

    });

    if (vagasLoop.lenght === 0) {
        return (
            <div>
                <h1>Vaga com ID {id} não encontrada</h1>
            </div>
        )
    }

    const vagaSelecionada = vagasLoop[0];
    return(
        <div>
            <h1>Detalhe da Vaga {id}</h1>
            <h3>{vagaSelecionada.cargo}</h3>
            <h3>{vagaSelecionada.empresa}</h3>
            <h3>{vagaSelecionada.cargo}</h3>
            <h3>{vagaSelecionada.salario}</h3>
            <h3>{vagaSelecionada.modelo}</h3>
            <h3>{vagaSelecionada.area}</h3>
            <h3>{vagaSelecionada.publicado}</h3>
        </div>

    )
}

export default VagaDetalhe;