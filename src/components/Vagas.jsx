import { useState } from 'react'
import vagaList from '../data/vagas.js'
import VagasCard from './VagasCard.jsx'

const tiposDeVaga = [...new Set(vagaList.map((vaga) => vaga.modelo))]
const areasDeVaga = [...new Set(vagaList.map((vaga) => vaga.area))]
const locaisDeVaga = [...new Set(vagaList.map((vaga) => vaga.local))]


function Vagas() {
    const [tipos, setTipos] = useState([])
    const [areas, setAreas] = useState([])
    const [locais, setLocais] = useState([])
    const [busca, setBusca] = useState('')
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    
    function alternar(lista, setLista, valor) {
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


    return(
        <>
          <main>
              <div className="conteudo__header">
                  <h2>Últimas vagas</h2>
                  <span>{vagasFiltradas.length} {vagasFiltradas.length === 1 ? 'vaga' : 'vagas'} - atualizado agora</span>
              </div>

              <input
                  className="form__input"
                  type="search"
                  placeholder="Buscar por cargo ou empresa..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
              />

              {vagasFiltradas.length === 0 && <p>Nenhuma vaga encontrada.</p>}

              {
                vagasFiltradas.map((vaga) => (
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