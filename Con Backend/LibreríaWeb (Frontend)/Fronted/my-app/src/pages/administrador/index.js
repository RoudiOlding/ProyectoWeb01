import React, { use, useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import SemiLibro from '@/components/SemiLibro';
import { Newsreader } from 'next/font/google';

function index() {

    const [nombreUser, setNombreUser] = useState('');
    const [librosPedidos, setLibrosPedidos] = useState([]);
    const [librosReservas, setlibrosReservas] = useState([]);


    async function fetchLastBookings(){
        const resp = await fetch("http://localhost:3100/api/student/getLastBookings",{
            method:"GET"
        })
        const a = await resp.json()
        console.log("Last books" + a)
        setlibrosReservas(a)
    }

    async function fetchMostRequestedBooks(){
        const resp = await fetch("http://localhost:3100/api/student/getMostRequestedBooks",{
            method:"GET"
        })
        const a = await resp.json()
        console.log(a)
        setLibrosPedidos(a)
    }

    useEffect(() =>{
        fetchMostRequestedBooks();
        fetchLastBookings();
        const newName = localStorage.getItem('nombreActual')
        setNombreUser(newName)
    },[])

    
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
                            <h1>Bienvenido, {nombreUser}!</h1>
                            <Divider />
                            <div className={styles.megaConte3}>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Últimas Reservas</p>
                                    
                                    <div className={styles.miniLibro}>
                                        {librosReservas.length > 0 ? (   
                                            librosReservas.map((x,index) => (
                                                <SemiLibro key={index} Titulo= {x.title} Fecha={x.createdAt} Foto={x.photobook}/>
                                            ))
                                        ): (
                                            <p className={styles.subSubTexto}>No hay reservas</p>
                                        )}
                                        
                                    </div>
                                    
                                </div>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Los más pedidos</p>
                                    
                                    <div className={styles.miniLibro}>
                                        {librosPedidos.length > 0 ? (
                                            librosPedidos.map((x,index) => (
                                                <SemiLibro key={index} Titulo={x.title} Fecha={x.author} Foto={x.photobook}/>
                                            )) 
                                        ): (
                                            <p className={styles.subSubTexto}>No existen libros </p>
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