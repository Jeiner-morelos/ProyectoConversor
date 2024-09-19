import { useState } from 'react'

import './App.css'




function Conversor() {
 

 //variables 
  const [TextoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setvozATexto] = useState('')
  
  


 {/*funcion que contiene la variable para almacenar y convertir el texto a voz*/}
function cambiarTexto(evento){
 setTextoAVoz(evento.target.value)
}

{/*funcion para convertir el texto a vos */}
function ConvertirtextoAVoz(){
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance(TextoAVoz)
  synth.speak(utterThis)
}

{/*funcion que contiene la variable para almacenar y convertir la voz a texto*/}
function resultado(event){
  setvozATexto(event.results[0][0].transcript)
  console.log("prueba")
}

{/*Funcion para convertir la vos a texto*/}
function GrabarvozATexto(){
const recognition = new window.webkitSpeechRecognition()
recognition.lang = 'es-ES'
recognition.start()
recognition.onresult = resultado
}




return(

<div className="contenido">

<header>
<h1>Convertidor de esperanza</h1>

<p className="descripcion">Bienvenidos a la pagina llamada convetidor de esperanza, esta pagina tiene como funcion permitirite convestir texto a voz y voz a texto, es decir todo lo que escribas lo podras escuchar, todo lo que hables en el microfono, lo podras ver escrito.</p>
 </header>

{/*Estructura del conversor de texto a voz*/}
<section className="textoavoz">
<h2>Conversor de Texto a Voz</h2>
<p>Escriba en la casilla para convertir el texto a voz</p>
<input type="text" id="TextoAVoz" className="input-textoavoz" value={TextoAVoz} onChange={cambiarTexto}/>
<button className="btn-textoavoz" onClick={ConvertirtextoAVoz}>Convertir</button>
</section>

{/*Estructura del conversor de voz a texto*/}
<section className="vozatexto">
<h2>Conversor de Voz a Texto</h2>
<p>Presione el microfono y hable para convertir la voz a texto</p>
<button  className="btn-vozatexto" onClick={GrabarvozATexto}></button> 

{/*funcion que presenta el resultado del conversor de voz a texto*/}
<div className="migrofono">
 { vozATexto}
 </div>
 
 </section>

 </div>


  );

}
 

export default Conversor