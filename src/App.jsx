
import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import Conversor from './Conversor'


function App() {
  
  
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [usuarioRegistrarse, setUsuarioRegistrarse] = useState('');
  const [claveRegistrarse, setClaveRegistrarse] = useState('');
  const [logeado, setLogeado] = useState(false);

  

  function mostrar_registrarse(){

    let iniciar = document.getElementById("iniciar-seccion");
    let registrar = document.getElementById("registrarse");
    
    iniciar.style.display = "none";
    
    registrar.style.display= "block";
    
    }
    
    
    function mostrar_iniciar(){
    
    let iniciar = document.getElementById("iniciar-seccion");
    let registrar = document.getElementById("registrarse");
    
    
    iniciar.style.display = "block";
    registrar.style.display= "none";
    
    }
     



 function cambiarUsuario(evento){
  setUsuario(evento.target.value)
 }

 function cambiarClave(evento){
  setClave(evento.target.value)
 }

 function cambiarUsuarioRegistrarse(evento){
  setUsuarioRegistrarse(evento.target.value)
 }

 function cambiarClaveRegistrarse(evento){
  setClaveRegistrarse(evento.target.value)
 }

 async  function Ingresar (e) { 
  e.preventDefault();
   const peticion = await fetch('http://localhost:3000/login?usuario='+usuario+'&&clave='+clave,{credentials:'include'})
    if(peticion.ok){
     setLogeado(true)
     
    }else{
      alert('usuario incorrecto')
    }
}


async  function Registrar (e) { 
  e.preventDefault();
   const peticion = await fetch('http://localhost:3000/registrarse?usuario='+usuarioRegistrarse+'&&clave='+claveRegistrarse,{credentials:'include'})
    if(peticion.ok){
     setLogeado(true)
     
    }else{
      alert('Usuario no registrado')
    }
}


async  function validar () { 
  
   const peticion = await fetch('http://localhost:3000/validar',{credentials:'include'})
    if(peticion.ok){
     setLogeado(true)
    }
}

useEffect(() => {
}, []) 



if(logeado){
  
  return( 
   <>
 <Conversor/>
   
   </>
 )}
  return (
   
   
    < div className="login">
      
      <section id="iniciar-seccion">
     <form>
      <h1>Inicio de seccion</h1>

      <div className="inpust">
      <input type="text" name="usuario"  id="usuario" value ={usuario} onChange={cambiarUsuario} placeholder="Usuario" required/>
      <i class='bx bxs-user'></i>
      </div>

      <div className="inpust">
      <input type="password" name="clave"  id="clave"  value ={clave} onChange={cambiarClave} placeholder="Contraseña" required/>
      <i class='bx bxs-lock-alt' ></i>
      </div>
      
      <div className="register-link">
        <p  onClick={mostrar_registrarse}>¿No tienes cuenta? <a >Registrarser</a></p>
      </div>


      <button onClick={Ingresar} className="btn" >Ingresar</button>
      </form>

    </section>




    <section className="form_registrse" id="registrarse">
      <form>
      <h1>Registrarse</h1>

      <div className="inpust">
      <input type="text" name="usuario"  id="usuario" value ={usuarioRegistrarse} onChange={cambiarUsuarioRegistrarse} placeholder="Usuario" required/>
      <i class='bx bxs-user'></i>
      </div>

      <div className="inpust">
      <input type="password" name="clave"  id="clave"  value ={claveRegistrarse} onChange={cambiarClaveRegistrarse} placeholder="Contraseña" required/>
      <i class='bx bxs-lock-alt' ></i>
      </div>

      <button onClick={Registrar} className="btn" >Registrarse</button>

       <div className="register-link">
        <p onClick={mostrar_iniciar}>¿Ya tienes una cuenta? <a >Iniciar seccion</a></p>
      </div>
      </form>
      </section>



     

</div>
  )
}

export default App
