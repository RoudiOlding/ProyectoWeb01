'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Textfield from '@/components/Textfield'
import BasicButtons from '@/components/Button'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
export default function Home() {
  const listaUsuarios = [
    {
      Id: 1,
      Nombre: "Axel",
      Appelido: "Yabar",
      TipoDoc: "Administrador",
      NroDoc: 1,
      Correo: "axelyabar@gmail.com",
      Contraseña: "123",
      Foto: "",
      Idioma: "",
      Prefijo: "",
      ColorFavorito: "",
      librosPrestados: [{}],
      librosFavoritos: [{}]
    },
    {
      Id: 2,
      Nombre: "Rodrigo",
      Appelido: "De los Ríos",
      TipoDoc: "Alumno",
      NroDoc: 21,
      Correo: "rdelosrios@gmail.com",
      Contraseña: "456",
      Foto: "",
      Idioma: "",
      Prefijo: "",
      ColorFavorito: "",
      librosPrestados: [{}],
      librosFavoritos: [{}]
    }  
  ]

  /* Para verificar si existe una lista de usuarios, de lo contrario se sube la default*/
  useEffect(()=>{
    let usuarios = localStorage.getItem("usuarios");

    if (!usuarios)
      window.localStorage.setItem("usuarios",JSON.stringify(listaUsuarios));
  }, [])

  // Cargar y almacenar libros desde el archivo JSON
    useEffect(() => {
      let libros = localStorage.getItem("libros");

      if(!libros){
        fetch("/data/newLibrary.json")
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("libros", JSON.stringify(data));
        })
        .catch(error => console.error("Error al cargar el archivo JSON de libros:", error));
      }
    }, []);
  
  const [UsuariosCapturados, setCapturados] = useState([]);
  /*Obtenemos la lista de usuarios que tenga el local storage */
  useEffect(() =>{
    let usuarioInicial = JSON.parse(localStorage.getItem("usuarios"));
    setCapturados(usuarioInicial);
  }, [])

  const usuarioLogin = {
    Nombre: "",
    Contraseña: ""
  }

  const [user, SetUsuarioLogin] = useState(usuarioLogin);

  const verificar = () => {
    console.log("Se activó la función iniciar sesión")
    for(var i= 0; i < UsuariosCapturados.length; i++){
      console.log("Paso 1")
      console.log(user)
      console.log(UsuariosCapturados)
      if(UsuariosCapturados[i].Nombre == user.Nombre || UsuariosCapturados[i].Correo == user.Nombre ){
        console.log("Paso 2")
        if(UsuariosCapturados[i].Contraseña == user.Contraseña){
          console.log("Paso 3")
          const usuarioJSON = JSON.stringify(UsuariosCapturados[i]); // Se convierte en un JSON el usuario
          window.localStorage.setItem("UsuarioActual", usuarioJSON); // Se gurada todo el usuario en el localStorage para hacer operaciones de carga
          if(UsuariosCapturados[i].TipoDoc == "Administrador"){
            location.href = "/administrador"
          }else{
            location.href = "/alumno"
          }
        }else{
          alert("La contraseñas no coinciden")
        }
      }
    }
  } 

  return (
    <main>
      <h1 className={styles.titulo}>Sistema de Reservas de libros</h1>
      <div className={styles.contenedorDatos}>
        <div onChange={event => SetUsuarioLogin({...user, Nombre: event.target.value})} value={user.Nombre}><Textfield texto={'Usuario o correo'}/></div>
        <div onChange={event => SetUsuarioLogin({...user, Contraseña: event.target.value})} value={user.Contraseña}><Textfield texto={'Contraseña'} isPassword={true}/></div>       
        <p className={styles.contra}>Olvidé mi contraseña</p>
      </div>
      <div className={styles.contenedorDatos2}>
        <p className={styles.crear}><Link style={{ textDecoration: 'none'}} href='/registro'>Registro de usuario</Link></p>
        <div onClick={verificar}><BasicButtons texto={"Ingresar"}/></div>
      </div>
    </main>
  )
}