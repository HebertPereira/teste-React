import React from 'react';
import '../css/login.css';
import { withRouter } from 'react-router-dom';

function Login() {

    const LOGIN = '_LOGIN-DB'
    let nomeUser = '';
    let senhaUser = '';

    return (
        <>
            <div className="card-mod">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Nome/E-mail:</label>
                            <input type="text" name="nome/email" className="form-control" placeholder="Digite o nome ou e-mail ..." onChange={(event) => {
                                nomeUser = event.target.value
                            }} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Senha:</label>
                            <input type="password" name="senha" className="form-control" placeholder="Digite a sua senha..." onChange={(event) => {
                                senhaUser = event.target.value
                            }} />
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => {
                        console.log(nomeUser)
                        if (nomeUser !== '' || senhaUser !== '') {
                            nomeUser = nomeUser.strip()
                            const login = {nome: nomeUser, senha: senhaUser}
                            localStorage.setItem(LOGIN, JSON.stringify(login))
                            alert('Login efetuado com sucesso')
                        } else {
                            alert('Dados invalidos! Verifique os campos e tente novamente.')
                        }
                    }}>Vamos la!</button>
                </div>
            </div>
        </>
    )
}

export default withRouter (Login);