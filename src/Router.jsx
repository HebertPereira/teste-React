import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './view/home'
import CadastroProduto from './view/cadastro'
import Login from './view/login'

export default () =>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' to component={Home}/>
                <Route exact path='/:nome/Cadastro/' to component={CadastroProduto}/>
                <Route exact path='/login' to component={Login}/>
            </Switch>
        </HashRouter>
    )
}