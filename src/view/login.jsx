import React from 'react';
import '../css/login.css';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const LOGIN = '_LOGIN-DB'
const valorPadrao = {
    nomeUser: '',
    senhaUser: ''
}



class Login extends React.Component {

    state = valorPadrao;
    render() {
        return (
            <>
                <div className="card-mod">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Nome/E-mail:</label>
                                    <input type="text" name="nomeEmail" className="form-control" placeholder="Digite o nome ou e-mail ..." onChange={(event) => {
                                        this.setState({ nomeUser: event.target.value })
                                        console.log(this.state.nomeUser)
                                    }} />
                                </div>
                            </div>
                        </form>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Senha:</label>
                                <input type="password" name="senha" className="form-control" placeholder="Digite a sua senha..." onChange={(event) => {
                                    this.setState({ senhaUser: event.target.value })
                                    console.log(this.state.senhaUser)
                                }} />
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            console.log(this.state.nomeUser)
                            if (this.state.nomeUser !== '' || this.state.senhaUser !== '') {
                                //this.setState({nomeUser : this.state.nomeUser.strip()})
                                const login = { nome: this.state.nomeUser, senha: this.state.senhaUser }
                                localStorage.setItem(LOGIN, JSON.stringify(login))
                                alert('Login efetuado com sucesso')
                                window.location.href = '#/' + this.state.nomeUser.replace(' ', '') +'/Cadastro'
                            } else {
                                alert('Dados invalidos! Verifique os campos e tente novamente.')
                            }
                        }}>Vamos la!</button>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Login);