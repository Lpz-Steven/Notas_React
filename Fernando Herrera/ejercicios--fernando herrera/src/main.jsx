import React from "react";
import  ReactDOM  from "react-dom/client";
import './style.css';
import { CounterApp } from "./CounterApp";
import {ClaseComponente} from "./components/Componente"
import { FuncComponente } from "./components/Componente";
import {Propiedades} from "./components/propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/renderizado";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
//import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHook";
import RelojHooks from "./components/RelojHooks";
//import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados ";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {0}></CounterApp>
        <ClaseComponente></ClaseComponente>
        <FuncComponente></FuncComponente>
        <Propiedades numero ={19}></Propiedades>
        <Estado></Estado>
        <RenderizadoCondicional></RenderizadoCondicional>
        <RenderizadoElementos></RenderizadoElementos>
        <EventosES6></EventosES6>
        <EventosES7></EventosES7>
        <MasSobreEventos></MasSobreEventos>
        <Padre></Padre>
        <CicloVida></CicloVida>
        <ContadorHooks></ContadorHooks>
        <ScrollHooks></ScrollHooks>
        <RelojHooks></RelojHooks>
        <HooksPersonalizados></HooksPersonalizados> 
        <Referencias></Referencias>
        <Formularios></Formularios>
        <Estilos></Estilos>
    </React.StrictMode> 
)