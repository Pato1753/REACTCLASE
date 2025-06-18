'use client'

import { useState } from "react";

interface Persona{
  nombre : string,
  apellido : string
}

let initialStatePersona:Persona = {
  nombre:"",
  apellido:""
}

export default function Home() {
  const [persona, setpersona] = useState(initialStatePersona)

  const[eNombre, setENombre] = useState("")
  const handlePersona = (name:string,value:string)=>{
    setpersona(
      {...persona,[name]:value}
    )
    if(persona.nombre.length < 3){ //persona.nombre es como se accede a una informacion en especifico
      setENombre("Debe tener mas de 3 caracteres")                              // es como al acceder a una valor de un indice ocupando "ejemplo[1]"
    }
    else{
      setENombre("")
    }
  }
  return (
    <form>
      <h1>Hola {persona.nombre} {persona.apellido}</h1>
      <label></label> <br />
      <input 
        name="nombre"
        type="text"
        placeholder="Nombre" 
        onChange={(e)=> handlePersona(e.currentTarget.name,e.currentTarget.value)}/> <br />
        <span>{eNombre}</span> <br />

      <label></label><br />
      <input 
        name="apellido" 
        type="text" 
        placeholder="Apellido"       
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
        <span></span><br />
        <button>Registrar</button>

    </form>

);
}
