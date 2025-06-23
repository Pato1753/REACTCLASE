'use client'

import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface Persona{  
  nombre : string,
  apellido : string
}

let initialStatePersona:Persona = {  //es como una clase donde tiene atributos de persona
  nombre:"", // guarda un string
  apellido:""
}

export default function Home() {
  const miStorange = window.localStorage

  const [persona, setpersona] = useState(initialStatePersona)
  const [personas, setpersonas] = useState<Persona[]>([])
  const[eNombre, setENombre] = useState("")
  const [eApellido, seteApellido] = useState("")
  useEffect(()=>{
    let listadoStr = miStorange.getItem("Personas")
    if(listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setpersonas(listado)
    }
  },[])

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
    if(persona.apellido.length < 3){
      seteApellido("Debe tener mas de 3 caracteres")
    }
    else{
      seteApellido("")
    }
  }

  const handleRegistrar = ()=>{

    miStorange.setItem("personas",JSON.stringify([...personas,persona]))
  }

// investiga

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
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/> <br />
        <span>{eApellido}</span><br />
        <button
        onClick={()=>handleRegistrar()}>Registrar</button>

    </form>
);
}