import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from './DetalleLibro.module.css'
import { purple } from '@mui/material/colors';
import Chip2 from './Chip';
import Chip3 from './Chip2';

function DetalleLibro({Titulo, Autor, Estado, FotoUrl, Parrafo, NombreEditorial, Topico}) {

    const TituloIniciales = Titulo
        .split(' ')
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase())
        .join('');

    //Traer el libro actual
    //Usar ese libro actual
    return (
        <>
            <div className={styles.detallesLibro}>
                                <div className={styles.subDetalle}>
                                    <Avatar 
                                        aria-label="recipe"
                                        sx={{
                                            bgcolor: purple[100],
                                            color: 'black',
                                            marginTop: 1.2,
                                        }}
                                    >
                                        {TituloIniciales}
                                    </Avatar>
                                    <div className={styles.megaTitulo}>
                                        <p className={styles.Titulo}>{Titulo}</p>
                                        <p className={styles.autor}>{Autor}</p>
                                    </div>
                                    <div className={styles.subSubDetalle}>
                                        <Chip2 texto={Estado}/>
                                    </div>
                                </div>
                                <div className={styles.subDetalle2}>
                                <img src={FotoUrl} alt='No cargó' className={styles.foto} />
                                    <p className={styles.parrafo}>{Parrafo}</p>
                                    <div className={styles.subSubDetalle2}>
                                        <div>
                                            <p className={styles.editorial}>Editorial</p>
                                            <p className={styles.nombreEditorial}>{NombreEditorial}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.subDetalle3}>
                                    <p className={styles.topicos}>Tópicos</p>
                                    <div className={styles.subSubDetalle3}>
                                        <Chip3 texto={Topico} />
                                    </div>
                                </div>
            </div>
        </>
    )
}

export default DetalleLibro