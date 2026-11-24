import { useState } from "react";
import { Link } from "react-router";
import Header from '../components/Header'
import Footer from '../components/Footer'


const formVazio = {
    empresa: '',
    cargo: '',
    salario: '',
    modelo: '',
    area: '',
    local: '',
}

function PublicarVaga() {
    const [form, setForm] = useState(formVazio)
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState('')

    
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

   
    function salvar() {
    }

    function handleSubmit(e) {
        e.preventDefault()

        
        const algumVazio = Object.values(form).some((valor) => valor.trim() === '')

        if (algumVazio) {
            setErro('Preencha todos os campos antes de publicar.')
            setSucesso('')
            return
        }

        salvar()
        setErro('')
        setSucesso('Vaga publicada com sucesso!')
        setForm(formVazio)
    }

    return (
        <>
            <Header />

            <div className="detalhe">
                <Link to="/home" className="detalhe__voltar">← Voltar</Link>

                <form className="detalhe__card publicar" onSubmit={handleSubmit}>
                    <h1 className="detalhe__cargo">Publicar vaga</h1>

                    <label>
                        Empresa
                        <input className="form__input" name="empresa" value={form.empresa}
                            onChange={handleChange} placeholder="Ex.: Tech Solutions" />
                    </label>

                    <label>
                        Cargo
                        <input className="form__input" name="cargo" value={form.cargo}
                            onChange={handleChange} placeholder="Ex.: Desenvolvedor Front-end" />
                    </label>

                    <label>
                        Salário
                        <input className="form__input" name="salario" value={form.salario}
                            onChange={handleChange} placeholder="Ex.: R$ 5.000,00" />
                    </label>

                    <label>
                        Modelo
                        <select className="form__input" name="modelo" value={form.modelo} onChange={handleChange}>
                            <option value="">Selecione...</option>
                            <option value="CLT">CLT</option>
                            <option value="PJ">PJ</option>
                            <option value="Efetivo">Efetivo</option>
                            <option value="Estágio">Estágio</option>
                        </select>
                    </label>

                    <label>
                        Área
                        <select className="form__input" name="area" value={form.area} onChange={handleChange}>
                            <option value="">Selecione...</option>
                            <option value="Engenharia">Engenharia</option>
                            <option value="Designer">Designer</option>
                            <option value="Gestão">Gestão</option>
                            <option value="Desenvolvedor">Desenvolvedor</option>
                        </select>
                    </label>

                    <label>
                        Localização
                        <input className="form__input" name="local" value={form.local}
                            onChange={handleChange} placeholder="Ex.: São Paulo" />
                    </label>

                    {erro && <div className="erro">{erro}</div>}
                    {sucesso && <div className="alert">{sucesso}</div>}

                    <button type="submit" className="btn">Salvar</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default PublicarVaga;