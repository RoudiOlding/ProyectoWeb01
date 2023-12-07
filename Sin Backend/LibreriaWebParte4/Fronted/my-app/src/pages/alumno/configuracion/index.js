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
        let constUsuario = localStorage.getItem('UsuarioActual');
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            setNombreUser(usuario.Nombre);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);

    const [imagenUrl, setImagenUrl] = useState('/images/pruebaUsuario1.jpg');

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
                                    <label className={styles.customFileInput}>
                                        Subir nueva imagen
                                        <input type="file" onChange={handleImagenChange} accept="image/*" />
                                    </label>
                                    </div>
                                    <div className={styles.subSubMegaConte4}>
                                        <ConfAlumn />
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