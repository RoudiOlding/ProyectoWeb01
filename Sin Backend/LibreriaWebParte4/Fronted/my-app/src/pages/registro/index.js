import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import Textfield from '@/components/Textfield'
import BasicButtons from '@/components/Button'

function registro() {

    //Primera parte: Se cargan los usuario ya registrados
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"));
        setUsuarios(usuariosRegistrados);
    }, [])

    // Cada vez que se modifique la lista de usuarios, se actualizará el local storage
    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    },[usuarios])

    //Segunda parte: Seteamos para crear un nuevo usuario

    const usuario = {
        Id: 0,
        Nombre: "",
        Appelido: "",
        TipoDoc: "",
        NroDoc: 0,
        Correo: "",
        Contraseña: "",
        Foto: "",
        Idioma: "",
        Prefijo: "",
        ColorFavorito: "",
        librosPrestados: [{}],
        librosFavoritos: [{}]
    }

    console.log(usuario.Id)

    const Constraseña2 = 0;

    const [nuevaContraseña, setNuevaContraseña] = useState(Constraseña2);

    const [usuarioNuevo, setUsuarioNuevo] = useState(usuario);

    //Tercera parte: Preparamos formulario
    const handleAgregar = (usuario) => {
        setUsuarios([...usuarios, usuario])
    }

    const handleValidarForm = () => {
        if(
            usuarioNuevo.Appelido == "" 
            ||usuarioNuevo.Correo == "" 
            ||usuarioNuevo.Nombre == "" 
            ||usuarioNuevo.NroDoc == "" 
            ||usuarioNuevo.Contraseña == "" 
            ||nuevaContraseña == "" 
            ||usuarioNuevo.TipoDoc == ""){
            console.log(usuarioNuevo)
            window.location.reload(false)
            alert("No deje datos en blanco");
        }else{
            if(usuarioNuevo.Contraseña != nuevaContraseña){
                window.location.reload(false)
                alert("Las contraseñas no coinciden");
            } else {
                const tamId = usuarios.length + 1; // Calcula el tamId justo antes de agregar el nuevo usuario
                const usuarioConId = { ...usuarioNuevo, Id: tamId };
                handleAgregar(usuarioConId);
                location.href = "../";
            }
        }
    }

    return (
        <>
            <h1 className={styles.titulo}>Sistema de Reservas de Libros</h1>
            <h2 className={styles.subTitulo}>Registro de usuario</h2>
            <div className={styles.megaSeccion}>
                <div className={styles.secion1}>
                    <h2 className={styles.subFormulario}>Datos personales</h2>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, Nombre: event.target.value})} value={usuarioNuevo.Nombre}>
                        <Textfield autoComplete="off" texto={'Nombres'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, Appelido: event.target.value})} value={usuarioNuevo.Appelido}>
                        <Textfield texto={'Apellidos'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, TipoDoc: event.target.value})} value={usuarioNuevo.TipoDoc}>
                        <Textfield texto={'Tipo de Documento'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, NroDoc: event.target.value})} value={usuarioNuevo.NroDoc}>
                        <Textfield texto={'Nro de Documento'}/>
                    </div>
                    <p className={styles.crear}><Link style={{ textDecoration: 'none'}} 
                        href='../'>Volver</Link></p>
                </div>
                <div className={styles.secion1}>
                    <h2 className={styles.subFormulario}>Datos de la Cuenta</h2>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, Correo: event.target.value})} value={usuarioNuevo.Correo}>
                        <Textfield texto={'Correo Electrónico'}/>
                    </div>
                    <div onChange={event => setUsuarioNuevo({...usuarioNuevo, Contraseña: event.target.value})} value={usuarioNuevo.Contraseña}>
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