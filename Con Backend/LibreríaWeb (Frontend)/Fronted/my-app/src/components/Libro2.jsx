import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import styles from './Libro.module.css';
import Boton3 from '@/components/Button3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function Libro2({ Titulo, Isbn, Foto, Autor, Editor , Accion, LibroId, Estado, Editorial, Topico, IdAlumno, go}) {
    const TituloIniciales = Titulo
        ?.split(' ')
        ?.slice(0, 2)
        ?.map(word => word.charAt(0).toUpperCase())
        ?.join('');

    const devolverLibro = (LibroId, IdAlumno) => {
        // Encontrar el libro por el id y cambiarle los valores de "fecha" y "disponibilidad" y remplazarlo en la lista
        const newLibros = JSON.parse(localStorage.getItem('libros'));
        const libroAfectado = newLibros.find(x => x.id == LibroId);
        const newUsuario = JSON.parse(localStorage.getItem('usuarios'));
        const usuarioAfectado = newUsuario.find(x => x.Id == IdAlumno)

        if(libroAfectado){
            const nuevosValores = {
                disponibilidad: true,
                FechaDevolucion: '',
            }

            Object.assign(libroAfectado, nuevosValores);
            const nuevaListaLibros = newLibros.map(libro => (libro.id === LibroId ? libroAfectado : libro));
            localStorage.setItem('libros', JSON.stringify(nuevaListaLibros));
            //Poner el set a lista general de libros
            const nuevaListaLibrosPrestados = usuarioAfectado.librosPrestados.filter(libro => libro.id !== LibroId);
            usuarioAfectado.librosPrestados = nuevaListaLibrosPrestados;
            localStorage.setItem('UsuarioActual', JSON.stringify(usuarioAfectado));
            const listaFinalUsuario = newUsuario.map(user => (user.Id === IdAlumno? usuarioAfectado : user));
            //Actualizar lista usuarios
            localStorage.setItem('usuarios', JSON.stringify(listaFinalUsuario));
            go(LibroId);

        }

        // Quitar la el libro de la lista de usuarios y remplazar la lista

        // Actualizar el usuario actual
    }

    useEffect(() => {

    })

    return (
        <>
            <Card sx={{ maxWidth: 360, borderRadius: '15px', border: '0.5px solid #D9D9D9', width: '314px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: purple[800] }} aria-label="recipe">
                            {TituloIniciales}
                        </Avatar>
                    }
                    title={
                        <>
                            <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{Titulo}</span>
                                <IconButton aria-label="add to favorites" sx={{ ml: 10 }}>
                                    <FavoriteIcon />
                                </IconButton>
                            </div>
                        </>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Foto}
                    alt="La imagen no está disponible"
                />
                <CardContent>
                    <p className={styles.isbn}>ISBN: {Isbn}</p>
                    <p className={styles.autor}>
                        Autor: <span className={styles.autor2}>{Autor}</span>
                    </p>
                    <p>
                        <span className={styles.editor}>Editor: </span>
                        <span className={styles.editor2}>{Editor}</span>
                    </p>
                    <div className={styles.reservar} onClick={() => devolverLibro(LibroId, IdAlumno)}>
                        <Boton3 texto={Accion} estilo='contained' ancho='100' />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default Libro2;
