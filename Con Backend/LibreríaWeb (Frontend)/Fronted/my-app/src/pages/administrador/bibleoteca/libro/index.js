import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import DetalleLibro from '@/components/DetalleLibro';
import Boton3 from '@/components/Button3';

function index() {
    
    const [libroAct, setLibroAct] = useState();

    useEffect(() => {
        const newLibroAct = JSON.parse(localStorage.getItem('LibroActual'));
        setLibroAct(newLibroAct)
        console.log(libroAct)
        console.log('aaa')
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
                                    <Link className={styles.links} href='/administrador'>Principal</Link>
                                    <Link className={styles.links} href='/administrador/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/administrador/bibleoteca'>Biblioteca</Link>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index