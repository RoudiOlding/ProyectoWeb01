import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider, Button } from '@mui/material';
import Boton3 from '@/components/Button3';
import BusquedaAdmin from '@/components/BusquedaAdmin';
import Libro2 from '@/components/Libro2';
import Pagination2 from '@/components/Pagination';

function index() {
    const [nombreUser, setNombreUser] = useState('');
    const [idUser, setIdUser] = useState('');
    const [ini, setIni] = useState(1)
    const [libros, setLibros] = useState([]);
    const [librosMostrar, setLibrosMostrar] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [startPage, setStartPage] = useState(1);
    const [busqueda, setBusqueda] = useState('');
    const [start, setStart] = useState('');

    useEffect(() => {
        let constUsuario = localStorage.getItem('UsuarioActual');
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            setNombreUser(usuario.Nombre);
            const libros = usuario.librosPrestados;
            const tam = libros.lenght;
            const librosFilt = libros.slice(1, tam)
            setLibros(librosFilt);
            setIdUser(usuario.Id)
            console.log(usuario.librosPrestados)
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, [start]);

    const setearLibrosBuscados = (start, buscarCampo) => {
        let iniPage = (start * 3);
        let maxPage = iniPage + 3;

        let filteredLibros = libros;

        if (buscarCampo.trim() !== '') {
            filteredLibros = libros.filter(
                (libro) =>
                libro.titulo?.toLowerCase().includes(buscarCampo.toLowerCase())
            );
        }

        const slice1 = filteredLibros.slice(iniPage, maxPage);
        setLibrosMostrar(slice1);

        let oldMaxPages = Math.ceil((filteredLibros.length)/ 3);
        setMaxPages(oldMaxPages);
        
    }

    useEffect(() => {
        //Aquí poner la página actual obtenido
        let currentPage = startPage -1;
        setearLibrosBuscados(currentPage, busqueda)
    }, [busqueda, startPage, libros]) //Aquí colocar cada que cambie la página del pagination, para que se cargue todo

    const handlePageChange = (newStartPage) => {
        setStartPage(newStartPage);
    };

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
                            <div className={styles.conteAgregar}>
                                <h1>Libros reservados</h1>
                            </div>
                            <Divider />
                            <div 
                                className={styles.conteAgregar2}
                            >
                                <BusquedaAdmin 
                                    onBuscarCargado={setBusqueda}    
                                />
                            </div>
                            <div className={styles.conteAgregar3}>
                                {librosMostrar.map((libro) => (
                                    <Libro2 
                                        Titulo={libro.titulo}
                                        Isbn={libro.ISBN13}
                                        Autor={libro.autor}
                                        Foto={libro.FotoLibro}
                                        Editor={libro.editorial}
                                        LibroId={libro.id}
                                        Estado={libro.disponibilidad}
                                        Editorial={libro.editorial}
                                        Topico={libro.categoria}
                                        Accion='Devolver'
                                        IdAlumno = {idUser}
                                        go = {setStart}
                                    />
                                ))}
                            </div>
                            <div>
                                <Pagination2 maxPage={maxPages} onPageChange={handlePageChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index