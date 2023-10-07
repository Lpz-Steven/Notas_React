import React, {useState, useEffect} from 'react';


export default function ScrollHooks (){
const [scrollY, setScrollY]= useState(0)

useEffect(()=>{
    console.log("Fase de montaje")

     const detectarScroll=()=>{
        setScrollY(window.pageYOffset);
     }  
     window.addEventListener("scroll", detectarScroll);
})
    return(
        <>
            <h2>Hooks useEffect y el ciclo de vida </h2>
            <p>Scrool Y del Navegador{scrollY}px</p>
        </>
    )
}