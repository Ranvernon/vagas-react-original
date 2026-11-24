import { useState } from 'react'
import vagaList from '../data/vagas.js'
import VagasCard from './VagasCard.jsx'

const tiposDeVaga = [...new Set(vagaList.map((vaga) => vaga.modelo))]
const areasDeVaga = [...new Set(vagaList.map((vaga) => vaga.area))]
const locaisDeVaga = [...new Set(vagaList.map((vaga) => vaga.local))]

// vagas aparecem em cada página
const VAGAS_POR_PAGINA = 5


function Vagas() {
    const [tipos, setTipos] = useState([])
    const [areas, setAreas] = useState([])
    const [locais, setLocais] = useState([])
    const [busca, setBusca] = useState('')
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const [pagina, setPagina] = useState(1)

    function alternar(lista, setLista, valor) {
        setPagina(1) // filtro mudou: volta para a primeira página
        if (lista.includes(valor)) {
            setLista(lista.filter((item) => item !== valor))
        } else {
            setLista([...lista, valor])
        }
    }

    function limparFiltros(e) {
        e.preventDefault()
        setTipos([])
        setAreas([])
        setLocais([])
        setBusca('')
        setPagina(1)
        setMostrarAlerta(true)
        setTimeout(() => setMostrarAlerta(false), 2000)
    }

    const vagasFiltradas = vagaList.filter((vaga) => {
        const passaTipo = tipos.length === 0 || tipos.includes(vaga.modelo)
        const passaArea = areas.length === 0 || areas.includes(vaga.area)
        const passaLocal = locais.length === 0 || locais.includes(vaga.local)

        // Busca sem diferenciar maiúsculas de minúsculas, no cargo ou na empresa
        const texto = busca.trim().toLowerCase()
        const passaBusca =
            texto === '' ||
            vaga.cargo.toLowerCase().includes(texto) ||
            vaga.empresa.toLowerCase().includes(texto)

        return passaTipo && passaArea && passaLocal && passaBusca
    })

    
    const totalPaginas = Math.max(1, Math.ceil(vagasFiltradas.length / VAGAS_POR_PAGINA))
    const inicio = (pagina - 1) * VAGAS_POR_PAGINA
    const vagasDaPagina = vagasFiltradas.slice(inicio, inicio + VAGAS_POR_PAGINA)


    return(
        <>
          <main>
              <div className="conteudo__header">
                  <h2>Últimas vagas</h2>
                  <span>{vagasFiltradas.length} {vagasFiltradas.length === 1 ? 'vaga' : 'vagas'} - atualizado agora</span>
              </div>

              <input
                  className="form__input busca"
                  type="search"
                  placeholder="Buscar por cargo ou empresa..."
                  value={busca}
                  onChange={(e) => {
                      setBusca(e.target.value)
                      setPagina(1)
                  }}
              />

              {vagasFiltradas.length === 0 && <p className="vazio">Nenhuma vaga encontrada.</p>}

              {
                vagasDaPagina.map((vaga) => (
                    <VagasCard
                    id={vaga.id}
                    key={vaga.id}
                    empresa={vaga.empresa}
                    cargo={vaga.cargo}
                    salario={vaga.salario}
                    modelo={vaga.modelo}
                    publicado={vaga.publicado}
                    />
                ))
                }

              {totalPaginas > 1 && (
                  <div className="paginacao">
                      <button
                          className="btn btn--claro"
                          onClick={() => setPagina(pagina - 1)}
                          disabled={pagina === 1}
                      >
                          ← Anterior
                      </button>

                      <span>Página {pagina} de {totalPaginas}</span>

                      <button
                          className="btn"
                          onClick={() => setPagina(pagina + 1)}
                          disabled={pagina === totalPaginas}
                      >
                          Próxima →
                      </button>
                  </div>
              )}

          </main>

          <aside>
              <div className="conteudo__header">
                  <h3>Filtros</h3>
                  <a id="btn-limpar" href="" onClick={limparFiltros}>limpar</a>
              </div>
              
              {mostrarAlerta && <div className="alert">Filtros limpos!</div>}

              <div className="conteudo__filter">
                  <p>Tipo de vaga</p>
                  {tiposDeVaga.map((tipo) => (
                      <label key={tipo}>
                          <input
                              className="filtro"
                              type="checkbox"
                              checked={tipos.includes(tipo)}
                              onChange={() => alternar(tipos, setTipos, tipo)}
                          />{' '}
                          {tipo}
                      </label>
                  ))}
              </div>

              

              <div className="conteudo__filter">
                  <p>Área</p>
                  {areasDeVaga.map((area) => (
                      <label key={area}>
                          <input
                              className="filtro"
                              type="checkbox"
                              checked={areas.includes(area)}
                              onChange={() => alternar(areas, setAreas, area)}
                          />{' '}
                          {area}
                      </label>
                  ))}
              </div>



              <div className="conteudo__filter">
                  <p>Localização</p>
                  {locaisDeVaga.map((local) => (
                      <label key={local}>
                          <input
                              className="filtro"
                              type="checkbox"
                              checked={locais.includes(local)}
                              onChange={() => alternar(locais, setLocais, local)}
                          />{' '}
                          {local}
                      </label>
                  ))}
              </div>
          </aside>
      </>
    )
}

export default Vagas