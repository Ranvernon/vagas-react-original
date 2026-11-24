import { Link } from "react-router"

function Header() {
    return (
        <header>
          <h1>OpenBoard</h1>
          <div>
              <Link to="/">Entrar</Link>
              <Link to="/publicar" className="btn">Publicar Vaga - $299</Link>
          </div>
      </header>
    )
}

export default Header;