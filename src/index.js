import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render( < App /> , document.getElementById('root'));

// - Algo como "recarregamento de módulos em tempo real" - (ou HRM) é uma ferramenta que permite a atualização da aplicação em seu navegador, sem que este faça o recarregamento da página.

if (module.hot) {
    module.hot.accept();
}
