import depoimentosList from '../data/depoimentos.js'

function Depoimentos() {
    return (
        <div className="depoimentos">
            {depoimentosList.map((item) => (
                <div key={item.id}>
                    <p>{item.texto}</p>
                    <span>{item.nome}</span>
                    <span>{item.cargo}</span>
                </div>
            ))}
        </div>
    )
}

export default Depoimentos
