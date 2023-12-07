import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import SemiLibro from '@/components/SemiLibro';

function index() {

    const [nombreUser, setNombreUser] = useState('');
    const [librosUserReserv, setLibrosUserReserv] = useState([]);
    const [librosUserProx, setLibrosUserProx] = useState([]);

    async function fetchLastBookings(){
        const resp = await fetch("http://localhost:3100/api/student/getLastBookings",{
            method:"GET"
        })
        const a = await resp.json()
        console.log("Last books" + a)
        setLibrosUserReserv(a)
    }

    async function fetchLibrosUserProx(){
        const resp = await fetch("http://localhost:3100/api/student/getLibrosUserProx",{
            method:"GET"
        })
        const a = await resp.json()
        console.log(a)
        setLibrosUserProx(a)
    }

    
    useEffect(() => {
        fetchLastBookings();
        fetchLibrosUserProx();
        const newName = localStorage.getItem('nombreActual');
            setNombreUser(newName);
        const newId = localStorage.getItem('idActual');
        console.log(newId);
    }, [])
    
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
                                    <Link className={styles.links} href='/alumno'>Principal</Link>
                                    <Link className={styles.links} href='/alumno/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/alumno/prestamos'>Biblioteca</Link>
                                    <Link className={styles.links} href='/alumno/favoritos'>Favoritos</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <h1>Bienvenido, {nombreUser}!</h1>
                            <Divider />
                            <div className={styles.megaConte3}>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Últimas Reservas</p>
                                    <div className={styles.miniLibro}>
                                        {librosUserReserv.length > 0 ? (
                                            <>
                                                {librosUserReserv.map((x, index) => (
                                                    <SemiLibro key={index} Titulo={x.title} Fecha={x.createdAt} Foto={x.photobook} />
                                                ))}  
                                            </>
                                        ) : (
                                            <p className={styles.subSubTexto}>No existen libros</p>
                                        )}
                                    </div>
                                    {librosUserReserv.length > 0 ? (
                                        <div>
                                            <Link className={styles.verTodo} href='/alumno/misLibros'>Ver todo</Link>
                                        </div>
                                        ): (
                                            ''
                                        )
                                    }   
                                </div>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Próximos a vencer</p>                                    
                                     <div className={styles.miniLibro}>
                                        {librosUserProx.length > 0 ? (
                                            <>
                                                {librosUserProx.map((x, index) => (
                                                    <SemiLibro key={index} Titulo={x.title} Fecha={x.author} Foto={x.photobook} />
                                                ))}  
                                            </>
                                        ) : (
                                            <p className={styles.subSubTexto}>No hay libros pedidos</p>
                                        )}
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