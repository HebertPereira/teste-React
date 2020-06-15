import React from 'react';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import '../node_modules/bootswatch/dist/darkly/bootstrap.css';
import NavBar from './component/navbar';
import { HashRouter } from 'react-router-dom';
import Router from './Router'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Router />
    </HashRouter>
  );
}

export default App;
