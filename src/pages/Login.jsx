import { useState } from 'react'
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setErro('Preencha o email e a senha.');
            return;
        }

        if (!email.includes('@')) {
            setErro('Digite um email válido.');
            return;
        }

        setErro('');
        navigate('/home');
    }

    return (
        <div className="login">
            <form className="login__card" onSubmit={handleSubmit}>
                <h1 className="login__logo">OpenBoard</h1>
                <p className="login__subtitulo">Entre para ver as melhores vagas em startups</p>

                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        className="form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="seu@email.com"
                    />
                </label>

                <label htmlFor="password">
                    Senha
                    <input
                        id="password"
                        className="form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Sua senha"
                    />
                </label>

                {erro && <div className="erro">{erro}</div>}

                <button type="submit" className="btn">Entrar</button>
            </form>
        </div>
    )
}

export default Login