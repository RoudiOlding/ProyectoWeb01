import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider, Button } from '@mui/material';
import Boton3 from '@/components/Button3';
import Boton2 from '@/components/Button2';
import Libro from '@/components/Libro';
import Pagination2 from '@/components/Pagination';
import LibroFinalSeasson from '@/components/LibroFinalSeasson';
import Libro2 from '@/components/Libro2';


function index() {
    const [nombreUser, setNombreUser] = useState('');
    const [ini, setIni] = useState(1)
    const [idUser, setIdUser] = useState('');
    const [start, setStart] = useState('');
    
    useEffect(() => {
        let constUsuario = localStorage.getItem('UsuarioActual');
        setIni(localStorage.getItem('currentPage'))
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            setNombreUser(usuario.Nombre);
            setIdUser(usuario.Id)
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, [start]);

    const [libros, setLibros] = useState([]);
    const [librosMostrar, setLibrosMostrar] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [startPage, setStartPage] = useState(1);

    useEffect(() => {
        let newLibros = JSON.parse(localStorage.getItem("filtro"));
        setLibros(newLibros)
    }, [])
    
    const mostrarLibros = (start) => {
        let iniPage = start * 3;
        let maxPage = iniPage + 3;

        let filteredLibros = libros;

        const slice1 = filteredLibros.slice(iniPage, maxPage);
        setLibrosMostrar(slice1);

        let oldMaxPages = Math.ceil(filteredLibros.length / 3);
        setMaxPages(oldMaxPages);
    }

    const P3reload = () => {
        location.href = '/alumno/prestamos';
    }

    const goRersevas = () => {
        location.href = '/alumno/misLibros';
    }

    useEffect(() => {
        //Aquí poner la página actual obtenido
        let currentPage = startPage -1;
        mostrarLibros(currentPage)
    }, [startPage, libros]) //Aquí colocar cada que cambie la página del pagination, para que se cargue todo

    const handlePageChange = (newStartPage) => {
        setStartPage(newStartPage);
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
                            <div className={styles.conteAgregar}>
                                <h1>Búsqueda - Resultados</h1>
                                <div className={styles.subConteAgregar2} onClick={P3reload}>
                                    <Boton3 texto='Volver a buscar' estilo='contained'/>
                                </div>
                            </div>
                            <Divider />
                            <div className={styles.resultado}>
                                <p>Resultados de la búsqueda</p>
                                <div onClick={goRersevas}>
                                    <Boton2 texto='Ver mis reservas' estilo='outlined'/>
                                </div>
                            </div>
                            <div className={styles.conteAgregar3}>
                                {librosMostrar.map((libro) => (
                                    <LibroFinalSeasson 
                                    Titulo={libro.titulo}
                                    Isbn={libro.ISBN13}
                                    Autor={libro.autor}
                                    Foto={libro.FotoLibro}
                                    Editor={libro.editorial}
                                    LibroId={libro.id}
                                    Estado={libro.disponibilidad}
                                    Editorial={libro.editorial}
                                    Topico={libro.categoria}
                                    IdAlumno = {idUser}
                                    go = {setStart}
                                    />
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <Pagination2 maxPage= {maxPages} onPageChange={handlePageChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index