import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import ConfAlumn from '@/components/ConfAlum';
import Image from 'next/image';

function index() {

    const [nombreUser, setNombreUser] = useState('');

    useEffect(() => {
        let constUsuario = localStorage.getItem('nombreActual');
        if (constUsuario) {
            setNombreUser(constUsuario);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);


    const [imagenUrl, setImagenUrl] = useState('/images/pruebaUsuario1.jpg');

    return (
        <>
            <div className={styles.megaConte}>
                <div className={styles.subMegaConte}>
                    <TopAppBar title="Biblioteca"/>
                </div>
                
                <div className={styles.subMegaConte}>
                    <div className={styles.contenedor}>
                    <div className={styles.child1}>
                            <div className={styles.child2}>
                                <Link className={styles.links} href='/alumno'>Principal</Link>
                                <Link className={styles.links} href='/alumno/configuracion'>Perfil</Link> 
                                <Link className={styles.links} href='/alumno/prestamos'>Biblioteca</Link>
                                <Link className={styles.links} href='/alumno/favoritos'>Favoritos</Link>
                                <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <h1>Hola, {nombreUser}</h1>
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
                                        <ConfAlumn onImagen = {setImagenUrl}/>
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