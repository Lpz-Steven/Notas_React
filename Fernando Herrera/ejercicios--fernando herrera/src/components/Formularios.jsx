import React, { useState } from "react";

/*export default function Formularios (){
    const [nombre, setNombre]=useState("");
    const [sabor, setSabor]=useState("");
    const [lenguaje, setLenguaje]=useState("");

    const handleSubmit =e =>{ 
        e.preventDefault();
        alert("El formulario se ha enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)} />
                <p>Elige tu sabor js favorito</p>
                <input 
                type="radio" 
                id="vanilla" 
                name="sabor" 
                value="vanilla"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="vanilla">vanilla</label>
                <input 
                type="radio" 
                id="react" 
                name="sabor" 
                value="react"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="react">react</label>
                <input 
                type="radio" 
                id="angular" 
                name="sabor" 
                value="angular"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="angular">angular</label>
                <input 
                type="radio" 
                id="vue" 
                name="sabor" 
                value="vue"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="vue">vue</label>
                <input 
                type="radio" 
                id="svelte" 
                name="sabor" 
                value="svelte"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="svelte">svelte</label>
                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)}>
                    <option value="">---</option>
                    <option value="js">Javascript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
            </form>
        </>
    )
}*/
export default function Formularios (){
    const[form, setForm]= useState({})

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit =e =>{
        e.preventDefault();
        alert("El formulario se ha enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                value={form.nombre}
                onChange={handleChange} />
                <p>Elige tu sabor js favorito</p>
                <input 
                type="radio" 
                id="vanilla" 
                name="sabor" 
                value="vanilla"
                onChange={handleChange}/>
                <label htmlFor="vanilla">vanilla</label>
                <input 
                type="radio" 
                id="react" 
                name="sabor" 
                value="react"
                onChange={handleChange}/>
                <label htmlFor="react">react</label>
                <input 
                type="radio" 
                id="angular" 
                name="sabor" 
                value="angular"
                onChange={handleChange}/>
                <label htmlFor="angular">angular</label>
                <input 
                type="radio" 
                id="vue" 
                name="sabor" 
                value="vue"
                onChange={handleChange}/>
                <label htmlFor="vue">vue</label>
                <input 
                type="radio" 
                id="svelte" 
                name="sabor" 
                value="svelte"
                onChange={handleChange}/>
                <label htmlFor="svelte">svelte</label>
                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="js">Javascript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
}

