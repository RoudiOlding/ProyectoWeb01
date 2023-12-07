import React, { useEffect, useState } from 'react';
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import BusquedaAlum from '@/components/BusquedaAlum';
import ChipFiltro from '@/components/Chip4';
import CheckFilter from '@/components/CheckBox';
import Boton3 from '@/components/Button3';
import BasicButtons2 from '@/components/Button2';

function index() {
    
    const [libros, setLibros] = useState([]);
    const [clave, setClave] = useState('');
    const [tipo, setTipo] = useState('');
    const [resultado, setResultado] = useState([]);
    const [filtro1, setFiltro1] = useState(true);
    const [filtro2, setFiltro2] = useState(false);
    const [filtro3, setFiltro3] = useState(false);
    const [filtro4, setFiltro4] = useState(false);
    const [filtro5, setFiltro5] = useState(false);

    useEffect(() => {
        let newLibros = JSON.parse(localStorage.getItem('libros'));
        if(newLibros){
            setLibros(newLibros);
            console.log('Se cargaron los libros exitosamente')
        }else{
            console.error('No existen libros')
        }
    }, [])

    const P3reload = () => {
        window.location.reload();
    }

    const handleOnBusqueda = () => {
        if (clave !== '' && (filtro1 || filtro2 || filtro3 || filtro4 || filtro5 )) {
            console.log("Buscando por: " + clave)
            console.log("Buscando por tipo: " + tipo)
            let librosFiltrados = [...libros];
            if (tipo !== ''){
                console.log("Ordenando por el tipo de Libro: " + tipo)
                librosFiltrados = librosFiltrados.filter((libro) =>
                libro.categoria?.toLowerCase().includes(tipo.toLowerCase())
                );
            }
            librosFiltrados = BusquedaAvanzada(librosFiltrados);
            localStorage.setItem('filtro', JSON.stringify(librosFiltrados));
            location.href = '/alumno/prestamos/resultados';
        }else{
            if(clave == ''){
                alert('Escriba el libro ha buscar')
            }
            if(!filtro1 && !filtro2 && !filtro3 && !filtro4 && !filtro5){
                alert('Selecciona al menos un filtro')
            }
        }

        function BusquedaAvanzada(librosFiltrados) {
            if (filtro1 == true) {
                librosFiltrados = librosFiltrados.filter((libro) => libro.titulo?.toLowerCase().includes(clave.toLowerCase())
                );
            } else if (filtro2 == true) {
                console.log("Ejecutando opción 2");
                librosFiltrados = librosFiltrados.filter((libro) => libro.autor?.toLowerCase().includes(clave.toLowerCase())
                );
            } else if (filtro3 == true) {
                console.log("Ejecutando opción 3");
                librosFiltrados = librosFiltrados.filter((libro) => libro.idioma?.toLowerCase().includes(clave.toLowerCase())
                );
            } else if (filtro4 == true) {
                console.log("Ejecutando opción 4");
                librosFiltrados = librosFiltrados.filter((libro) => libro.ISBN13?.toLowerCase().includes(clave.toLowerCase())
                );
            } else if (filtro5 == true) {
                console.log("Ejecutando opción 5");
                librosFiltrados = librosFiltrados.filter((libro) => libro.editorial?.toLowerCase().includes(clave.toLowerCase())
                );
            }
            return librosFiltrados;
        }
    }

    const handleFiltroChange = (filtro) => {
        setFiltro1(false);
        setFiltro2(false);
        setFiltro3(false);
        setFiltro4(false);
        setFiltro5(false);
        
        switch (filtro) {
            case 'filtro1':
                setFiltro1(true);
                break;
            case 'filtro2':
                setFiltro2(true);
                break;
            case 'filtro3':
                setFiltro3(true);
                break;
            case 'filtro4':
                setFiltro4(true);
                break;
            case 'filtro5':
                setFiltro5(true);
                break;
            default:
                break;
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
                                    <Link className={styles.links} href='/alumno'>Principal</Link>
                                    <Link className={styles.links} href='/alumno/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/alumno/prestamos'>Biblioteca</Link>
                                    <Link className={styles.links} href='/alumno/favoritos'>Favoritos</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <h1>Busqueda </h1>
                            <Divider />
                            <div className={styles.busqueda}>
                                <div className={styles.textField}>
                                    <div className={styles.subTextField}>
                                        <div>
                                            <BusquedaAlum titulo='Ingrese la palabra clave' ancho='550' setClave={setClave}/>
                                        </div>
                                        <div>
                                            <BusquedaAlum titulo='Tipo de recurso' ancho='400' setClave={setTipo}/>
                                        </div>
                                    </div>
                                    <div className={styles.tematica}>
                                        {
                                            tipo != ''?
                                                <ChipFiltro texto={tipo} borrar={setTipo}/>  
                                            :
                                                ''
                                        }
                                    </div>
                                </div>
                                <div className={styles.filtrado}>
                                    <p className={styles.label}>Incluir búsqueda en</p>
                                    <CheckFilter texto='Título' activo={filtro1} setExterno={() => handleFiltroChange('filtro1')} />
                                    <CheckFilter texto='Autor, autores' activo={filtro2} setExterno={() => handleFiltroChange('filtro2')} />
                                    <CheckFilter texto='Idioma' activo={filtro3} setExterno={() => handleFiltroChange('filtro3')} />
                                    <CheckFilter texto='ISBN' activo={filtro4} setExterno={() => handleFiltroChange('filtro4')} />
                                    <CheckFilter texto='Editorial' activo={filtro5} setExterno={() => handleFiltroChange('filtro5')} />
                                    <div className={styles.opciones}>
                                        <div onClick={P3reload}>
                                            <BasicButtons2 texto='Limpiar' ancho='90'/>
                                        </div>
                                        <div onClick={handleOnBusqueda}>
                                            <Boton3 texto='Buscar' ancho='40px' estilo='contained'/>
                                        </div>
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