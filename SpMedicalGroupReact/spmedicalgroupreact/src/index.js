import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Login/App';
import NaoEncontrada from "./Pages/NaoEncontrada/NaoEncontrada";
import * as serviceWorker from './serviceWorker';
import {usuarioAutenticado} from './services/auth';
import{Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import CadastraConsulta from './Pages/CadastraConsulta/CadastraConsulta';
import ListaConsulta from './Pages/ListaConsulta/ListaConsulta';
import DadosSistema from './Pages/DadosSistema/DadosSistema';

const Permissao = ({component : Component}) => (
     <Route 
         render = {props => usuarioAutenticado() ?
         (<Component {...props} />) :
         (<Redirect to={{pathname: '/', state : {from : props.location}}} />)
         }
     />
 );

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Permissao path="/cadastraconsulta" component={CadastraConsulta} />
                <Permissao path="/listaconsulta" component={ListaConsulta} />
                <Permissao path="/dadossistema" component={DadosSistema} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));
serviceWorker.unregister();
