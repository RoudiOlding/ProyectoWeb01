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

    useEffect(() => {
        let constUsuario = localStorage.getItem('UsuarioActual');   
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            const librosPrestados = usuario.librosPrestados;
            if(librosPrestados.length > 1){
                const reserv = [...librosPrestados].reverse();
                console.log(reserv);
                const prox = [...librosPrestados].sort((a, b) => new Date(a.FechaDevolucion) - new Date(b.FechaDevolucion));
                console.log(prox);
                let maxPages = librosPrestados.length -1;
                if(maxPages > 2){
                    maxPages = 2;
                }
                let maxPages2 = librosPrestados.length;
                if(maxPages2 > 2){
                    maxPages2 = 3;
                }
                const first2bookReserv = reserv.slice(0,maxPages);
                const first2bookProx = prox.slice(1,maxPages2);
                setLibrosUserReserv(first2bookReserv);
                setLibrosUserProx(first2bookProx);
            }else{
                console.error("No hay libros");
            }
            setNombreUser(usuario.Nombre);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);
    
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
                                                    <SemiLibro key={index} Titulo={x.titulo} Fecha={x.FechaDevolucion} Foto={x.FotoLibro} />
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
                                    <p className={styles.subSubTitulo}>Próximos a vencer</p>                                    <div className={styles.miniLibro}>
                                        {librosUserProx.length > 0 ? (
                                            <>
                                                {librosUserProx.map((x, index) => (
                                                    <SemiLibro key={index} Titulo={x.titulo} Fecha={x.FechaDevolucion} Foto={x.FotoLibro} />
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