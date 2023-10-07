import React, {useState, useEffect} from 'react';

function Pokemon({avatar, name}) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

export default function AjaxHooks(){
    const[Pokemons, setPokemons]= useState ([])

    useEffect(()=>{
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            //console.log(json);
            json.results.forEach((el) => {
              fetch(el.url)
                .then((res) => res.json())
                .then((json) => {
                  let Pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                  };
                  
                  setPokemons((Pokemons)=>[...Pokemons,Pokemon])
                });
            });
          });
    },[])

    return(
        <>
            <h2>Peticiones Asincronas en Hooks</h2>
            {Pokemons.length === 0?(
                <h3>Cargando...</h3>
            ):(
                Pokemons.map((el)=>(
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>
                ))
            )}
        </>
    )
}