import { Link } from "react-router"

function Footer() {
    return(
         <footer>
          <p>OpenBoard 2026 todos os direitos reservados</p>

          <nav>
              <Link to="/">Entrar</Link>
              <Link to="/publicar">Publicar Vaga</Link>
              <a href="">Sobre</a>
              <a href="">Privacidade</a>
          </nav>

      </footer>
    )
}

export default Footer