function VagasCard(
   
{        empresa,
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
                      <span>2h</span>
                      <a href="">candidatar-se</a>
                  </div>
              </div>
    )
}

export default VagasCard