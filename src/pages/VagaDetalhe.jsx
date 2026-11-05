import { useParams } from "react-router";
import vagaList from '../data/vagas.js'
function VagaDetalhe() {
    const {id} = useParams();

    console.log("vagaList", vagaList)

    const vagaSelecionada = vagaList.filter(item => {
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
    return(
        <div>
            <h1>Detalhe da Vaga {id}</h1>
            <p>Informações sobere a vaga selecionada</p>
        </div>

    )
}

export default VagaDetalhe;