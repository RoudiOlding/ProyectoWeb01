import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import DetalleLibro from '@/components/DetalleLibro';
import Boton3 from '@/components/Button3';
import DataPickerFinal from '@/components/DataPickerFinal';
import Alerts from '@/components/Alerts';
import { LocalSeeOutlined } from '@mui/icons-material';

function index() {
    const [libroAct, setLibroAct] = useState();
    const [fecha, setFecha] = useState(''); //Almacena la fecha
    const [libros, setLibros] = useState([]);
    const [userAct, setUserAct] = useState();
    const [users, setUsers] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        const newLibroAct = JSON.parse(localStorage.getItem('LibroActual'));
        console.log(newLibroAct)
        setLibroAct(newLibroAct)
        const newUserAct = localStorage.getItem('nombreActual');
        console.log(newUserAct)
        setUserAct(newUserAct)
        const newId = localStorage.getItem('idActual');
        setId(newId);
    }, [])

    useEffect(() => {
        console.log('La fecha nueva es: ' + fecha)
    }, [fecha])

const getCurrentDateISO = () => new Date().toISOString();

async function reservarLibro (idUser, libro, selectedDate2, lastFec){
    try {
        const response = await fetch("http://localhost:3100/api/student/createBooking", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                StudentId: idUser,
                BookId: libroAct?.id,
                title: libroAct?.Titulo,
                photobook: libroAct?.Foto,
                startDate: selectedDate2,
                endDate: lastFec,
            }),
    });

    if (response.ok) {
        // El libro se reservó correctamente, puedes manejar el resultado aquí
        console.log('Reserva completada');
        const data = await response.json();
        console.log(data); // Puedes imprimir la respuesta del backend si es necesario
        //location.href = '/alumno'
    } else {
        // Manejar el caso en que la respuesta no sea exitosa
        console.error('Error al reservar el libro');
    }
    } catch (error) {
    console.error('Error:', error);
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
                                                accion1='Reservar'
                                                estilo='contained'
                                                ancho='200'
                                                titulo='Reserva completada'
                                                subtexto={`La reserva del curso se ha realizado con éxito. Este debe ser devuelto hasta el día ${fecha}`}
                                                reservarLibro={() => reservarLibro(id, userAct.Id, libroAct, fecha)}
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