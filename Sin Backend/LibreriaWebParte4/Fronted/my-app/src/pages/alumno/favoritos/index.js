import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import DataPickerAlone from '@/components/DataPicker';
//import Icon from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import Libro2 from '@/components/Libro2';
import Pagination2 from '@/components/Pagination';
import Boton3 from '@/components/Button3';

function index() {

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

    return (
        <>
            <div className={styles.megaConte}>
                <div className={styles.subMegaConte}>
                    <TopAppBar title="Alumno"/>
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
                            <div className={styles.crearLista}>
                                <h1>Tus libros favoritos: </h1>
                                <Boton3 texto='Crear lista' estilo='contained' ancho='150'/>
                            </div>
                            <Divider />
                            <div className={styles.conteFavorito}>
                                <div className={styles.Lista}>
                                    <div className={styles.cabeceraLista}>
                                        <h3>Lista 1: Nombre Dinámico Lista</h3>
                                        <ReorderIcon />
                                    </div>
                                    <div className={styles.contenido}>
                                        <Libro2 Titulo='Libro Numero 1' Isbn='11111111' Autor='Autor 1' Editor= 'Editor 1' Accion='Detalle'/>
                                        <Libro2 Titulo='Libro Numero 2' Isbn='22222222' Autor='Autor 2' Editor= 'Editor 2' Accion= 'Detalle'/>
                                        <Libro2 Titulo='Libro Numero 3' Isbn='33333333' Autor='Autor 3' Editor= 'Editor 3' Accion='Detalle'/>
                                    </div>
                                    <div className={styles.paginacion}>
                                        <Pagination2 maxPage= {numpages} />
                                    </div>
                                </div>
                                <div className={styles.Lista}>
                                    <div className={styles.cabeceraLista}>
                                        <h3>Lista 2: Nombre Dinámico Lista</h3>
                                        <ReorderIcon />
                                    </div>
                                    <div className={styles.contenido}>
                                        <p>Lista vacía</p>
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