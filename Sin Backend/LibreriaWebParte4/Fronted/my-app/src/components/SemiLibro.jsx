// SemiLibro.jsx

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import styles from './SemiLibro.module.css';

function SemiLibro({ Titulo, Fecha, Foto }) {
    const TituloIniciales = Titulo
        .split(' ')
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase())
        .join('');

    return (
        <Card sx={{ borderRadius: '14px', border: '1px solid #CAC4D0' }} className={styles.cardContainer}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: purple[700] }} aria-label="recipe">
                {TituloIniciales}
            </Avatar>
            }
            title={Titulo}
            subheader={Fecha}
        />

        <CardMedia
            component="img"
            className={styles.cardImage}
            image={Foto}
            alt="Imagen"
        />
        </Card>
    );
}

export default SemiLibro;
