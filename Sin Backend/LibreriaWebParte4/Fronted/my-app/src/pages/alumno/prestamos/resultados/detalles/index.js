import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import DetalleLibro from '@/components/DetalleLibro';
import Boton3 from '@/components/Button3';
import DataPickerFinal from '@/components/DataPickerFinal';
import Alerts from '@/components/Alerts';

function index() {
    const [libroAct, setLibroAct] = useState();
    const [fecha, setFecha] = useState('');
    const [libros, setLibros] = useState([]);
    const [userAct, setUserAct] = useState();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const newLibroAct = JSON.parse(localStorage.getItem('LibroActual'));
        console.log(newLibroAct)
        setLibroAct(newLibroAct)
        const newUserAct = JSON.parse(localStorage.getItem('UsuarioActual'))
        console.log(newUserAct)
        setUserAct(newUserAct)
    }, [])

    useEffect(() => {
        console.log('La fecha nueva es: ' + fecha)
    }, [fecha])

    const reservarLibro = (id, idUser) => {
        //Actualizar la listo de libros
        const newLibros = JSON.parse(localStorage.getItem('libros'));
        setLibros(newLibros)
        const libroAfectado = newLibros.find(libro => libro.id === id);

        //Encontrar alumno
        const newUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        setUsers(newUsuarios)
        const usuarioAfectado = newUsuarios.find(usuario => usuario.Id === idUser);

        if(libroAfectado && usuarioAfectado){
            const nuevosValores = {
                disponibilidad: false,
                FechaDevolucion: fecha,
                pedidos: libroAfectado.pedidos + 1,

            }
            
            Object.assign(libroAfectado, nuevosValores);

            const nuevaListaLibros = newLibros.map(libro => (libro.id === id ? libroAfectado : libro));
            setLibros(nuevaListaLibros);
            localStorage.setItem('libros', JSON.stringify(nuevaListaLibros));

            usuarioAfectado.librosPrestados.push(libroAfectado);
            localStorage.setItem('UsuarioActual', JSON.stringify(usuarioAfectado));
            const nuevaListaUsuarios = newUsuarios.map(usuario => (usuario.Id === idUser ? usuarioAfectado : usuario));
            setUsers(nuevaListaUsuarios);
            localStorage.setItem('usuarios', JSON.stringify(nuevaListaUsuarios));

        } else {
            console.error(`No se encontró ningún libro con el id ${id}`)
        }

        //Subir el nuevo libro del usuario a su listo de libros
    }
    
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
                            <div className={styles.subSubMegaConte2}>
                                <h1>Citas</h1>
                                <Divider />
                                {
                                    libroAct && (
                                        <DetalleLibro 
                                        Titulo={libroAct?.Titulo}
                                        Autor={libroAct?.Autor}
                                        Estado={libroAct?.Estado ? 'Disponible' : 'Reservado'}
                                        FotoUrl={libroAct?.Foto}
                                        Parrafo='La descripción de este libro es capaz de describir el contenido de este libro, usando una cantidad limitad de palabras. Esto le permite dar a enteder lo que esta insignia busca transmitir. Usualmente, pasada por alto; sin embargo, son muchos los que se guién y adquieren un libro a través de este corto, pero significativo texto. No muchos entienden las maravillas que transmiten estas cortas palabras, te queremos mucho: Párrafo'
                                        NombreEditorial={libroAct?.Editor}
                                        Topico={libroAct?.Topico}
                                        />
                                    )
                                }
                            </div>
                            <div className={styles.reservar}>
                                {
                                    libroAct && libroAct.Estado === true ?  (
                                        <>
                                            <h4 className={styles.tituloReservar}>Reservar</h4>
                                            <DataPickerFinal setFecha={setFecha}/>
                                            <div>
                                                <Alerts
                                                    accion1= 'Reservar'
                                                    estilo='contained'
                                                    ancho='200'
                                                    titulo='Reserva completada'
                                                    subtexto={`La reserva del curso se ha realizado con éxito. Este debe ser devuelto hasta el día ${fecha}`}
                                                    reservarLibro={() => reservarLibro(libroAct.id, userAct.Id)}
                                                />
                                            </div>
                                        </>
                                    ): (
                                        ''
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index