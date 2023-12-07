import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import styles from './Libro.module.css'
import Boton3 from '@/components/Button3';
import Link from 'next/link';

function Libro({Titulo, Isbn, Foto, Autor, Editor, LibroId, Estado, Editorial, Topico}) {
    
    const TituloIniciales = Titulo
        .split(' ')
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase())
        .join('');

    const handleReservarClick = () => {
        const libroReservado = {
            id: LibroId,
            Titulo,
            Isbn,
            Autor,
            Foto,
            Editor,
            Estado,
            Editorial,
            Topico
        };
        localStorage.setItem('LibroActual', JSON.stringify(libroReservado));
        location.href = "/administrador/bibleoteca/libro";
        };
        
    return (
        <>
        <Card sx={{ maxWidth: 360, borderRadius: '15px', border: '0.5px solid #D9D9D9', width: '314px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[800] }} aria-label="recipe">
                        {TituloIniciales}
                    </Avatar>
                }
                title= {Titulo}
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
                <div className={styles.reservar}>
                    <Boton3
                        texto='Más información'
                        estilo='contained'
                        ancho='150'
                        onClick={handleReservarClick}
                    />
                </div>
            </CardContent>
        </Card>
        </>
    );
}

export default Libro;