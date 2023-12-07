'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Textfield from '@/components/Textfield'
import BasicButtons from '@/components/Button'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
export default function Home() {
  
  const [estudiante, setUsuarios] = useState([]);
  const [admins, setAdmins] = useState([]);

    async function fetchLastAdmins(){
        const resp = await fetch("http://localhost:3100/api/student/getAllAdmins",{
            method:"GET"
        })
        const newAdmins = await resp.json()
        setAdmins(newAdmins)
    }

    async function fetchLastEstudiantes(){
        const resp = await fetch("http://localhost:3100/api/student/getAllStudents",{
            method:"GET"
        })
        const newEstudiante = await resp.json()
        setUsuarios(newEstudiante)
    }

    useEffect(() =>{
      fetchLastAdmins()
      fetchLastEstudiantes()
    }, [])

  const usuarioLogin = {
    Nombre: "",
    Contraseña: ""
  }

  const [user, SetUsuarioLogin] = useState(usuarioLogin);

  const verificar = () => {
    for(var i= 0; i < estudiante.length; i++){
      if(estudiante[i].name == user.Nombre || estudiante[i].email == user.Nombre ){
        if(estudiante[i].password == user.Contraseña){
            let newNombre = localStorage.setItem('nombreActual', estudiante[i].name)
            let newId = localStorage.setItem('idActual', estudiante[i].id);
            location.href = "/alumno"
        }else{
          alert("La contraseñas no coinciden")
        }
      }
  }

  for (var i = 0; i < admins.length; i++) {
    if (admins[i].name === user.Nombre || admins[i].email === user.Nombre) {
      if (admins[i].password === user.Contraseña) {
        let newNombre = localStorage.setItem('nombreActual', admins[i].name)
        let newId = localStorage.setItem('idActual', admins[i].id);
        location.href = "/administrador";
      } else {
        alert("La contraseña no coinciden");
      }
    }
  }

      alert("Usuario no encontrado");

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