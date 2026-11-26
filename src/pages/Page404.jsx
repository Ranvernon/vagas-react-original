import { Link } from "react-router"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Page404() {
    return(
        <>
            <Header />

            <div className="pagina404">
                <h1 className="pagina404__numero">404</h1>
                <p className="pagina404__texto">Ops! Essa página não existe.</p>
                <Link to="/home" className="btn">Ver vagas</Link>
            </div>

            <Footer />
        </>
    )
}

export default Page404