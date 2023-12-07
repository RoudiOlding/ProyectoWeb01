import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider, Button } from '@mui/material';
import Image from 'next/image';
import NuevoLibro from '@/components/NuevoLibro';

function index() {
    const [nombreUser, setNombreUser] = useState('');

    useEffect(() => {
        let constUsuario = localStorage.getItem('UsuarioActual');
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            setNombreUser(usuario.Nombre);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);

    const [libros, setLibros] = useState([]);

        const getDataFromLocalStorage = () => {
        try {
            const librosLocal = localStorage.getItem('libros');
            if (librosLocal) {
            const nuevosLibros = JSON.parse(librosLocal);
            setLibros(nuevosLibros);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
        };
    
        useEffect(() => {
            getDataFromLocalStorage();
        }, [])
    
        console.log(libros.length)
    
        const numpages = Math.ceil(libros.length / 3);

        const [imagenUrl, setImagenUrl] = useState('/images/librosAgregar.jpeg');

        const handleImagenChange = (event) => {
            const file = event.target.files[0];
        
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setImagenUrl(imageUrl);
            }
        };
    
    return (
        <>
            <div className={styles.megaConte}>
                <div className={styles.subMegaConte}>
                    <TopAppBar title=""/>
                </div>
                
                <div className={styles.subMegaConte}>
                    <div className={styles.contenedor}>
                        <div className={styles.child1}>
                            <div className={styles.child2}>
                                    <Link className={styles.links} href='/administrador'>Principal</Link>
                                    <Link className={styles.links} href='/administrador/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/administrador/bibleoteca'>Biblioteca</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <div className={styles.conteAgregar}>
                                <h1>Hola, {nombreUser}</h1>
                            </div>
                            <Divider />
                            <div className={styles.megaConte3}>
                                <div className={styles.subMegaConte3}>
                                    <div className={styles.subSubMegaConte3}>
                                        <Image
                                            src={imagenUrl}
                                            alt="Prueba Usuario 1"
                                            className={styles.imagenEstilo}
                                            width={279}
                                            height={253}
                                        />
                                    </div>
                                    <div className={styles.subSubMegaConte4}>
                                        <NuevoLibro />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index