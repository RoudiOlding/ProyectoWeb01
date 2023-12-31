import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider, Button } from '@mui/material';
import Boton3 from '@/components/Button3';
import BusquedaAdmin from '@/components/BusquedaAdmin';
import Libro from '@/components/Libro';
import Pagination2 from '@/components/Pagination';

function index() {
    const [nombreUser, setNombreUser] = useState('');
    const [ini, setIni] = useState(1)
    useEffect(() => {
        let constUsuario = localStorage.getItem('nombreActual');
        if (constUsuario) {
            setNombreUser(constUsuario);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);

    const [libros, setLibros] = useState([]);
    const [librosMostrar, setLibrosMostrar] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [startPage, setStartPage] = useState(1);
    const [busqueda, setBusqueda] = useState('');

    async function fetchAllBooks(){
        const resp = await fetch("http://localhost:3100/api/student/getAllBook",{
            method:"GET"
        })
        const a = await resp.json()
        setLibros(a)
    }

    useEffect(() =>{
        fetchAllBooks()
    },[])

    const setearLibrosBuscados = (start, buscarCampo) => {
        let iniPage = start * 3;
        let maxPage = iniPage + 3;

        let filteredLibros = libros;

        if (buscarCampo.trim() !== '') {
            filteredLibros = libros.filter(
                (libro) =>
                libro.title?.toLowerCase().includes(buscarCampo.toLowerCase())
            );
        }
        const slice1 = filteredLibros.slice(iniPage, maxPage);
        setLibrosMostrar(slice1);

        let oldMaxPages = Math.ceil(filteredLibros.length / 3);
        setMaxPages(oldMaxPages);
        
    }

    useEffect(() => {
        let currentPage = startPage -1;
        setearLibrosBuscados(currentPage, busqueda)
    }, [busqueda, startPage, libros]) //Aquí colocar cada que cambie la página del pagination, para que se cargue todo

    const handlePageChange = (newStartPage) => {
        setStartPage(newStartPage);
    };

    const goEditarLibro = () => {
        location.href = "/administrador/bibleoteca/nuevoLibro";
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
                                    <Link className={styles.links} href='/administrador'>Principal</Link>
                                    <Link className={styles.links} href='/administrador/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/administrador/bibleoteca'>Biblioteca</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <div className={styles.conteAgregar}>
                                <h1>Biblioteca</h1>
                                <div 
                                    className={styles.subConteAgregar2}
                                    onClick={goEditarLibro}
                                >
                                    <Boton3 texto='Añadir un nuevo recurso' estilo='contained'/>
                                </div>
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
                                    <Libro 
                                        Titulo={libro.title}
                                        Isbn={libro.isbn13}
                                        Autor={libro.author}
                                        Foto={libro.photobook}
                                        Editor={libro.editorial}
                                        LibroId={libro.id}
                                        Estado={libro.availability}
                                        Editorial={libro.editorial}
                                        Topico={libro.category}
                                    />
                                ))}
                            </div>
                            <div>
                                <Pagination2 maxPage={maxPages} onPageChange={handlePageChange}/>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index