import { Link } from "react-router"
function VagasCard({ 
        id,       
        empresa,
        cargo,
        salario,
        modelo,
        publicado,}
) {
    return (
        <div className="card">
                  <div className="card__avatar card__avatar--grey">
                      V
                  </div>
                  <div className="card__text">
                      <p>{empresa}</p>
                      <h3 className="card__title">{cargo}</h3>
                      <span className="card__badge">{salario}</span>
                      <span className="card__badge">{modelo}</span>
                  </div>
                  <div className="card__actions">
                      <span>{publicado}</span>
                      <Link to={`/vaga/${id}`}>candidatar-se</Link>
                  </div>
              </div>
    )
}

export default VagasCard