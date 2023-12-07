'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import Textfield from '@/components/Textfield'
import BasicButtons from '@/components/Button'

function registro() {

    async function registerAlumno(nuevoAlumno){
        const response = await fetch("http://localhost:3100/api/student/getRegisterStudent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoAlumno),
        });
    }

    async function registerAdmin(nuevoAdmin){
        const response = await fetch("http://localhost:3100/api/student/getRegisterAdministrator", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoAdmin),
        });
    }

    const [usuarioNuevo, setUsuarioNuevo] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        identityDoc: 0,
        photo: "",
        language: "",
        prefix: "",
        colorfavorite: "",
    });

    const [nuevaContraseña, setNuevaContraseña] = useState('');

    const [tipoUsuario, setTipoUsuario] = useState('');


    const handleAgregar = async () => {
        console.log("Tipo de usuario:", tipoUsuario);
    
        if (tipoUsuario === "Administrador") {
            await registerAdmin(usuarioNuevo);
            console.log('Usuario administrador registrado exitosamente');
        } else if (tipoUsuario === "Alumno") {
            await registerAlumno(usuarioNuevo);
            console.log('Usuario alumno registrado exitosamente');
        } else {
            console.error('Tipo de usuario no reconocido');
            return;
        }
    
        location.href = "../";
    }
    

    const handleValidarForm = async () => {
        try {
            if(
                usuarioNuevo.lastName == "" 
                ||usuarioNuevo.email == "" 
                ||usuarioNuevo.name == "" 
                ||usuarioNuevo.identityDoc == "" 
                ||usuarioNuevo.password == "" 
                ||nuevaContraseña == "" 
                ||tipoUsuario == ""){
                window.location.reload(false)
                alert("No deje datos en blanco");
            }else{
                if(usuarioNuevo.password != nuevaContraseña){
                    window.location.reload(false)
                    alert("Las contraseñas no coinciden");
                } else {
                    handleAgregar();
                }
            }
        } catch (error) {
            console.error("Error al validar el formulario:", error);
            // Manejar errores aquí si es necesario
        }
    }

    const handleTipoUsuarioChange = (event) => {
        setTipoUsuario(event.target.value);
    };

    return (
        <>
            <h1 className={styles.titulo}>Sistema de Reservas de Libros</h1>
            <h2 className={styles.subTitulo}>Registro de usuario</h2>
            <div className={styles.megaSeccion}>
                <div className={styles.secion1}>
                    <h2 className={styles.subFormulario}>Datos personales</h2>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, name: event.target.value})} value={usuarioNuevo.name}>
                        <Textfield autoComplete="off" texto={'Nombres'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, lastName: event.target.value})} value={usuarioNuevo.lastName}>
                        <Textfield texto={'Apellidos'}/>
                    </div>
                    <div onChange={handleTipoUsuarioChange} value={tipoUsuario}>
                        <Textfield texto={'Tipo de Documento'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, identityDoc: event.target.value})} value={usuarioNuevo.identityDoc}>
                        <Textfield texto={'Nro de Documento'}/>
                    </div>
                    <p className={styles.crear}><Link style={{ textDecoration: 'none'}} 
                        href='../'>Volver</Link></p>
                </div>
                <div className={styles.secion1}>
                    <h2 className={styles.subFormulario}>Datos de la Cuenta</h2>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, email: event.target.value})} value={usuarioNuevo.email}>
                        <Textfield texto={'Correo Electrónico'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, password: event.target.value})} value={usuarioNuevo.password}>
                        <Textfield texto={'Contraseña'} isPassword={true} />
                    </div>
                    <div onChange={event => setNuevaContraseña(event.target.value)} value={nuevaContraseña}>
                        <Textfield texto={'Ingrese contraseña nuevamente'} isPassword={true} />
                    </div>
                    <div onClick={handleValidarForm}>
                        <BasicButtons 
                        style={{ width: '312px', marginTop: '38px'}} texto={"Registrar"} />
                    </div>
                </div>
            </div>
        </>
        
    )   
}

export default registro