import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Bem Vindo!</h1>
            <p className="lead">Clique em login para entrar no seu sistema.</p>
            <div className="my-4">
                <p>Se não tiver um login ou está tendo problemas para efetua-lo contato o administrador do sistema</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/login" role="button">Login</Link>
                </p>
            </div>
        </div>
    )
}
export default Home;