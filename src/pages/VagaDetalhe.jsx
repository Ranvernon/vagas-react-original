import { useState } from "react";
import { Link, useParams } from "react-router";
import vagaList from '../data/vagas.js'
import Header from '../components/Header'
import Footer from '../components/Footer'

function VagaDetalhe() {
    const {id} = useParams();
    const [candidatado, setCandidatado] = useState(false);

    const vagasLoop = vagaList.filter(item => {
        return item.id === Number(id)
    });

    if (vagasLoop.length === 0) {
        return (
            <>
                <Header />
                <div className="detalhe">
                    <Link to="/home" className="detalhe__voltar">← Voltar</Link>
                    <div className="detalhe__card">
                        <h1 className="detalhe__cargo">Vaga com o ID {id} não encontrada</h1>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    const vagaSelecionada = vagasLoop[0];

    
    const posicao = vagaList.indexOf(vagaSelecionada);

    
    const proximaVaga = vagaList[(posicao + 1) % vagaList.length];
    const vagaAnterior = vagaList[(posicao - 1 + vagaList.length) % vagaList.length];

    return(
        <>
            <Header />

            <div className="detalhe">
                <Link to="/home" className="detalhe__voltar">← Voltar</Link>

                <div className="detalhe__card">
                    <div className="card__avatar">{vagaSelecionada.empresa[0]}</div>
                    <p className="detalhe__empresa">{vagaSelecionada.empresa}</p>
                    <h1 className="detalhe__cargo">{vagaSelecionada.cargo}</h1>

                    <div className="detalhe__badges">
                        <span className="card__badge">{vagaSelecionada.salario}</span>
                        <span className="card__badge">{vagaSelecionada.modelo}</span>
                        <span className="card__badge">{vagaSelecionada.area}</span>
                        <span className="card__badge">{vagaSelecionada.local}</span>
                    </div>

                    <p className="detalhe__publicado">Publicado há {vagaSelecionada.publicado}</p>

                    <button
                        className="btn"
                        onClick={() => setCandidatado(true)}
                        disabled={candidatado}
                    >
                        {candidatado ? 'Candidatura enviada' : 'Candidatar-se'}
                    </button>

                    {candidatado && (
                        <div className="alert">
                            Candidatura enviada para {vagaSelecionada.empresa}! Boa sorte 🍀
                        </div>
                    )}
                </div>

                <div className="detalhe__nav">
                    <Link
                        to={`/vaga/${vagaAnterior.id}`}
                        className="btn btn--claro"
                        onClick={() => setCandidatado(false)}
                    >
                        ← Anterior
                    </Link>

                    <span>{posicao + 1} de {vagaList.length}</span>

                    <Link
                        to={`/vaga/${proximaVaga.id}`}
                        className="btn"
                        onClick={() => setCandidatado(false)}
                    >
                        Próxima →
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default VagaDetalhe;