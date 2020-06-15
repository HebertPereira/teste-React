import React from 'react'
import '../app/ServiceClient'
import { withRouter, useLocation } from 'react-router-dom';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    acesso: true
}

class CadastroProduto extends React.Component {

    state = estadoInicial;

    OnChange = (event) => {

        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
        console.log(this.state)
    }

    validaAcesso = () => {

        let puxarDB = localStorage.getItem('_LOGIN-DB')

        let recuperarDB = JSON.parse(puxarDB)

        console.log(recuperarDB)
        console.log(recuperarDB.nome, recuperarDB.senha)

        let localAtual = '#/' + recuperarDB.nome.replace(' ', '') + '/Cadastro'
        let enderecoDestino = window.location.href;

        console.log(localAtual)
        console.log(enderecoDestino)
        //Preciso terminar...
        this.setState({acesso: true})
    }

    render() {
        //this.validaAcesso()
        if (this.state.acesso === true) {
            return (
                <div className="card">
                    <form id="frmProduto">
                        <div className="card-header">
                            Cadastre seu produto
                </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Nome: *</label>
                                        <input type="text" name="nome" value={this.setState.nome} onChange={this.OnChange} className="form-control" placeholder="Digite o nome ..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>SKU: *</label>
                                        <input type="text" name="sku" value={this.setState.sku} onChange={this.OnChange} className="form-control" placeholder="Digite o Sku ..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Descrição</label>
                                        <textarea className="form-control" value={this.setState.descricao} onChange={this.OnChange} placeholder="Digite a descrição ..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Preço: </label>
                                        <input type="text" name="preco" value={this.setState.preco} onChange={this.OnChange} className="form-control" placeholder="Digite o Preço ..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Fornecedor: </label>
                                        <input type="text" name="fornecedor" value={this.setState.fornecedor} onChange={this.OnChange} className="form-control" placeholder="Digite o Fornecedor ..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <button className="btn btn-success" onClick={this.validaAcesso}>Adicionar</button>
                                </div>
                                <div className="col-md-1">
                                    <button className="btn btn-warning" onClick={this.limpaCampos}>Limpar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        else{
            return(
                <div className="card">
                    <label>Não tem acesso</label>
                </div>
            )
        }
    }
}

export default withRouter(CadastroProduto);