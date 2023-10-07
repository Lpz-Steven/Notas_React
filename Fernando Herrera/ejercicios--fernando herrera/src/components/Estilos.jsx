import React from 'react';
import "./Estilos.css" ;
import './Estilos.scss';
export default function Estilos(){
    return(
        <section className='estilos'>
            <h2>Estilos css en react</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem", margin:"1rem"}}>Estilos en linea(atributo style)</h3>
            <h3 className='bg-sass'>Estilos con Sass</h3>
        </section>
    )
}